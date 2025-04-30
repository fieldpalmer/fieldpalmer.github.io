import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { projects } from '../../assets/api/projects';
import GalleryModal from './GalleryModal.jsx';
import { FiMoreHorizontal } from 'react-icons/fi';
import './gallery.css';

export default function Gallery() {
   const [activeProject, setActiveProject] = useState(null);

   const ToolTipSkill = ({ className, tip, icon }) => {
      return (
         <span className={className} title={tip} style={{ color: '#00ff87c3' }}>
            {icon}&nbsp;
         </span>
      );
   };

   // Get the first 4 projects
   const featuredProjects = projects.slice(0, 4);

   return (
      <>
         <code>Featured Projects:</code>
         <hr className='my-2' />
         <Row className='g-2'>
            {featuredProjects.map((project, index) => (
               <Col key={project.name + index} xs={12} sm={6}>
                  <Card className='project-list-item h-100 m-0 p-3' onClick={() => setActiveProject(project)}>
                     <Card.Body className='p-0 d-flex flex-column'>
                        <Card.Title className='mb-1'>
                           <code className='text-white fw-bold'>
                              <h6>{project.name}</h6>
                           </code>
                        </Card.Title>
                        <div className='skill-icons'>
                           {project.technologies.map((tech, index) => (
                              <ToolTipSkill key={index} tip={tech.name} icon={tech.icon} />
                           ))}
                           <span
                              onClick={() => setActiveProject(project)}
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

         {activeProject && (
            <GalleryModal {...activeProject} showModal={!!activeProject} handleClose={() => setActiveProject(null)} />
         )}
      </>
   );
}
