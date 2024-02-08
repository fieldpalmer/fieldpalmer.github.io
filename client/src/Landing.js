import React from 'react';
import profPic from './profPic.png';
import { SlUser } from 'react-icons/sl';
import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
import { SlSocialSpotify } from 'react-icons/sl';

import './Landing.css';

export default function Landing() {
   return (
      <div className='landing-content'>
         <div className='bio-info'>
            <h1>Field Palmer</h1>
            <h4>Web Design & Development</h4>
            <hr className='hr-bar' />
            <h3 className='icons-list'>
               {/* <FaBeer /> */}
               <a href='#'>
                  <SlSocialLinkedin />
               </a>
               <a href='#'>
                  <SlSocialGithub />
               </a>
               <a href='#'>
                  <SlUser />
               </a>
               <a href='#'>
                  <SlSocialSpotify />
               </a>
            </h3>
            <hr className='hr-bar' />
         </div>
         <div className='profile-picture'>
            <span className='circle-image'>
               {/* <img alt='profPic' src='https://placehold.co/300' /> */}
               <img alt='profPic' src={profPic} />
            </span>
         </div>
      </div>
   );
}
