import React, { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

export default function Contact() {
   const [formData, setFormData] = useState({
      user_name: '',
      user_email: '',
      user_message: ''
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value
      }));
   };

   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm('service_xpf5k9l', 'template_iudd27p', form.current, {
            publicKey: 'VxxKBcLVNAdzXvHA5'
         })
         .then(
            () => {
               console.log('SUCCESS!');
               setFormData((prevData) => ({
                  ...prevData,
                  user_name: 'Message Sent Successfully',
                  user_email: 'Thank You!',
                  user_message: 'I will get back in touch ASAP'
               }));
            },
            (error) => {
               console.log('FAILED...', error.text);
            }
         );
   };

   return (
      <div className='portfolio-container' id='contact-container'>
         {/* <h4>Get In Touch</h4> */}
         <form onSubmit={sendEmail} ref={form}>
            <Row>
               <Col sm={6}>
                  <input
                     type='text'
                     className='form-control mb-2'
                     name='user_name'
                     placeholder='Your name'
                     value={formData.user_name}
                     onChange={handleChange}
                     required
                  />
               </Col>
               <Col sm={6}>
                  <input
                     type='email'
                     className='form-control mb-2'
                     name='user_email'
                     placeholder='Your email address'
                     value={formData.user_email}
                     onChange={handleChange}
                     required
                  />
               </Col>
            </Row>
            <Row>
               <Col sm={12}>
                  <textarea
                     className='form-control mb-2'
                     name='user_message'
                     rows='4'
                     placeholder='Write your message here'
                     value={formData.user_message}
                     onChange={handleChange}
                     required
                  />
                  <button type='submit' id='contact-btn' className='btn'>
                     Submit
                  </button>
               </Col>
            </Row>
         </form>
      </div>
   );
}
