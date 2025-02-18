import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { skills } from '../../assets/skills';
import { projects } from '../../assets/projects';
import { FaList } from 'react-icons/fa';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { SkillsIcon } from './SkillsIcon';
import { SkillsCard } from './SkillsCard';

export default function Skills() {
   const [view, setView] = useState('icons');
   const [selectedCategory, setSelectedCategory] = useState('All Skills');
   const [updatedSkills, setUpdatedSkills] = useState(skills);

   const categories = ['All Skills', ...new Set(skills.map((skill) => skill.category))];

   const getSkillCount = (skillName) => {
      return projects.filter((project) =>
         project.technologies.some(
            (tech) => tech.name.toLowerCase() === skillName.toLowerCase()
         )
      ).length;
   };

   useEffect(() => {
      const updated = skills.map((skill) => ({
         ...skill,
         projectCount: getSkillCount(skill.name)
      }));
      setUpdatedSkills(updated);
   }, []);

   const filteredSkills =
      selectedCategory === 'All Skills'
         ? updatedSkills
         : updatedSkills.filter((skill) => skill.category === selectedCategory);

   return (
      <>
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
            {view === 'icons'
               ? filteredSkills.map((s, i) => {
                    const {
                       name,
                       url,
                       icon,
                       category,
                       one_liner,
                       description,
                       projectCount
                    } = s;
                    return (
                       <Col key={name + i} xs={6} md={4} className='g-1'>
                          <SkillsIcon
                             name={name}
                             url={url}
                             icon={icon}
                             category={category}
                             one_liner={one_liner}
                             description={description}
                             projectCount={projectCount}
                          />
                       </Col>
                    );
                 })
               : /** List View */
                 filteredSkills.map((s, i) => {
                    const {
                       name,
                       url,
                       icon,
                       category,
                       one_liner,
                       description,
                       projectCount
                    } = s;
                    return (
                       <Col key={name + i} xs={12} className='mb-2'>
                          <SkillsCard
                             name={name}
                             url={url}
                             icon={icon}
                             category={category}
                             one_liner={one_liner}
                             description={description}
                             projectCount={projectCount}
                          />
                       </Col>
                    );
                 })}
         </Row>
      </>
   );
}
