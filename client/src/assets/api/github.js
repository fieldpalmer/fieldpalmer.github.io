import axios from 'axios';
const GITHUB_API_URL = 'https://api.github.com/user/repos?per_page=100';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const fetchGitHubRepos = async () => {
   try {
      const response = await axios.get(GITHUB_API_URL, {
         headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json'
         }
      });

      const repos = response.data.map((repo) => ({
         id: repo.id,
         name: repo.name,
         owner: repo.owner.login,
         dateCreated: repo.created_at,
         description: repo.description || 'No description',
         visibility: repo.private ? 'Private' : 'Public',
         stars: repo.stargazers_count,
         forks: repo.forks_count,
         watchers: repo.watchers_count,
         size: repo.size,
         language: repo.language || 'N/A',
         topics: repo.topics ? repo.topics.join(', ') : 'None',
         license: repo.license ? repo.license.name : 'No License',
         openIssues: repo.open_issues_count,
         defaultBranch: repo.default_branch,
         lastPush: repo.pushed_at,
         branches: repo.branches || 0, // Placeholder (we fetch later)
         commits: repo.commits || 0, // Placeholder (we fetch later)
         homepage: repo.homepage || 'No Website',
         repoUrl: repo.html_url,
         socialImage: `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`,
         readmePreview: 'Loading...' // Placeholder for README preview
      }));

      // Fetch README previews in parallel
      const reposWithReadme = await Promise.all(
         repos.map(async (repo) => {
            const readmePreview = await fetchReadmePreview(repo.owner, repo.name);
            return { ...repo, readmePreview };
         })
      );

      return reposWithReadme;
   } catch (error) {
      console.error('Error fetching repositories:', error);
      return [];
   }
};

export const fetchReadmePreview = async (owner, repo) => {
   try {
      const response = await axios.get(
         `https://api.github.com/repos/${owner}/${repo}/readme`,
         {
            headers: {
               Authorization: `token ${GITHUB_TOKEN}`,
               Accept: 'application/vnd.github.v3+json'
            }
         }
      );

      const decodedReadme = atob(response.data.content); // Decode Base64 content
      const lines = decodedReadme.split('\n').slice(0, 5).join('\n'); // Get first 5 lines
      return lines || 'No README content available.';
   } catch (error) {
      console.error(`Error fetching README for ${repo}:`, error);
      return 'README not found.';
   }
};

export const fetchBranchesAndCommits = async (owner, repo, defaultBranch) => {
   try {
      const branchesResponse = await axios.get(
         `https://api.github.com/repos/${owner}/${repo}/branches`,
         {
            headers: { Authorization: `token ${GITHUB_TOKEN}` }
         }
      );

      const commitsResponse = await axios.get(
         `https://api.github.com/repos/${owner}/${repo}/commits?sha=${defaultBranch}&per_page=1`,
         {
            headers: { Authorization: `token ${GITHUB_TOKEN}` }
         }
      );

      const branchesCount = branchesResponse.data.length;
      let commitsCount = commitsResponse.data.length;

      const linkHeader = commitsResponse.headers['link'];
      if (linkHeader) {
         const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
         commitsCount = match ? parseInt(match[1], 10) : commitsCount;
      }

      return { branches: branchesCount, commits: commitsCount };
   } catch (error) {
      console.error(`Error fetching data for ${repo}:`, error);
      return { branches: 0, commits: 0 };
   }
};
