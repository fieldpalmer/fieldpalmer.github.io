import React, { useState } from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import TooltipSkill from '../TooltipSkill';
import { Row, OverlayTrigger, Tooltip, Modal, Button } from 'react-bootstrap';

export default function GalleryIcon({
   name,
   one_liner,
   description,
   image,
   url,
   github,
   technologies
}) {
   const [showModal, setShowModal] = useState(false);
   const handleClose = () => setShowModal(false);

   return (
      <>
         <Row
            className='gallery-icon-view'
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => setShowModal(true)}
         >
            <div className='gallery-overlay p-0 '>
               <p className='px-1 text-small my-0'>{name}</p>
               <hr className='my-0 py-0 mx-1' />
               {technologies.map((skill, index) => (
                  <TooltipSkill key={index} skill={skill.name} id={'t-' + index}>
                     <span className='px-1'>{skill.icon}</span>
                  </TooltipSkill>
               ))}
               <br />
               {github && (
                  <OverlayTrigger
                     placement='bottom'
                     overlay={<Tooltip>Github</Tooltip>}
                  >
                     <a
                        className='gallery-link px-1'
                        href={github}
                        target='_blank'
                        rel='noopener noreferrer'
                     >
                        <FaGithub />
                     </a>
                  </OverlayTrigger>
               )}
               {url && (
                  <OverlayTrigger
                     placement='bottom'
                     overlay={<Tooltip>Live Project</Tooltip>}
                  >
                     <a
                        className='gallery-link px-1'
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                     >
                        <FaGlobe />
                     </a>
                  </OverlayTrigger>
               )}
            </div>
         </Row>

         {/* modal */}
         <Modal
            show={showModal}
            onHide={handleClose}
            centered
            className='gallery-modal'
         >
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
      </>
   );
}
