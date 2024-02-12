import React from 'react';
import './contact.css';

export default function Contact() {
   return (
      <div className='contact-info mx-5 px-5'>
         <div className='row'>
            <div className='col'>
               <div className='inputBox textarea'>
                  <textarea required='required'></textarea>
                  <span className='text'>Get in touch! Type Your Message Here...</span>
                  <span className='line'></span>
               </div>
            </div>
         </div>
         <div className='row'>
            <div className='col'>
               <div className='inputBox'>
                  <input type='text' name='' required='required' />
                  <span className='text'>Name</span>
                  <span className='line'></span>
               </div>
            </div>
            <div className='col'>
               <div className='inputBox'>
                  <input type='text' name='' required='required' />
                  <span className='text'>Email</span>
                  <span className='line'></span>
               </div>
            </div>
         </div>
         <div className='row'>
            <div className='col'>
               <input type='submit' value='Send' />
            </div>
         </div>
      </div>
   );
}
