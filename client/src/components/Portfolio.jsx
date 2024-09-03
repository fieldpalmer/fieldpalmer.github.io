import React, { useState } from 'react';
import { Col, Row, Nav, Tab } from 'react-bootstrap';
import Skills from './Skills';
import Samples from './Samples';
import Contact from './Contact';

export default function Portfolio() {
   return (
      <section>
         <Row>
            <Col>
               <h1 className='my-name text-white'>FIELD PALMER</h1>
               <hr />
            </Col>
         </Row>
         <Row>
            <Col>
               <div className='text-white two-col-content'>
                  <Tab.Container id='tabContent' defaultActiveKey='skills'>
                     <Row>
                        <Col sm={12} md={2}>
                           <Nav variant='underline' className='card-nav' justify>
                              {/* <Nav.Item>
                                 <Nav.Link className='tab-name' eventKey='skills'>
                                    About
                                 </Nav.Link>
                              </Nav.Item> */}
                              <Nav.Item>
                                 <Nav.Link className='tab-name' eventKey='skills'>
                                    Skills
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link className='tab-name' eventKey='samples'>
                                    Samples
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
                        <Col sm={12} md={10} id='tab-content'>
                           <Tab.Content>
                              {/* <Tab.Pane eventKey='skills'>"About me!"</Tab.Pane> */}
                              <Tab.Pane eventKey='skills'>
                                 <Skills />
                              </Tab.Pane>
                              <Tab.Pane eventKey='samples'>
                                 <Samples />
                              </Tab.Pane>
                              <Tab.Pane eventKey='contact'>
                                 <Contact />
                              </Tab.Pane>
                           </Tab.Content>
                        </Col>
                     </Row>
                  </Tab.Container>
               </div>
            </Col>
         </Row>
      </section>
   );
}
