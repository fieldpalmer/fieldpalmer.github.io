// import React from 'react';
// import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
// import {
//    FaReact,
//    FaNodeJs,
//    FaPython,
//    FaGithub,
//    FaAngular,
//    FaRust
// } from 'react-icons/fa';
// import { IoLogoFirebase } from 'react-icons/io5';
// import {
//    SiGraphql,
//    SiMongodb,
//    SiOpenai,
//    SiGoogleappsscript,
//    SiSolidity
// } from 'react-icons/si';

// export default function Skills() {
//    const TooltipSkill = ({ id, children, skill }) => (
//       <OverlayTrigger overlay={<Tooltip id={id}>{skill}</Tooltip>}>
//          <span>{children}</span>
//       </OverlayTrigger>
//    );

//    return (
//       <div className='portfolio-container' id='skillsContainer'>
//          <Row>
//             <Col>
//                <TooltipSkill skill='React' id='t-1'>
//                   <FaReact className='skill-icon' />
//                </TooltipSkill>
//                <TooltipSkill skill='Node.js' id='t-2'>
//                   <FaNodeJs className='skill-icon' />
//                </TooltipSkill>
//                <TooltipSkill skill='Python' id='t-3'>
//                   <FaPython className='skill-icon' />
//                </TooltipSkill>
//                <TooltipSkill skill='Firebase' id='t-4'>
//                   <IoLogoFirebase className='skill-icon' />
//                </TooltipSkill>
//                <TooltipSkill skill='Google Apps Script' id='t-8'>
//                   <SiGoogleappsscript className='skill-icon' />
//                </TooltipSkill>
//                <TooltipSkill skill='Angular' id='t-5'>
//                   <FaAngular className='skill-icon' />
//                </TooltipSkill>
//                <TooltipSkill skill='Solidity' id='t-6'>
//                   <SiGoogleappsscript className='skill-icon d-md-none' />
//                </TooltipSkill>
//                <TooltipSkill skill='Rust' id='t-7'>
//                   <FaRust className='skill-icon d-md-none' />
//                </TooltipSkill>
//             </Col>
//          </Row>
//          <Row>
//             <Col>
//                <TooltipSkill skill='Github' id='t-1'>
//                   <FaGithub className='skill-icon' />
//                </TooltipSkill>
//                <TooltipSkill skill='GraphQL' id='t-2'>
//                   <SiGraphql className='skill-icon' />
//                </TooltipSkill>
//                <TooltipSkill skill='MongoDB' id='t-3'>
//                   <SiMongodb className='skill-icon' />
//                </TooltipSkill>
//                <TooltipSkill skill='OpenAI' id='t-10'>
//                   <SiOpenai className='skill-icon' />
//                </TooltipSkill>
//                <TooltipSkill skill='Solidity' id='t-11'>
//                   <SiSolidity className='skill-icon d-none d-md-inline' />
//                </TooltipSkill>
//                <TooltipSkill skill='Rust' id='t-12'>
//                   <FaRust className='skill-icon d-none d-md-inline' />
//                </TooltipSkill>
//             </Col>
//          </Row>
//       </div>
//    );
// }

import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { skills } from '../../assets/projectsAndSkills';
import './skills.css';

export default function Skills() {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      // Function to check screen size
      const updateScreenSize = () => {
         setIsMobile(window.matchMedia('(max-width: 768px)').matches);
      };

      // Add event listener to track screen size changes
      updateScreenSize(); // Initial check
      window.addEventListener('resize', updateScreenSize);

      // Clean up the event listener on unmount
      return () => window.removeEventListener('resize', updateScreenSize);
   }, []);

   const columnsPerRow = isMobile ? 4 : 6; // 4 columns for mobile, 6 for larger screens
   const rows = isMobile ? 5 : 4; // 5 rows for mobile, 4 for larger screens
   const displayedSkills = skills.slice(0, rows * columnsPerRow); // Display only the required number of items

   // Split the skills into rows for rendering
   const skillRows = [];
   for (let i = 0; i < displayedSkills.length; i += columnsPerRow) {
      skillRows.push(displayedSkills.slice(i, i + columnsPerRow));
   }

   return (
      <div className='portfolio-container' id='skillsContainer'>
         {skillRows.map((row, rowIndex) => (
            <Row key={rowIndex}>
               {row.map((skill, index) => (
                  <Col key={index} xs={3} md={2} className='text-center'>
                     <a href={skill.url} target='_blank' rel='noopener noreferrer'>
                        <img
                           src={skill.img}
                           alt={skill.name}
                           className='skill-icon img-fluid'
                           title={skill.name}
                        />
                     </a>
                     {/* <p>{skill.name}</p> */}
                  </Col>
               ))}
            </Row>
         ))}
      </div>
   );
}
