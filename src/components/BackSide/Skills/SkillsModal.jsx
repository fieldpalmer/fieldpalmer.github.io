import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function SkillsModal({
   name,
   url,
   icon,
   //    category,
   one_liner,
   description,
   projectCount,
   showModal,
   handleClose
}) {
   return (
      <Modal
         show={showModal}
         onHide={handleClose} // pass handleClose directly
         centered
         className='gallery-modal'
      >
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
   );
}
