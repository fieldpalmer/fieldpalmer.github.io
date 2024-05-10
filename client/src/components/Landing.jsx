import React from 'react';
import profPic from '../assets/profPic.png';

export default function Landing() {
   return (
      <div className='two-col-content my-2'>
         <div className='bio-info'>
            <div className='text-white'>
               <h2 className='my-name'>Welcome!</h2>
               <hr />
               <p>
                  I'm Field. I'm a web developer with a decade of experience building
                  front-ends, dashboards, and databases for praesentium tempore error
                  voluptatibus illum soluta debitis placeat qui!.
               </p>
            </div>
         </div>
         <div className='profile-picture'>
            <span className='circle-image'>
               <img alt='profPic' src={profPic} />
            </span>
         </div>
      </div>
   );
}
