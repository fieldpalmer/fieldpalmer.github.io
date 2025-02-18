import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';

export const SkillsIcon = ({
   name,
   url,
   icon,
   category,
   one_liner,
   description,
   projectCount
}) => {
   const [showModal, setShowModal] = useState(false);
   const handleClose = () => setShowModal(false);

   return (
      <>
         <Row
            className='bg-dark border mx-0'
            role='button'
            onClick={() => setShowModal(true)}
         >
            <Col>
               <p className='px-1 text-small my-0'>{name}</p>
               <hr className='my-0 py-0 mx-1' />
            </Col>
         </Row>
         {/* modal */}
         <Modal
            show={showModal}
            onHide={handleClose}
            centered
            className='gallery-modal'
         >
            <Modal.Header closeButton onClick={() => handleClose()}>
               <Modal.Title>
                  {icon}&nbsp;&nbsp;{name}
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <strong>{one_liner}</strong>
               <hr />
               <small>{description}</small>
               <hr />
               <strong>Project Count: {projectCount} </strong>
            </Modal.Body>
            <Modal.Footer>
               <Button variant='secondary' onClick={handleClose}>
                  Close
               </Button>
               {url && (
                  <Button
                     variant='primary'
                     href={url}
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                     {name} Home Page
                  </Button>
               )}
            </Modal.Footer>
         </Modal>
      </>
   );
};
