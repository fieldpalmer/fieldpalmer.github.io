import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';

export default function SkillsList({
   name,
   //    index,
   url,
   icon,
   //    category,
   one_liner,
   description,
   //    first_learned,
   years_experience,
   projectCount
}) {
   const [showModal, setShowModal] = useState(false);
   const handleClose = () => setShowModal(false);

   return (
      <>
         <Row className='gallery-row-item' role='button' onClick={() => setShowModal(true)}>
            <Col xs={2} className='p-2'>
               <h1>{icon}</h1>
            </Col>
            <Col xs={10} className='px-0'>
               <h6 className='mt-1 mb-0'>
                  <code>{name}</code>
               </h6>
               <hr className='d-none d-md-block my-1' />
               <small>
                  exp: {years_experience} yrs &nbsp;-&nbsp; {projectCount} projects
               </small>
               {/* <p className='my-0 small'>{one_liner}</p> */}
            </Col>
         </Row>
         {/* modal */}
         <Modal show={showModal} onHide={handleClose} centered className='gallery-modal'>
            <Modal.Header closeButton>
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
                  <Button variant='primary' href={url} target='_blank' rel='noopener noreferrer'>
                     {name} Home Page
                  </Button>
               )}
            </Modal.Footer>
         </Modal>
      </>
   );
}
