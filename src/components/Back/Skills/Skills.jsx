import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { skills } from '../../../assets/api/skills';
import { projects } from '../../../assets/api/projects';
import { FaList } from 'react-icons/fa';
import { BsGrid3X3Gap } from 'react-icons/bs';
import SkillsIcon from './SkillsIcons';
import SkillsList from './SkillsList';

export default function Skills() {
   const [view, setView] = useState('icons');
   const [selectedCategory, setSelectedCategory] = useState('All Skills:');
   const [updatedSkills, setUpdatedSkills] = useState(skills);
   const [sortOption, setSortOption] = useState('Experience');

   const categories = ['All Skills:', ...new Set(skills.map((skill) => skill.category))];

   const getSkillCount = (skillName) => {
      return projects.filter((project) =>
         project.technologies.some((tech) => tech.name.toLowerCase() === skillName.toLowerCase())
      ).length;
   };

   useEffect(() => {
      const updated = skills.map((skill) => ({
         ...skill,
         projectCount: getSkillCount(skill.name)
      }));
      setUpdatedSkills(updated);
   }, []);

   let filteredSkills =
      selectedCategory === 'All Skills:'
         ? updatedSkills
         : updatedSkills.filter((skill) => skill.category === selectedCategory);

   const sortSkills = (skills) => {
      return [...skills].sort((a, b) => {
         switch (sortOption) {
            case 'Experience':
               return b.years_experience - a.years_experience;
            case 'Name':
               return a.name.localeCompare(b.name);
            case 'Project Count':
               return b.projectCount - a.projectCount;
            default:
               return 0;
         }
      });
   };

   filteredSkills = sortSkills(filteredSkills);

   return (
      <>
         <Row>
            <Col xs={5} md={5} className='gx-0'>
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
            <Col xs={5} md={5} className='gx-1'>
               <Form.Select
                  size='sm'
                  onChange={(e) => setSortOption(e.target.value)}
                  className='mb-2 filter-dropdown'
               >
                  <option>Sort:</option>
                  <option>Name</option>
                  <option>Experience</option>
                  <option>Project Count</option>
               </Form.Select>
            </Col>
            <Col xs={2} md={2} className='gx-0'>
               <h5>
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
               </h5>
            </Col>
         </Row>
         <Row>
            {view === 'icons'
               ? filteredSkills.map((s, i) => {
                    const {
                       name,
                       url,
                       icon,
                       category,
                       one_liner,
                       description,
                       first_learned,
                       years_experience,
                       projectCount
                    } = s;
                    return (
                       <Col key={name + i} xs={6} md={4} className='g-1'>
                          <SkillsIcon
                             name={name}
                             index={i}
                             url={url}
                             icon={icon}
                             category={category}
                             one_liner={one_liner}
                             description={description}
                             first_learned={first_learned}
                             years_experience={years_experience}
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
                       first_learned,
                       years_experience,
                       projectCount
                    } = s;
                    return (
                       <Col key={name + i} xs={12} className='mb-2'>
                          <SkillsList
                             name={name}
                             index={i}
                             url={url}
                             icon={icon}
                             category={category}
                             one_liner={one_liner}
                             description={description}
                             first_learned={first_learned}
                             years_experience={years_experience}
                             projectCount={projectCount}
                          />
                       </Col>
                    );
                 })}
         </Row>
      </>
   );
}
