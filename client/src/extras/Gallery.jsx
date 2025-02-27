import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { projects } from '../../../../assets/projects.js';
import GalleryCard from './GalleryCard';
import GalleryIcon from './GalleryIcon';
import { FaList } from 'react-icons/fa';
import { BsGrid3X3Gap } from 'react-icons/bs';

export default function Gallery() {
   const [view, setView] = useState('icons');
   const [selectedSkill, setSelectedSkill] = useState('All Projects');
   const allSkills = [
      'All Projects',
      ...new Set(projects.flatMap((p) => p.technologies.map((tech) => tech.name)))
   ];

   const filteredProjects =
      selectedSkill === 'All Projects'
         ? projects
         : projects.filter((p) =>
              p.technologies.some((tech) => tech.name === selectedSkill)
           );

   return (
      <>
         <Row>
            <Col xs={9} className='px-0 gx-0'>
               <Form.Select
                  size='sm'
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  className='mb-2 filter-dropdown'
               >
                  {allSkills.map((skill, index) => (
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
                 filteredProjects.map((p, i) => {
                    const {
                       name,
                       one_liner,
                       description,
                       image,
                       url,
                       github,
                       technologies
                    } = p;
                    return (
                       <Col key={name + i} xs={6} md={4} className='g-1'>
                          <GalleryIcon
                             name={name}
                             one_liner={one_liner}
                             description={description}
                             image={image}
                             url={url}
                             github={github}
                             technologies={technologies}
                          />
                       </Col>
                    );
                 })
               : /** List View */
                 filteredProjects.map((p, i) => {
                    const {
                       name,
                       one_liner,
                       description,
                       image,
                       url,
                       github,
                       technologies
                    } = p;
                    return (
                       <Col key={name + i} xs={12} className='mb-2'>
                          <GalleryCard
                             name={name}
                             one_liner={one_liner}
                             description={description}
                             image={image}
                             url={url}
                             github={github}
                             technologies={technologies}
                          />
                       </Col>
                    );
                 })}
         </Row>
      </>
   );
}
