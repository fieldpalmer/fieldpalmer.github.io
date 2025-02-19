import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
// import { projects } from '../../../assets/projects.js';
import GitHubGalleryIcon from './GitHubGalleryIcon';
import GitHubGalleryCard from './GitHubGalleryCard';
import {
   fetchGitHubRepos,
   fetchBranchesAndCommits
} from '../../../assets/api/github.js';

import { FaList } from 'react-icons/fa';
import { BsGrid3X3Gap } from 'react-icons/bs';

export default function Gallery() {
   const [view, setView] = useState('icons');
   const [selectedSkill, setSelectedSkill] = useState('All Repositories');
   const [repos, setRepos] = useState([]);
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
      'All Repositories',
      ...new Set(repos.flatMap((repo) => repo.topics.split(', ').filter(Boolean)))
   ];

   const filteredRepos =
      selectedSkill === 'All Repositories'
         ? repos.filter(
              (repo) => repo.visibility !== 'Private' && repo.owner === 'fieldpalmer'
           )
         : repos.filter(
              (repo) =>
                 repo.visibility !== 'Private' &&
                 repo.owner === 'fieldpalmer' &&
                 repo.topics.split(', ').some((tech) => tech === selectedSkill)
           );

   if (loading) return <p>Loading GitHub Repos...</p>;

   return (
      <>
         <Row>
            <Col xs={9} className='px-0 gx-0'>
               <Form.Select
                  size='sm'
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  className='mb-2 filter-dropdown'
               >
                  {allSkills.sort().map((skill, index) => (
                     <option key={index} value={skill}>
                        {skill}
                     </option>
                  ))}
               </Form.Select>
            </Col>
            <Col xs={3} className='gx-0'>
               <h2>
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
               </h2>
            </Col>
         </Row>
         <Row>
            {view === 'icons'
               ? /** Icons View */
                 filteredRepos.map((repo, index) => {
                    return (
                       <Col key={repo.name + index} xs={6} md={4} className='g-1'>
                          <GitHubGalleryIcon
                             name={repo.name}
                             description={repo.description}
                             visibility={repo.visibility}
                             size={repo.size}
                             language={repo.language}
                             topics={repo.topics}
                             license={repo.license}
                             openIssues={repo.openIssues}
                             lastUpdated={repo.lastUpdated}
                             lastPush={repo.lastPush}
                             branches={repo.branches}
                             commits={repo.commits}
                             homepage={repo.homepage}
                             repoUrl={repo.repoUrl}
                             socialImage={`https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`}
                             readmePreview={repo.readmePreview}
                          />
                       </Col>
                    );
                 })
               : /** List View */
                 filteredRepos.map((repo, index) => {
                    return (
                       <Col key={repo.name + index} xs={12} className='mb-2'>
                          <GitHubGalleryCard
                             name={repo.name}
                             description={repo.description}
                             visibility={repo.visibility}
                             size={repo.size}
                             language={repo.language}
                             topics={repo.topics}
                             license={repo.license}
                             openIssues={repo.openIssues}
                             lastUpdated={repo.lastUpdated}
                             lastPush={repo.lastPush}
                             branches={repo.branches}
                             commits={repo.commits}
                             homepage={repo.homepage}
                             repoUrl={repo.repoUrl}
                             socialImage={`https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`}
                             readmePreview={repo.readmePreview}
                          />
                       </Col>
                    );
                 })}
         </Row>
      </>
   );
}
