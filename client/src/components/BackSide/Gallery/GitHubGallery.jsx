import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import GitHubGalleryIcon from './GitHubGalleryIcon';
import GitHubGalleryCard from './GitHubGalleryCard';
import { FaList } from 'react-icons/fa';
import { BsGrid3X3Gap } from 'react-icons/bs';
import {
   fetchGitHubRepos,
   fetchBranchesAndCommits
} from '../../../assets/api/github.js';

export default function Gallery() {
   const [view, setView] = useState('icons');
   const [selectedSkill, setSelectedSkill] = useState('All Repos');
   const [repos, setRepos] = useState([]);
   const [sortOption, setSortOption] = useState('Most Recent Push');
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const getRepos = async () => {
         setLoading(true);
         let repoData = await fetchGitHubRepos();

         const repoDataWithDetails = await Promise.all(
            repoData.map(async (repo) => {
               const { branches, commits } = await fetchBranchesAndCommits(
                  repo.owner,
                  repo.name,
                  repo.defaultBranch
               );
               return { ...repo, branches, commits };
            })
         );

         setRepos(repoDataWithDetails);
         setLoading(false);
      };

      getRepos();
   }, []);

   const allSkills = [
      'All Repos',
      ...new Set(repos.flatMap((repo) => repo.topics.split(', ')))
   ];

   let filteredRepos =
      selectedSkill === 'All Repos'
         ? repos.filter(
              (repo) => repo.visibility !== 'Private' && repo.owner === 'fieldpalmer'
           )
         : repos.filter(
              (repo) =>
                 repo.visibility !== 'Private' &&
                 repo.owner === 'fieldpalmer' &&
                 repo.topics.split(', ').includes(selectedSkill)
           );

   // **Sorting Logic**
   const sortRepos = (repos) => {
      return [...repos].sort((a, b) => {
         switch (sortOption) {
            case 'Name':
               return a.name.localeCompare(b.name);
            case 'Oldest':
               return new Date(a.dateCreated) - new Date(b.dateCreated);
            case 'Newest':
               return new Date(b.dateCreated) - new Date(a.dateCreated);
            case 'Most Recent Push':
               return new Date(b.lastPush) - new Date(a.lastPush);
            case 'Commit Count':
               return b.commits - a.commits;
            case 'Issue Count':
               return b.openIssues - a.openIssues;
            default:
               return 0;
         }
      });
   };

   filteredRepos = sortRepos(filteredRepos);

   if (loading) return <p>Loading GitHub Repos...</p>;

   return (
      <>
         <Row>
            <Col xs={4} md={5} className='gx-0'>
               <Form.Select
                  size='sm'
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  className='mb-2 filter-dropdown'
               >
                  <option>Filter:</option>
                  {allSkills.sort().map((skill, index) => (
                     <option key={index} value={skill}>
                        {skill}
                     </option>
                  ))}
               </Form.Select>
            </Col>
            <Col xs={4} md={5} className='gx-1'>
               <Form.Select
                  size='sm'
                  onChange={(e) => setSortOption(e.target.value)}
                  className='mb-2 filter-dropdown'
               >
                  <option>Sort:</option>
                  <option>Name</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Most Recent Push</option>
                  <option>Commit Count</option>
                  <option>Issue Count</option>
               </Form.Select>
            </Col>
            <Col xs={4} md={2} className='gx-0'>
               <h4>
                  &nbsp;
                  <BsGrid3X3Gap
                     className={`toggle-icon ${view === 'icons' ? 'active' : ''}`}
                     onClick={() => setView('icons')}
                  />
                  &nbsp;
                  <FaList
                     className={`toggle-icon ${view === 'list' ? 'active' : ''}`}
                     onClick={() => setView('list')}
                  />
               </h4>
            </Col>
         </Row>
         <Row>
            {view === 'icons'
               ? filteredRepos.map((repo, index) => (
                    <Col key={repo.name + index} xs={6} md={4} className='g-1'>
                       <GitHubGalleryIcon
                          index={index}
                          name={repo.name}
                          owner={repo.owner}
                          description={repo.description}
                          dateCreated={repo.dateCreated}
                          visibility={repo.visibility}
                          size={repo.size}
                          language={repo.language}
                          topics={repo.topics}
                          license={repo.license}
                          openIssues={repo.openIssues}
                          lastUpdated={repo.lastUpdated}
                          defaultBranch={repo.defaultBranch}
                          lastPush={repo.lastPush}
                          branches={repo.branches}
                          commits={repo.commits}
                          homepage={repo.homepage}
                          repoUrl={repo.repoUrl}
                          socialImage={`https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`}
                          readmePreview={repo.readmePreview}
                       />
                    </Col>
                 ))
               : filteredRepos.map((repo, index) => (
                    <Col key={repo.name + index} xs={12} className='mb-2'>
                       <GitHubGalleryCard
                          index={index}
                          name={repo.name}
                          owner={repo.owner}
                          description={repo.description}
                          dateCreated={repo.dateCreated}
                          visibility={repo.visibility}
                          size={repo.size}
                          language={repo.language}
                          topics={repo.topics}
                          license={repo.license}
                          openIssues={repo.openIssues}
                          lastUpdated={repo.lastUpdated}
                          defaultBranch={repo.defaultBranch}
                          lastPush={repo.lastPush}
                          branches={repo.branches}
                          commits={repo.commits}
                          homepage={repo.homepage}
                          repoUrl={repo.repoUrl}
                          socialImage={`https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`}
                          readmePreview={repo.readmePreview}
                       />
                    </Col>
                 ))}
         </Row>
      </>
   );
}
