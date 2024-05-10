import React from 'react';
// import { SlUser } from 'react-icons/sl';
import { GrDocumentUser } from 'react-icons/gr';
import { SlSocialLinkedin } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
import { SlSocialSpotify } from 'react-icons/sl';
import pdf from '../assets/Field-Palmer-Resume.pdf';

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
            <SlSocialGithub />
         </a>
         <a href={pdf} target='_blank' rel='noreferrer'>
            <GrDocumentUser />
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
