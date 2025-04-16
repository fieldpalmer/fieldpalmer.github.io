import React, { useState } from 'react';
import { FiArrowDownRight, FiArrowDownLeft } from 'react-icons/fi';
import profPic from './assets/images/profPic.png';
import IconsList from './components/IconsList';
import ReadmeModal from './components/ReadmeModal';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import './App.css';

function App() {
     const [cardFlip, setCardFlip] = useState(true);
     const [showReadme, setShowReadme] = useState(false);

     const handleCardFlip = () => {
          setCardFlip(!cardFlip);
     };

     return (
          <main className='App'>
               <section className={`glass-pane ${cardFlip ? '' : 'flipped'}`} role='region' aria-label='Interactive business card'>
                    <div className='glass-card'>
                         {/* FRONT SIDE */}
                         <div className='card-face card-front' aria-hidden={!cardFlip}>
                              <FiArrowDownRight
                                   className='arrow arrow-right'
                                   onClick={handleCardFlip}
                                   role='button'
                                   tabIndex='0'
                                   aria-label='Flip card to back'
                                   onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                             handleCardFlip();
                                        }
                                   }}
                              />
                              <code id='readme' onClick={() => setShowReadme(true)} style={{ cursor: 'pointer' }}>
                                   README.md
                              </code>
                              <ReadmeModal
                                   showModal={showReadme}
                                   handleClose={() => setShowReadme(false)}
                                   handleCardFlip={handleCardFlip}
                              />

                              <Row className='px-4'>
                                   <Col>
                                        <div className='circle-image'>
                                             <img alt='profPic' src={profPic} />
                                        </div>
                                   </Col>
                                   <Col className='text-sm-center text-md-start mt-5'>
                                        <h1>FIELD PALMER</h1>
                                        <hr />
                                        <p>
                                             <small>Full-Stack Developer + Systems Engineer</small>
                                        </p>
                                        <hr />
                                        <IconsList />
                                   </Col>
                              </Row>
                              {/* <Row className='p-0'> */}
                              {/* </Row> */}
                         </div>
                         {/* BACK SIDE */}
                         <div className='card-face card-back' aria-hidden={cardFlip}>
                              <Row className='backside-header mx-0 px-0'>
                                   <Col>
                                        <h1>FIELD PALMER</h1>
                                        <hr />
                                   </Col>
                              </Row>
                              <Row className='mx-0 px-0'>
                                   <Tab.Container defaultActiveKey='about'>
                                        <Col sm={12} md={2} className='backside-nav'>
                                             <Nav variant='underline' justify>
                                                  <Nav.Item>
                                                       <Nav.Link eventKey='about'>About Me</Nav.Link>
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
                                        <Col sm={12} md={10}>
                                             <Tab.Content className='backside-content px-3 pt-2 px-md-4 py-md-3'>
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
                    </div>
               </section>
          </main>
     );
}

export default App;
