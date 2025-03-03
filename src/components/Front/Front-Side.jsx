import React from 'react';
import profPic from '../../assets/images/profPic.png';
import IconsList from '../IconsList';

export default function FrontSide() {
   return (
      <>
         <div className='circle-image'>
            <img alt='profPic' src={profPic} />
         </div>
         <div>
            <h1>FIELD PALMER</h1>
            <hr />
            <small>Full-Stack Developer + Solutions Engineer</small>
            <hr />
            <IconsList />
         </div>
      </>
   );
}
