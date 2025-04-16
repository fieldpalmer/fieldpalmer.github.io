import React, { useState } from 'react';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { coreStack, dataTools, otherSkills } from '../../assets/api/skills';
import SkillsModal from './SkillsModal';
import './skills.css';

export default function Skills() {
     const [activeSkill, setActiveSkill] = useState(null);
     const handleClose = () => setActiveSkill(null);

     const renderSkills = (title, skills) => (
          <>
               <h6>
                    <code>{title}</code>
               </h6>
               {skills.map((skill, index) => (
                    <Col key={`${skill.name}-${index}`} className='skills-overlay mb-3 mx-2' onClick={() => setActiveSkill(skill)}>
                         <OverlayTrigger placement='bottom' overlay={<Tooltip id={`tooltip-${skill.name}`}>{skill.name}</Tooltip>}>
                              <h2>{skill.icon}</h2>
                         </OverlayTrigger>
                    </Col>
               ))}
          </>
     );

     return (
          <>
               <Row>
                    {renderSkills('My Go-To Stack These Days:', coreStack)}
                    {renderSkills('Automation & Analysis Tools:', dataTools)}
                    {renderSkills("Other Stuff I'm Dangerous With:", otherSkills)}
               </Row>

               {activeSkill && <SkillsModal {...activeSkill} showModal={!!activeSkill} handleClose={handleClose} />}
          </>
     );
}
