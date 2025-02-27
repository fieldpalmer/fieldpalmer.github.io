import React from 'react';
import { Col, Row, Nav, Tab } from 'react-bootstrap';
import Skills from './Skills/Skills';
import About from './About';
import Contact from './Contact';
// import Gallery from './Gallery/Gallery';
import GitHubGallery from './Gallery/GitHubGallery';

export default function Portfolio() {
   return (
      <>
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
                        <Nav.Link eventKey='about'>About</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey='gallery'>Gallery</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey='skills'>Skills</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link eventKey='contact'>Contact</Nav.Link>
                     </Nav.Item>
                  </Nav>
                  <hr className='d-md-none' />
               </Col>
               <Col sm={12} md={10}>
                  <Tab.Content className='backside-content'>
                     <Tab.Pane eventKey='about' className='p-1 px-md-3 pt-md-2'>
                        <About />
                     </Tab.Pane>
                     <Tab.Pane eventKey='gallery' className='px-3 pt-2 px-md-4 pt-md-2'>
                        {/* <Gallery /> */}
                        <GitHubGallery />
                     </Tab.Pane>
                     <Tab.Pane eventKey='skills' className='px-3 pt-2 px-md-4 pt-md-2'>
                        <Skills />
                     </Tab.Pane>
                     <Tab.Pane eventKey='contact' className='px-1 pt-2 px-md-3'>
                        <Contact />
                     </Tab.Pane>
                  </Tab.Content>
               </Col>
            </Tab.Container>
         </Row>
      </>
   );
}
