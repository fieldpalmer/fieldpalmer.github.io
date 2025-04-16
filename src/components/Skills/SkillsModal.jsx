import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function SkillsModal({
     name,
     url,
     icon,
     //    category,
     one_liner,
     description,
     first_learned,
     showModal,
     handleClose
}) {
     const currentYear = new Date().getFullYear();
     const yearsOfExperience = currentYear - first_learned;

     return (
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
                    <small>Years of Experience: {yearsOfExperience}</small>
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
