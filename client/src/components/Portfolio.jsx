import React, { useState } from 'react';
import { Col, Row, Nav, Tab } from 'react-bootstrap';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';

export default function Portfolio() {
   return (
      <>
         <Row id='portfolio-header'>
            <Col>
               <h1 className='text-white'>FIELD PALMER</h1>
               <hr />
            </Col>
         </Row>
         <Row id='portfolio-content' className='text-white two-col-content'>
            <Tab.Container id='tabContent' defaultActiveKey='about'>
               <Row>
                  {/* tab pane navigation */}
                  <Col sm={12} md={2} id='portfolio-content-nav'>
                     <Nav variant='underline' className='card-nav' justify>
                        <Nav.Item>
                           <Nav.Link className='tab-name' eventKey='about'>
                              About
                           </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link className='tab-name' eventKey='skills'>
                              Skills
                           </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link className='tab-name' eventKey='gallery'>
                              Gallery
                           </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link className='tab-name' eventKey='contact'>
                              Contact
                           </Nav.Link>
                        </Nav.Item>
                     </Nav>
                     <hr className='d-md-none' />
                  </Col>
                  {/* tab pane content */}
                  <Col sm={12} md={10} id='tab-content'>
                     <Tab.Content>
                        <Tab.Pane eventKey='about'>
                           <h1>About</h1>
                        </Tab.Pane>
                        <Tab.Pane eventKey='skills'>
                           <Skills />
                        </Tab.Pane>
                        <Tab.Pane eventKey='gallery'>
                           <Gallery />
                        </Tab.Pane>
                        <Tab.Pane eventKey='contact'>
                           <Contact />
                        </Tab.Pane>
                     </Tab.Content>
                  </Col>
               </Row>
            </Tab.Container>
         </Row>
      </>
   );
}
