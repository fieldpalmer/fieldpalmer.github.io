import axios from 'axios';

export const fetchGitHubRepos = async () => {
   try {
      const response = await axios.get('https://api.github.com/users/fieldpalmer/repos');

      const repos = response.data.map((repo) => ({
         id: repo.id,
         name: repo.name || 'Unknown Repo',
         owner: repo.owner?.login || 'Unknown Owner',
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
         homepage: repo.homepage || 'No Website',
         repoUrl: repo.html_url,
         socialImage:
            repo.owner?.login && repo.name
               ? `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`
               : 'https://via.placeholder.com/150'
      }));

      return repos;
   } catch (error) {
      console.error('Error fetching repositories:', error);
      return [];
   }
};
