import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function About() {
   return (
      <div className='portfolio-container'>
         <Row id='about-container'>
            <Col sm={12}>
               <h4>Hello</h4>
               <p>
                  I'm a solutions engineer with expertise in full-stack web development,
                  data analysis & visualization, and automated systems architecture.
               </p>
               <p>
                  I have a proven track record of transforming complex datasets into
                  clear insights and delivering high-impact solutions with a positive UX
                  in fast-paced environments.
               </p>
            </Col>
         </Row>
      </div>
   );
}
