import React, { useState, useRef } from 'react';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { FiArrowDownLeft } from 'react-icons/fi';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import './cardback.css';

const CardBack = ({ cardFlip, handleCardFlip }) => {
     const [activeTab, setActiveTab] = useState('about');
     const touchStartX = useRef(0);
     const touchEndX = useRef(0);

     const tabs = ['about', 'skills', 'projects', 'contact'];
     const currentIndex = tabs.indexOf(activeTab);

     const handleTouchStart = (e) => {
          touchStartX.current = e.touches[0].clientX;
     };

     const handleTouchMove = (e) => {
          touchEndX.current = e.touches[0].clientX;
     };

     const handleTouchEnd = () => {
          const swipeDistance = touchEndX.current - touchStartX.current;
          const minSwipeDistance = 100; // minimum distance for a swipe

          if (Math.abs(swipeDistance) < minSwipeDistance) return;

          if (swipeDistance > 0 && currentIndex > 0) {
               // Swipe right - go to previous tab
               setActiveTab(tabs[currentIndex - 1]);
          } else if (swipeDistance < 0 && currentIndex < tabs.length - 1) {
               // Swipe left - go to next tab
               setActiveTab(tabs[currentIndex + 1]);
          }
     };

     return (
          <div className='card-face card-back' inert={cardFlip}>
               <div className='corner-click-area top-left' onClick={handleCardFlip}></div>
               <div className='corner-click-area top-right' onClick={handleCardFlip}></div>
               <div className='corner-click-area bottom-left' onClick={handleCardFlip}></div>
               <div className='corner-click-area bottom-right' onClick={handleCardFlip}></div>
               <FiArrowDownLeft
                    className='arrow arrow-left'
                    onClick={handleCardFlip}
                    role='button'
                    tabIndex={cardFlip ? '0' : '-1'}
                    title='Flip to front'
                    aria-label='Flip to front'
                    onKeyDown={(e) => {
                         if (e.key === 'Enter' || e.key === ' ') {
                              handleCardFlip();
                         }
                    }}
               />
               <Row className='backside-header mx-0 px-0'>
                    <Col>
                         <h1>FIELD PALMER</h1>
                    </Col>
                    <hr />
               </Row>
               <Row>
                    <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
                         <Col sm={12} md={2} className='backside-nav'>
                              <Nav variant='underline' justify>
                                   <Nav.Item>
                                        <Nav.Link title='About Tab' eventKey='about'>
                                             About
                                        </Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link title='Skills Tab' eventKey='skills'>
                                             Skills
                                        </Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link title='Projects Tab' eventKey='projects'>
                                             Projects
                                        </Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link title='Contact Tab' eventKey='contact'>
                                             Contact
                                        </Nav.Link>
                                   </Nav.Item>
                              </Nav>
                         </Col>
                         <Col
                              sm={12}
                              md={10}
                              className='px-0'
                              onTouchStart={handleTouchStart}
                              onTouchMove={handleTouchMove}
                              onTouchEnd={handleTouchEnd}
                         >
                              <Tab.Content className='backside-content px-3 pt-2'>
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
          </div>
     );
};

export default CardBack;
