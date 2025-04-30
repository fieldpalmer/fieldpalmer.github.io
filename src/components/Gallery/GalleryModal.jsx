import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// import MarkdownView from 'react-showdown';
import './gallery.css';

export default function GalleryModal({ name, description, technologies, url, github, showModal, handleClose }) {
   const ToolTipSkill = ({ className, tip, icon }) => {
      return (
         <span className={className} title={tip}>
            {icon}&nbsp;
         </span>
      );
   };

   return (
      <Modal show={showModal} onHide={handleClose} centered className='gallery-modal'>
         <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <strong>{description}</strong>
            <hr />
            <h1 className='gallery-modal-skill-icons'>
               {technologies.map((tech, index) => (
                  <ToolTipSkill key={index} tip={tech.name} icon={tech.icon} />
               ))}
            </h1>
         </Modal.Body>
         <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
               Close
            </Button>
            {url && (
               <Button variant='primary' href={url} target='_blank' rel='noopener noreferrer'>
                  View Demo
               </Button>
            )}
            {github && (
               <Button variant='primary' href={github} target='_blank' rel='noopener noreferrer'>
                  View Repo
               </Button>
            )}
         </Modal.Footer>
      </Modal>
   );
}
