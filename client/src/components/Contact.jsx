import React from 'react';
import './contact.css';

export default function Contact() {
   return (
      <div className='mx-5 px-md-5 mt-5 mt-md-0 contact-form'>
         <div className='row mb-2 text-white'>
            <h4>Get in Touch!</h4>
         </div>
         <div className='row mb-2'>
            <div className='col-sm-12 col-md-6 mb-2'>
               <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='Your Name'
               />
            </div>
            <div className='col-sm-12 col-md-6 mb-2'>
               <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='Your Email'
               />
            </div>
         </div>
         <div className='row mb-2'>
            <div className='col mb-2'>
               <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                  placeholder='Your Message'
               ></textarea>
            </div>
         </div>
         <div className='row'>
            <div className='col'>
               <button type='submit' className='btn btn-success btn-sm submitBtn'>
                  Submit
               </button>
            </div>
         </div>
      </div>
   );
}
