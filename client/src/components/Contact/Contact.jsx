import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
// import IconsList from '../IconsList';
import './contact.css';

export default function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Add form submission logic here
   };

   return (
      <Row className='portfolio-container'>
         <Col sm={12}>
            <form onSubmit={handleSubmit}>
               <Row>
                  <Col sm={6}>
                     <input
                        type='text'
                        className='form-control mb-2'
                        id='name'
                        name='name'
                        placeholder='Your name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                     />
                  </Col>
                  <Col sm={6}>
                     <input
                        type='email'
                        className='form-control mb-2'
                        id='email'
                        name='email'
                        placeholder='Your email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                     />
                  </Col>
               </Row>
               <Row>
                  <Col sm={12}>
                     <textarea
                        className='form-control mb-2'
                        id='message'
                        name='message'
                        rows='5'
                        placeholder='Write your message here'
                        value={formData.message}
                        onChange={handleChange}
                        required
                     />
                     <button type='submit' id='contact-btn' className='btn float-right'>
                        Submit
                     </button>
                  </Col>
               </Row>
            </form>
            {/* <hr className='mt-2 mb-1' />
            <IconsList /> */}
         </Col>
      </Row>
   );
}
