import React from 'react';
import { SlSocialLinkedin } from 'react-icons/sl';
import { VscGithub } from 'react-icons/vsc';
import { SlSocialSpotify } from 'react-icons/sl';
import { PiReadCvLogoFill } from 'react-icons/pi';
import pdf from '../assets/Field-Palmer-CV.pdf';

export default function IconsList() {
   return (
      <h2 className='icons-list'>
         <a
            href='https://www.linkedin.com/in/fieldpalmer/'
            target='_blank'
            rel='noreferrer'
         >
            <SlSocialLinkedin />
         </a>
         <a href='https://github.com/fieldpalmer' target='_blank' rel='noreferrer'>
            <VscGithub />
         </a>
         <a href={pdf} target='_blank' rel='noreferrer'>
            <PiReadCvLogoFill />
         </a>
         <a
            href='https://open.spotify.com/user/129959859?si=9ef3ef216cb14e34'
            target='_blank'
            rel='noreferrer'
         >
            <SlSocialSpotify />
         </a>
      </h2>
   );
}
