import React from 'react';
import molly from '../assets/Molly2.JPEG';

export default function Contact() {
   return (
      <div className='two-col-content px-4 bio-info text-white'>
         {/* column 1 */}
         <div className='contact-form text-center text-md-end'>
            {/* text area contact row */}
            <div className='row mb-2'>
               <hr className='d-md-none' />
               <div className='col'>
                  <textarea
                     className='form-control'
                     id='exampleFormControlTextarea1'
                     rows='3'
                     placeholder='Get in touch! I will get back to you as soon as possible.'
                  ></textarea>
               </div>
            </div>
            {/* name and email row */}
            <div className='row'>
               {/* name column */}
               <div className='col-sm-12 col-md-6 mb-2'>
                  <input
                     type='email'
                     className='form-control'
                     id='formControlNameInput'
                     placeholder='Your Name'
                  />
               </div>
               {/* email column */}
               <div className='col-sm-12 col-md-6 mb-2'>
                  <input
                     type='email'
                     className='form-control'
                     id='formControlEmailInput'
                     placeholder='Your Email'
                  />
               </div>
            </div>
            {/* submit button row */}
            <div className='row mt-2'>
               <hr className='d-md-none' />
               <div className='col'>
                  <button type='submit' className='btn btn-success submitBtn'>
                     Submit
                  </button>
               </div>
            </div>
         </div>
         {/* column 2 */}
         <div className='profile-picture'>
            <span className='circle-image'>
               <img alt='aboutPic' src={molly} />
            </span>
         </div>
      </div>
   );
}
