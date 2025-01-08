import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ReadMeModal() {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <>
         <Button className='bg-transparent border-0' onClick={handleShow}>
            <code>README.md</code>
         </Button>

         <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
               <Modal.Title>
                  <code>Welcome</code>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <p>
                  This app was fun to make. The ideas for it evolved over a few weeks
                  and the inspiration came from a number of places. I hope you have fun
                  clicking around.
                  <br />I am currently seeking a full-time position as a web developer
                  or software engineer. Please feel free to reach out to me with any
                  opportunities or questions. Thank you for visiting!
               </p>
            </Modal.Body>
            <Modal.Footer closeButton>
               <Button variant='secondary' onClick={handleClose}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}
