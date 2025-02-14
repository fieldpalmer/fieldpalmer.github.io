import React from 'react';
// import { SlUser } from 'react-icons/sl';
// import { GrDocumentUser } from 'react-icons/gr';
// import { FaWordpressSimple } from 'react-icons/fa';
import { SlSocialLinkedin } from 'react-icons/sl';
import { VscGithub } from 'react-icons/vsc';
import { SlSocialSpotify } from 'react-icons/sl';
import { TbFileCv } from 'react-icons/tb';
// import { MdOutlineEmail } from 'react-icons/md';
import { PiReadCvLogoFill } from 'react-icons/pi';
import './icons-list.css';
import pdf from '../../assets/Field-Palmer-CV.pdf';

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
         {/* <a href='mailto:gfp3.digital@gmail.com' target='_blank' rel='noreferrer'>
            <MdOutlineEmail />
         </a> */}
      </h2>
   );
}
