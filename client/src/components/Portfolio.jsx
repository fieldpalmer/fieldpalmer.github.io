import React, { useState } from 'react';
import { Modal, Button, Col, Row, Nav, Tab } from 'react-bootstrap';
import systems from '../assets/systems.png';
import mollyPic from '../assets/Molly2.JPEG';
import IconsList from './IconsList';

export default function Portfolio() {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <div className='text-white two-col-content'>
         <Tab.Container defaultActiveKey='first'>
            <Col sm={2}>
               <Nav variant='pills' className='flex-column'>
                  <Nav.Item>
                     <Nav.Link eventKey='first'>About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link eventKey='second'>Portfolio</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link eventKey='third'>Contact</Nav.Link>
                  </Nav.Item>
               </Nav>
            </Col>
            <Col sm={10}>
               <Tab.Content>
                  <Tab.Pane eventKey='first'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                     illum consequatur voluptates eaque nam accusantium maxime neque
                     eligendi voluptate. Ipsam, delectus veritatis voluptate illum
                     repellat inventore unde ipsum cumque iusto.
                  </Tab.Pane>
                  <Tab.Pane eventKey='second'>
                     {' '}
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                     illum consequatur voluptates eaque nam accusantium maxime neque
                     eligendi voluptate. Ipsam, delectus veritatis voluptate illum
                     repellat inventore unde ipsum cumque iusto.
                  </Tab.Pane>
                  <Tab.Pane eventKey='third'>
                     {' '}
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                     illum consequatur voluptates eaque nam accusantium maxime neque
                     eligendi voluptate. Ipsam, delectus veritatis voluptate illum
                     repellat inventore unde ipsum cumque iusto.
                  </Tab.Pane>
               </Tab.Content>
            </Col>
         </Tab.Container>
      </div>
   );
}
