import React from 'react';
import { SlUser } from 'react-icons/sl';
import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
import { SlSocialSpotify } from 'react-icons/sl';

export default function IconsList() {
   return (
      <h1 className='icons-list'>
         <a
            href='https://www.linkedin.com/in/fieldpalmer/'
            target='_blank'
            rel='noreferrer'
         >
            <SlSocialLinkedin />
         </a>
         <a href='https://github.com/fieldpalmer' target='_blank' rel='noreferrer'>
            <SlSocialGithub />
         </a>
         <a
            href='https://drive.google.com/file/d/1rhXDE2oJK6N-NZBW0szDUvWmJsYRE_4r/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
         >
            <SlUser />
         </a>
         <a
            href='https://open.spotify.com/user/129959859?si=9ef3ef216cb14e34'
            target='_blank'
            rel='noreferrer'
         >
            <SlSocialSpotify />
         </a>
      </h1>
   );
}
