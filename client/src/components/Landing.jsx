import React from 'react';
import profPic from '../assets/profPic.png';
import IconsList from './IconsList';
// import ReadMeModal from './ReadMeModal';
import './landing.css';

export default function Landing() {
   return (
      <>
         <div className='two-col-content'>
            <div className='bio-info'>
               <div className='text-white'>
                  <h1 className='my-name'>Field Palmer</h1>
                  <p>Web Development & Software Engineering</p>
                  {/* <ReadMeModal /> */}
               </div>
               <hr className='bio-hr' />
               <IconsList />
            </div>
            <div className='profile-picture'>
               <span className='circle-image'>
                  <img alt='profPic' src={profPic} />
               </span>
            </div>
         </div>
      </>
   );
}
