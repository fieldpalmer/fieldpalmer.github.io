import React from 'react';
import { LiaChevronUpSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import './contact.css';

export default function Contact() {
   return (
      <>
         <Link to={`/projects`} className='navIcon chevronDown'>
            <LiaChevronUpSolid />
         </Link>
         {/* <h2>Get in touch!</h2> */}

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
      </>
   );
}
