import React, { useState } from 'react';
import { Row, Col, OverlayTrigger, Tooltip, Form } from 'react-bootstrap';
import { skills } from '../../assets/skills';
import { FaList } from 'react-icons/fa';
import { BsGrid3X3Gap } from 'react-icons/bs';

export default function Skills() {
   const [view, setView] = useState('icons');
   const [selectedCategory, setSelectedCategory] = useState('All Skills');

   const TooltipSkill = ({ id, children, skill }) => (
      <OverlayTrigger overlay={<Tooltip id={id}>{skill}</Tooltip>}>
         <span>{children}</span>
      </OverlayTrigger>
   );

   const IconsView = ({ skills }) => {
      return skills.map((skill, index) => (
         <div key={index} className='skill-item'>
            {skill.name && (
               <TooltipSkill skill={skill.name} id={'t-' + index}>
                  <span className='skill-icon'>{skill.icon}</span>
               </TooltipSkill>
            )}
         </div>
      ));
   };

   const ListView = ({ skills }) => {
      return skills.map(
         (skill, index) =>
            skill.name && (
               <Row key={index} className='skill-row'>
                  <Col xs={4}>
                     <TooltipSkill skill={skill.name} id={'t-' + index}>
                        <span className='skill-icon'>{skill.icon}</span>
                     </TooltipSkill>
                  </Col>
                  <Col xs={8}>
                     <h6>{skill.name}</h6>
                     <small>{skill.category}</small>
                  </Col>
               </Row>
            )
      );
   };

   const categories = ['All Skills', ...new Set(skills.map((skill) => skill.category))];

   const filteredSkills =
      selectedCategory === 'All Skills'
         ? skills
         : skills.filter((skill) => skill.category === selectedCategory);

   return (
      <>
         {/* Full-width View Toggles and Dropdown */}
         <Row>
            <Col xs={9} className='px-0 gx-0'>
               <Form.Select
                  size='sm'
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className='filter-dropdown'
               >
                  {categories.map((category, index) => (
                     <option key={index} value={category}>
                        {category}
                     </option>
                  ))}
               </Form.Select>
            </Col>
            <Col xs={3} className='px-0 gx-0'>
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
            {/* Conditionally Render View */}
            {view === 'icons' ? (
               <IconsView skills={filteredSkills} />
            ) : (
               <ListView skills={filteredSkills} />
            )}
         </Row>
      </>
   );
}
