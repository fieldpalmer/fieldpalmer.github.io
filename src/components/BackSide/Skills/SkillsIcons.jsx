import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function SkillsIcon({
   name,
   // index,
   url,
   icon,
   // category,
   one_liner,
   description,
   // first_learned,
   // years_experience,
   projectCount
}) {
   const [showModal, setShowModal] = useState(false);
   const handleClose = () => setShowModal(false);

   return (
      <>
         <div
            className='skill-icon-view'
            style={{ background: `transparent` }}
            onClick={() => setShowModal(true)}
         >
            <div className='skills-overlay'>
               <h2>{icon}</h2>
               <hr className='my-0 py-0 mx-1' />
               <code className='px-1'>{name}</code>
            </div>
         </div>
         {/* modal */}
         <Modal show={showModal} onHide={handleClose} centered className='gallery-modal'>
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
                  <Button variant='primary' href={url} target='_blank' rel='noopener noreferrer'>
                     {name} Home Page
                  </Button>
               )}
            </Modal.Footer>
         </Modal>
      </>
   );
}
