import React from 'react';
import { SlSocialLinkedin } from 'react-icons/sl';
import { VscGithub } from 'react-icons/vsc';
import { TbFileCv } from 'react-icons/tb';
import { SiSpotify } from 'react-icons/si';
import pdf from '../assets/pdf/Field-Palmer-CV.pdf';

export default function IconsList() {
     return (
          <h2 className='icons-list'>
               <a title='My LinkedIn' href='https://www.linkedin.com/in/fieldpalmer/' target='_blank' rel='noreferrer'>
                    <SlSocialLinkedin />
               </a>
               <a title='My GitHub' href='https://github.com/fieldpalmer' target='_blank' rel='noreferrer'>
                    <VscGithub />
               </a>
               <a title='My Resume' href={pdf} target='_blank' rel='noreferrer'>
                    <TbFileCv />
               </a>
               <a title='My Spotify' href='https://open.spotify.com/user/129959859' target='_blank' rel='noreferrer'>
                    <SiSpotify />
               </a>
          </h2>
     );
}
