import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { coreStack, dataTools, otherSkills } from '../../assets/api/skills';
import SkillsModal from './SkillsModal';
import './skills.css';

export default function Skills() {
     const [activeSkill, setActiveSkill] = useState(null);
     const handleClose = () => setActiveSkill(null);

     const calculateYearsOfExperience = (firstLearned) => {
          const currentYear = new Date().getFullYear();
          return currentYear - firstLearned;
     };

     const renderSkillTile = (skill) => (
          <Col key={skill.name} xs={6} sm={4} md={3} className='skill-tile mb-3' onClick={() => setActiveSkill(skill)}>
               <div className='skill-content'>
                    <div className='skill-icon'>{skill.icon}</div>
                    <div className='skill-info'>
                         <h6 className='skill-name'>{skill.name}</h6>
                         <small className='skill-category'>{skill.category}</small>
                         <small className='skill-experience'>{calculateYearsOfExperience(skill.first_learned)} years</small>
                    </div>
               </div>
          </Col>
     );

     return (
          <div className='skills-container'>
               <div className='skills-section'>
                    <code>My Go-To Stack:</code>
                    <hr />
                    <Row className='g-2'>{coreStack.map(renderSkillTile)}</Row>
               </div>

               <div className='skills-section'>
                    <code>Automation & Analysis</code>
                    <hr />
                    <Row className='g-2'>{dataTools.map(renderSkillTile)}</Row>
               </div>

               <div className='skills-section'>
                    <code>Other Skills</code>
                    <hr />
                    <Row className='g-2'>{otherSkills.map(renderSkillTile)}</Row>
               </div>

               {activeSkill && <SkillsModal {...activeSkill} showModal={!!activeSkill} handleClose={handleClose} />}
          </div>
     );
}
