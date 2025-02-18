import React from 'react';
import { PiArrowLeftDuotone } from 'react-icons/pi';
import    {Modal,
Button
} from 'react-bootstrap';
export default function ProjectDetail(alt, src) {
   return (
       {/* Modal */}
       <Modal show={showModal} onHide={handleClose} centered>
       <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
       </Modal.Header>
       <Modal.Body>
          <img src={image} alt={name} className='img-fluid mb-3' />
          <p>{description}</p>
          <h6>Tech Stack:</h6>
          <p>{technologies.map((skill) => skill.name).join(', ')}</p>
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
