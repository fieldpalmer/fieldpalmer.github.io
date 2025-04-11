import React from 'react';
import { SlSocialLinkedin } from 'react-icons/sl';
import { VscGithub } from 'react-icons/vsc';
import { PiReadCvLogoFill } from 'react-icons/pi';
import pdf from '../assets/pdf/Field-Palmer-CV.pdf';

export default function IconsList() {
     return (
          <h2 className='icons-list'>
               <a href='https://www.linkedin.com/in/fieldpalmer/' target='_blank' rel='noreferrer'>
                    <SlSocialLinkedin />
               </a>
               <a href='https://github.com/fieldpalmer' target='_blank' rel='noreferrer'>
                    <VscGithub />
               </a>
               <a href={pdf} target='_blank' rel='noreferrer'>
                    <PiReadCvLogoFill />
               </a>
          </h2>
     );
}
