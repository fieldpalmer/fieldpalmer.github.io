import React from 'react';
// import { Link } from "react-router-dom";

export default function CarouselPane({ src, title, desc, link }) {
   return (
      <>
         <div className='glass-pane-content px-5 mx-sm-3 mx-md-5'>
            <div className='bio-info'>
               <div className='text-white'>
                  <h1 className='card-title'>{title}</h1>
                  <hr className='d-md-none bg-white' />
                  <p className='card-text'>{desc}</p>
                  <hr className='bg-white' />
                  <p className='card-text'>
                     <code>See more here</code>
                  </p>
               </div>
            </div>
            <div className='profile-picture'>
               <span className='circle-image'>
                  <img className='card-img ' src={src} alt={title} />
               </span>
            </div>
         </div>
      </>
   );
}
