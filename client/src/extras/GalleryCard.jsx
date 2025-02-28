import React, { useState } from 'react';
import {
   Row,
   Col,
   Image,
   OverlayTrigger,
   Tooltip,
   Modal,
   Button
} from 'react-bootstrap';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import TooltipSkill from '../../components/TooltipSkill';

export default function GalleryCard({
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
            className='gallery-row-item'
            role='button'
            onClick={() => setShowModal(true)}
         >
            <Col xs={5} className='p-1'>
               <Image src={image} className='gallery-image img-thumbnail' />
            </Col>
            <Col xs={7} className='px-0'>
               <h6 className='my-1 mb-md-2'>{name}</h6>
               <p className='project-desc d-none d-md-block small mb-2'>{one_liner}</p>
               {technologies.map((skill, index) => (
                  <TooltipSkill key={index} skill={skill.name} id={'t-' + index}>
                     <span className='gallery-skill'>{skill.icon}&nbsp;</span>
                  </TooltipSkill>
               ))}
               {github && (
                  <OverlayTrigger overlay={<Tooltip>Github</Tooltip>}>
                     <a
                        className='gallery-link'
                        href={github}
                        target='_blank'
                        rel='noopener noreferrer'
                     >
                        <FaGithub />
                        &nbsp;
                     </a>
                  </OverlayTrigger>
               )}
               {url && (
                  <OverlayTrigger overlay={<Tooltip>Live Project</Tooltip>}>
                     <a
                        className='gallery-link'
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                     >
                        <FaGlobe />
                        &nbsp;
                     </a>
                  </OverlayTrigger>
               )}
            </Col>
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
