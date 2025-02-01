import React, { useState, useEffect } from 'react';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { skills } from '../../assets/skills';

export default function Skills() {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const updateScreenSize = () => {
         setIsMobile(window.matchMedia('(max-width: 768px)').matches);
      };

      updateScreenSize();
      window.addEventListener('resize', updateScreenSize);

      return () => window.removeEventListener('resize', updateScreenSize);
   }, []);

   const columnsPerRow = isMobile ? 4 : 6; // 4 columns for mobile, 6 for larger screens
   const rows = isMobile ? 6 : 5; // 6 rows for mobile, 5 for larger screens
   const displayedSkills = skills.slice(0, rows * columnsPerRow);

   // Split the skills into rows for rendering
   const skillRows = [];
   for (let i = 0; i < displayedSkills.length; i += columnsPerRow) {
      skillRows.push(displayedSkills.slice(i, i + columnsPerRow));
   }

   const TooltipSkill = ({ id, children, skill }) => (
      <OverlayTrigger overlay={<Tooltip id={id}>{skill}</Tooltip>}>
         <span>{children}</span>
      </OverlayTrigger>
   );

   return (
      <div className='portfolio-container' id='skills-container'>
         {skillRows.map((row, rowIndex) => (
            <Row key={rowIndex}>
               {row.map((skill, index) => (
                  <Col key={index} xs={3} md={2} className='text-center'>
                     <TooltipSkill skill={skill.name} id={'t-' + index}>
                        <span className='skill-icon img-fluid'>{skill.icon}</span>
                     </TooltipSkill>
                  </Col>
               ))}
            </Row>
         ))}
      </div>
   );
}
