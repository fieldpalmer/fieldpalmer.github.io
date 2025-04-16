import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ReadmeModal({ showModal, handleClose, handleCardFlip }) {
     const [currentText, setCurrentText] = useState('');
     const [isTyping, setIsTyping] = useState(true);

     useEffect(() => {
          if (!showModal) {
               setCurrentText('');
               return;
          }

          const fullText = `> This site shows the tools I like to use and the projects I’ve enjoyed building.\n\nIt shows how I think about design, development, and solving real problems with code.\n\nIt’s a collection of things I’ve worked on, things I’m proud of, and a small window into how I like to build.\n\nGlad you’re here.`;

          let currentIndex = 0;
          const interval = setInterval(() => {
               if (currentIndex <= fullText.length) {
                    setCurrentText(fullText.substring(0, currentIndex));
                    currentIndex++;
               } else {
                    setIsTyping(false);
                    clearInterval(interval);
               }
          }, 30);

          return () => clearInterval(interval);
     }, [showModal]);

     return (
          <Modal show={showModal} onHide={handleClose} centered className='gallery-modal'>
               <Modal.Header closeButton>
                    <Modal.Title>Welcome!</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                    <pre
                         style={{
                              whiteSpace: 'pre-wrap',
                              fontFamily: 'monospace',
                              color: '#00ff87',
                              backgroundColor: 'transparent',
                              border: 'none'
                         }}
                    >
                         {currentText}
                         <span className={`blinking-cursor ${isTyping ? '' : 'idle'}`}>|</span>
                    </pre>
               </Modal.Body>
               <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                         Close
                    </Button>
                    <Button
                         variant='primary'
                         onClick={() => {
                              handleClose();
                              setTimeout(() => {
                                   handleCardFlip();
                              }, 300);
                         }}
                    >
                         View Back of Card
                    </Button>
               </Modal.Footer>
          </Modal>
     );
}
