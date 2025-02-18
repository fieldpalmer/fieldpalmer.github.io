import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import TooltipSkill from '../TooltipSkill';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function GalleryIcon({ name, image, url, github, technologies }) {
   return (
      <div className='gallery-icon-view' style={{ backgroundImage: `url(${image})` }}>
         <div className='gallery-overlay p-0 '>
            <small className='px-1'>{name}</small>
            <hr className='my-0 py-0 mx-1' />
            {technologies.map((skill, index) => (
               <TooltipSkill key={index} skill={skill.name} id={'t-' + index}>
                  <span className='px-1'>{skill.icon}</span>
               </TooltipSkill>
            ))}
            {/* <br /> */}
            <hr className='my-0 py-0 mx-1' />
            {github && (
               <OverlayTrigger placement='bottom' overlay={<Tooltip>Github</Tooltip>}>
                  <a
                     className='gallery-link px-1'
                     href={github}
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                     <FaGithub />
                  </a>
               </OverlayTrigger>
            )}
            {url && (
               <OverlayTrigger
                  placement='bottom'
                  overlay={<Tooltip>Live Project</Tooltip>}
               >
                  <a
                     className='gallery-link px-1'
                     href={url}
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                     <FaGlobe />
                  </a>
               </OverlayTrigger>
            )}
         </div>
      </div>
   );
}
