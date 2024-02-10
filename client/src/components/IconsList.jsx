import React from 'react';
import { SlUser } from 'react-icons/sl';
import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
import { SlSocialSpotify } from 'react-icons/sl';

export default function IconsList() {
   return (
      <h3 className='icons-list'>
         {/* <FaBeer /> */}
         <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
            <SlSocialLinkedin />
         </a>
         <a href='https://github.com' target='_blank' rel='noreferrer'>
            <SlSocialGithub />
         </a>
         <a href='https://drive.google.com' target='_blank' rel='noreferrer'>
            <SlUser />
         </a>
         <a href='https://spotfiy.com' target='_blank' rel='noreferrer'>
            <SlSocialSpotify />
         </a>
      </h3>
   );
}
