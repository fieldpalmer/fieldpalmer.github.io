import React from 'react';
import molly from '../assets/Molly.jpeg';
import './contact.css';

export default function Contact() {
   return (
      <>
         <div className='two-col-content px-4'>
            <div className='bio-info'>
               <div className='text-white'>
                  <div className='contact-form text-center text-md-end'>
                     <div className='row mb-2 text-white'>
                        <h3>Contact</h3>
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
                           <button type='submit' className='btn btn-success submitBtn'>
                              Submit
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='profile-picture'>
               <span className='circle-image'>
                  {/* <img alt='profPic' src={profPic} /> */}
                  <img alt='aboutPic' src={molly} />
               </span>
            </div>
         </div>
      </>
   );
}
