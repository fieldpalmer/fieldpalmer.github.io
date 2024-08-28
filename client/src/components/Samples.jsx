import React, { useState } from 'react';
import { Row, Col, Button, Modal, ListGroup, ListGroupItem } from 'react-bootstrap';
import { sampleBuckets } from './sampleBuckets';
import ImageFiller from 'react-image-filler';

export default function Samples() {
   const [showModal, setShowModal] = useState(undefined);
   const handleClose = () => setShowModal(undefined);
   const handleShow = (id) => setShowModal(id);

   const SamplesModal = (props) => {
      return (
         <Modal
            {...props}
            size='md'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            variant='dark'
            className='samples-modal'
            id={props.id}
         >
            <Modal.Header closeButton>
               <Modal.Title id='contained-modal-title-vcenter'>
                  <h4>{props.subtitle}</h4>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <ListGroup variant='flush'>
                  {props.projects.map((el, i) => {
                     return (
                        <ListGroupItem key={'project' + i}>
                           <Row>
                              <Col sm={2}>
                                 <ImageFiller width={50} height={50} />
                              </Col>
                              <Col sm={10}>
                                 <p>
                                    <strong>{el.name}</strong>
                                    <br />
                                    <small>{el.desc}</small>
                                    <br />
                                    <small>{el.url}</small>
                                 </p>
                              </Col>
                           </Row>
                        </ListGroupItem>
                     );
                  })}
               </ListGroup>
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
         </Modal>
      );
   };

   const TitleTile = ({ title, id }) => (
      <Col sm={12} md={4} className='mb-3'>
         <Button
            onClick={() => handleShow(id)}
            className='mb-3 mx-0 w-100 h-100 border-light text-dark sample-btn mt-md-3'
         >
            {title.toUpperCase()}
         </Button>
      </Col>
   );

   return (
      <>
         <Row className='text-center'>
            {sampleBuckets.map((t, i) => {
               return (
                  <>
                     <SamplesModal
                        key={'modal' + i}
                        show={showModal === t.id}
                        onHide={handleClose}
                        title={t.title}
                        subtitle={t.subtitle}
                        projects={t.projects}
                     />
                     <TitleTile key={'tile' + i} title={t.subtitle} id={t.id} />
                  </>
               );
            })}
         </Row>
      </>
   );
}
