import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import data_and_dbs from '../assets/data_and_dbs.png';
import design_dev from '../assets/design_dev.png';
import systems from '../assets/systems.png';

const images = [
   {
      src: design_dev,
      alt: 'design and development image',
      title: 'Design & Development',
      desc: 'Description of project and technologies used maybe some icons'
   },
   {
      src: data_and_dbs,
      alt: 'data and dashboards image',
      title: 'Dashboards & Databases',
      desc: 'Description of project and technologies used maybe some icons'
   },
   {
      src: systems,
      alt: 'systems image',
      title: 'API & Systems Engineering',
      desc: 'Description of project and technologies used maybe some icons'
   }
];

export default function Portfolio() {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <div className='portfolio-content text-center my-2'>
         <div className='row'>
            <Modal show={show} onHide={handleClose} centered>
               <Modal.Header closeButton>
                  <Modal.Title>
                     <code>Projects</code>
                  </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                     illum consequatur voluptates eaque nam accusantium maxime neque
                     eligendi voluptate. Ipsam, delectus veritatis voluptate illum
                     repellat inventore unde ipsum cumque iusto.
                  </p>
               </Modal.Body>
               <Modal.Footer closeButton>
                  <Button variant='secondary' onClick={handleClose}>
                     Close
                  </Button>
               </Modal.Footer>
            </Modal>
            {images.map((image, i) => (
               <div key={i} className='col-md-4 col-12'>
                  <div className='circle-image mx-3'>
                     <img src={image.src} alt={image.alt} onClick={handleShow} />
                     <p className='circle-text'>Design & Development</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
