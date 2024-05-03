import React from 'react';
import profPic from '../assets/profPic.png';
import { LiaArrowAltCircleLeft } from 'react-icons/lia';
import { PiArrowLeftDuotone } from 'react-icons/pi';
import './project-detail.css';

export default function ProjectDetail(alt, src) {
   return (
      <div className='project-detail'>
         <div className='project-image'>
            {/* <img alt={alt} src={src} /> */}
            <h5>
               <button className='back-button'>
                  <PiArrowLeftDuotone />
               </button>
            </h5>
            <span className='square-image'>
               <img alt='profPic' src='https://placehold.co/600x400' />
            </span>
         </div>
         <div className='project-info'>
            <h3 className='project-header'>[PROJECT HEADLINE]</h3>
            <p>
               This project was completed on [DATE] for [CLIENT] who needed [WHATEVER
               THEY NEEDED] so I provided it using [THESE METHODS AND TECHNOLOGIES].
            </p>
            <div className='button-group'>
               <button className='button-46'>Code</button>
               <button className='button-46'>Demo</button>
            </div>
         </div>
      </div>
   );
}
