import React, { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './contact.css';

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
         // .sendForm('service_xpf5k9l', 'template_iudd27p', form.current, {
         //      publicKey: 'VxxKBcLVNAdzXvHA5'
         // })
         .send(
            'service_xpf5k9l',
            'template_iudd27p',
            {
               user_name: formData.user_name,
               user_email: formData.user_email,
               user_message: formData.user_message
            },
            'VxxKBcLVNAdzXvHA5'
         )
         .then(
            () => {
               console.log('SUCCESS!');
               setFormData({
                  user_name: 'Message Sent Successfully',
                  user_email: 'Thank You!',
                  user_message: 'I will get back in touch ASAP'
               });
            },
            (error) => {
               console.log('FAILED...', error.text);
            }
         );
   };

   return (
      <>
         <h4 className='d-md-none'>Get In Touch!</h4>
         <hr className='d-md-none' />
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
                  <hr />
                  <button type='submit' className='contact-btn btn'>
                     Submit
                  </button>
               </Col>
            </Row>
         </form>
      </>
   );
}
