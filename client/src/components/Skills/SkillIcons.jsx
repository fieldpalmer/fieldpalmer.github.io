import React from 'react';
import { IoLogoNodejs } from 'react-icons/io';
import { IoLogoReact, IoLogoFirebase } from 'react-icons/io5';
import { SiMongodb, SiGraphql, SiFigma, SiAwsamplify } from 'react-icons/si';

export default function SkillIcons() {
   return (
      <span>
         <IoLogoNodejs />
         <IoLogoReact />
         <SiMongodb />
         <IoLogoFirebase />
         <SiGraphql />
         <SiFigma />
         <SiAwsamplify />
      </span>
   );
}
