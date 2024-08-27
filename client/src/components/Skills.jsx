import React from 'react';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {
   FaReact,
   FaNodeJs,
   FaPython,
   FaGithub,
   FaAngular,
   FaRust
} from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import {
   SiGraphql,
   SiMongodb,
   SiOpenai,
   SiGoogleappsscript,
   SiSolidity
} from 'react-icons/si';

export default function Skills() {
   const TooltipSkill = ({ id, children, skill }) => (
      <OverlayTrigger overlay={<Tooltip id={id}>{skill}</Tooltip>}>
         <span>{children}</span>
      </OverlayTrigger>
   );

   return (
      <div>
         <Row>
            <Col>
               <TooltipSkill skill='React' id='t-1'>
                  <FaReact className='skill-icon' />
               </TooltipSkill>
               <TooltipSkill skill='Node.js' id='t-2'>
                  <FaNodeJs className='skill-icon' />
               </TooltipSkill>
               <TooltipSkill skill='Python' id='t-3'>
                  <FaPython className='skill-icon' />
               </TooltipSkill>
               <TooltipSkill skill='Firebase' id='t-4'>
                  <IoLogoFirebase className='skill-icon' />
               </TooltipSkill>
               <TooltipSkill skill='Google Apps Script' id='t-8'>
                  <SiGoogleappsscript className='skill-icon' />
               </TooltipSkill>
               <TooltipSkill skill='Angular' id='t-5'>
                  <FaAngular className='skill-icon' />
               </TooltipSkill>
               <TooltipSkill skill='Solidity' id='t-6'>
                  <SiGoogleappsscript className='skill-icon d-md-none' />
               </TooltipSkill>
               <TooltipSkill skill='Rust' id='t-7'>
                  <FaRust className='skill-icon d-md-none' />
               </TooltipSkill>
            </Col>
         </Row>
         <Row>
            <Col>
               <TooltipSkill skill='Github' id='t-1'>
                  <FaGithub className='skill-icon' />
               </TooltipSkill>
               <TooltipSkill skill='GraphQL' id='t-2'>
                  <SiGraphql className='skill-icon' />
               </TooltipSkill>
               <TooltipSkill skill='MongoDB' id='t-3'>
                  <SiMongodb className='skill-icon' />
               </TooltipSkill>
               <TooltipSkill skill='OpenAI' id='t-10'>
                  <SiOpenai className='skill-icon' />
               </TooltipSkill>
               <TooltipSkill skill='Solidity' id='t-11'>
                  <SiSolidity className='skill-icon d-none d-md-inline' />
               </TooltipSkill>
               <TooltipSkill skill='Rust' id='t-12'>
                  <FaRust className='skill-icon d-none d-md-inline' />
               </TooltipSkill>
            </Col>
         </Row>
      </div>
   );
}
