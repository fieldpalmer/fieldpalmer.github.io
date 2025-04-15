import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { fetchGitHubRepos } from '../../../assets/api/github.js';
import GalleryModal from './GalleryModal';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiMoreHorizontal } from 'react-icons/fi';
import { skills } from '../../../assets/api/skills';
import ToolTipSkill from '../../ToolTipSkill';

export default function Gallery() {
     const [repos, setRepos] = useState([]);
     const [loading, setLoading] = useState(true);
     const [activeRepo, setActiveRepo] = useState(null);

     const findSkillIcon = (skillName, skills) => {
          const skill = skills.find(
               (s) => s.name.replace(/[()-. ]/g, '').toLowerCase() === skillName.replace(/[()-_. ]/g, '').toLowerCase()
          );
          return skill ? skill.icon : 'x';
     };

     useEffect(() => {
          const getRepos = async () => {
               setLoading(true);
               const repoData = await fetchGitHubRepos();
               setRepos(repoData);
               setLoading(false);
          };

          getRepos();
     }, []);

     if (loading) return <p>Loading GitHub Repos...</p>;

     return (
          <>
               <Row className='gy-2'>
                    {repos.map((repo, index) => (
                         <Col key={repo.name + index} xs={12}>
                              <Card className='flex-row project-list-item' onClick={() => setActiveRepo(repo)}>
                                   {repo.socialImage && (
                                        <Card.Img
                                             src={repo.socialImage}
                                             alt={`${repo.name} thumbnail`}
                                             className='p-4'
                                             style={{ width: '200px', objectFit: 'fill' }}
                                        />
                                   )}
                                   <Card.Body>
                                        <Card.Title className='mb-2'>
                                             <code>{repo.name}</code>
                                        </Card.Title>
                                        <Card.Text className='mb-2'>
                                             <h4>
                                                  {repo.topics
                                                       .split(', ')
                                                       .splice(0, 6)
                                                       .map((skill, index) => (
                                                            <ToolTipSkill
                                                                 key={index}
                                                                 tip={skill}
                                                                 id={skill + '-tooltip-' + index}
                                                                 icon={findSkillIcon(skill, skills)}
                                                            />
                                                       ))}
                                             </h4>
                                        </Card.Text>
                                        <div className='d-flex gap-3 align-items-center'>
                                             {repo.repoUrl && (
                                                  <a
                                                       href={repo.repoUrl}
                                                       target='_blank'
                                                       rel='noopener noreferrer'
                                                       title='View Repo'
                                                       style={{ textDecoration: 'underline', color: '#00ffaa' }}
                                                  >
                                                       {/* <FaGithub /> */}
                                                       <small>Repo</small>
                                                  </a>
                                             )}
                                             {repo.homepage && (
                                                  <a
                                                       href={repo.homepage}
                                                       target='_blank'
                                                       rel='noopener noreferrer'
                                                       title='Live Demo'
                                                       style={{ textDecoration: 'underline', color: '#00ffaa' }}
                                                  >
                                                       {/* <FiExternalLink /> */}
                                                       <small>Demo</small>
                                                  </a>
                                             )}
                                             <span
                                                  onClick={() => setActiveRepo(repo)}
                                                  style={{ cursor: 'pointer', color: '#00ffaa' }}
                                                  title='More Info'
                                             >
                                                  <FiMoreHorizontal />
                                             </span>
                                        </div>
                                   </Card.Body>
                              </Card>
                         </Col>
                    ))}
               </Row>

               {activeRepo && <GalleryModal {...activeRepo} showModal={!!activeRepo} handleClose={() => setActiveRepo(null)} />}
          </>
     );
}
