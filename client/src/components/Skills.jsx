import React from 'react';
import { Row, Col } from 'react-bootstrap';
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
   return (
      <div>
         <Row>
            <Col>
               <FaReact className='skill-icon' />
               <FaNodeJs className='skill-icon' />
               <FaPython className='skill-icon' />
               <IoLogoFirebase className='skill-icon' />
               <SiGoogleappsscript className='skill-icon' />
               <FaAngular className='skill-icon' />
               <SiSolidity className='skill-icon d-md-none' />
               <FaRust className='skill-icon d-md-none' />
            </Col>
         </Row>
         <Row>
            <Col>
               <FaGithub className='skill-icon' />
               <SiGraphql className='skill-icon' />
               <SiMongodb className='skill-icon' />
               <SiOpenai className='skill-icon' />
               <SiSolidity className='skill-icon d-none d-md-inline' />
               <FaRust className='skill-icon d-none d-md-inline' />
            </Col>
         </Row>
      </div>
   );
}
