import React, { useState } from 'react';
import { Modal, Button, Col, Row, Nav, Tab } from 'react-bootstrap';
import Skills from './Skills';

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
                  <Tab.Container id='tabContent' activeKey='first'>
                     <Row>
                        <Col sm={12} md={2}>
                           <Nav variant='underline' className='card-nav' justify>
                              <Nav.Item>
                                 <Nav.Link className='tab-name' eventKey='second'>
                                    Skills
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link className='tab-name' eventKey='third'>
                                    Samples
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link className='tab-name' eventKey='fourth'>
                                    Contact
                                 </Nav.Link>
                              </Nav.Item>
                           </Nav>
                           <hr className='d-md-none' />
                        </Col>
                        <Col sm={12} md={10} id='tab-content'>
                           <Tab.Content>
                              <Tab.Pane eventKey='first'>
                                 <Skills />
                              </Tab.Pane>
                              <Tab.Pane eventKey='second'>
                                 {' '}
                                 Lorem ipsum dolor sit amet consectetur adipisicing
                                 elit. Veritatis illum consequatur voluptates eaque nam
                                 accusantium maxime neque eligendi voluptate. Ipsam,
                                 delectus veritatis voluptate illum repellat inventore
                                 unde ipsum cumque iusto.
                              </Tab.Pane>
                              <Tab.Pane eventKey='third'>
                                 {' '}
                                 Lorem ipsum dolor sit amet consectetur adipisicing
                                 elit. Veritatis illum consequatur voluptates eaque nam
                                 accusantium maxime neque eligendi voluptate. Ipsam,
                                 delectus veritatis voluptate illum repellat inventore
                                 unde ipsum cumque iusto.
                              </Tab.Pane>
                              <Tab.Pane eventKey='fourth'>
                                 {' '}
                                 Lorem ipsum dolor sit amet consectetur adipisicing
                                 elit. Veritatis illum consequatur voluptates eaque nam
                                 accusantium maxime neque eligendi voluptate. Ipsam,
                                 delectus veritatis voluptate illum repellat inventore
                                 unde ipsum cumque iusto.
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
