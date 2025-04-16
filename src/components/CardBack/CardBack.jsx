import React from 'react';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { FiArrowDownLeft } from 'react-icons/fi';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import './cardback.css';
const CardBack = ({ cardFlip, handleCardFlip }) => {
     return (
          <div className='card-face card-back' aria-hidden={cardFlip}>
               <Row className='backside-header mx-0 px-0'>
                    <Col>
                         <h1>FIELD PALMER</h1>
                    </Col>
                    <hr />
               </Row>
               <Row>
                    <Tab.Container defaultActiveKey='about'>
                         <Col sm={12} md={2} className='backside-nav'>
                              <Nav variant='underline' justify>
                                   <Nav.Item>
                                        <Nav.Link eventKey='about'>About</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link eventKey='skills'>Skills</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link eventKey='projects'>Projects</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link eventKey='contact'>Contact</Nav.Link>
                                   </Nav.Item>
                              </Nav>
                              <hr className='d-md-none' />
                         </Col>
                         <Col sm={12} md={10} className='px-0'>
                              <Tab.Content className='backside-content px-3 pt-2 '>
                                   <Tab.Pane eventKey='about'>
                                        <About />
                                   </Tab.Pane>
                                   <Tab.Pane eventKey='skills'>
                                        <Skills />
                                   </Tab.Pane>
                                   <Tab.Pane eventKey='projects'>
                                        <Gallery />
                                   </Tab.Pane>
                                   <Tab.Pane eventKey='contact'>
                                        <Contact />
                                   </Tab.Pane>
                              </Tab.Content>
                         </Col>
                    </Tab.Container>
               </Row>
               <FiArrowDownLeft
                    className='arrow arrow-left'
                    onClick={handleCardFlip}
                    role='button'
                    tabIndex='0'
                    aria-label='Flip card to front'
                    onKeyDown={(e) => {
                         if (e.key === 'Enter' || e.key === ' ') {
                              handleCardFlip();
                         }
                    }}
               />
          </div>
     );
};

export default CardBack;
