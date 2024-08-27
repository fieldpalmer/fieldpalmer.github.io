import React from 'react';
import profPic from '../assets/profPic.png';
import IconsList from './IconsList';

export default function Landing() {
   return (
      <div className='two-col-content my-2'>
         <div className='profile-picture'>
            <span className='circle-image'>
               <img alt='profPic' src={profPic} />
            </span>
         </div>
         <div className='bio-info'>
            <div className='text-white'>
               <h1 className='my-name'>FIELD PALMER</h1>
               <hr />
               <small>Full-Stack Solutions Engineer</small>
               <hr />
               <IconsList className='icon-footer' />
            </div>
         </div>
      </div>
   );
}
