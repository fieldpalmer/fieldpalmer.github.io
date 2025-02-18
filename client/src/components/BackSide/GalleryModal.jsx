import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import TooltipSkill from '../TooltipSkill';

export default function GalleryModal({
   name,
   one_liner,
   description,
   image,
   url,
   github,
   technologies,
   showModal,
   setShowModal,
   handleClose
}) {
   return (
      <Modal show={showModal} onHide={handleClose} centered className='gallery-modal'>
         <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <strong>{one_liner}</strong>
            <hr />
            <img src={image} alt={name} className='img-fluid mb-3' />
            <small>{description}</small>
            <hr />
            {/* <h6>Tech Stack:</h6> */}
            {technologies.map((skill, index) => (
               <TooltipSkill key={index} skill={skill.name} id={'t-' + index}>
                  <span className='modal-skill-icon'>{skill.icon}&nbsp;</span>
               </TooltipSkill>
            ))}
            <br />
            <em>{technologies.map((skill) => skill.name).join(', ')}</em>
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
                  View Project
               </Button>
            )}
         </Modal.Footer>
      </Modal>
   );
}
