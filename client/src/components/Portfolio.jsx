import React from 'react';
import { Card, Image } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import SkillIcons from './SkillIcons';
import data_and_dbs from '../assets/data_and_dbs.png';
import design_dev from '../assets/design_dev.png';
import systems from '../assets/systems.png';
import './portfolio.css';

const images = [
   {
      src: design_dev,
      alt: 'design and development image',
      title: 'Design & Development',
      desc: 'Description of project and technologies used maybe some icons'
   },
   {
      src: data_and_dbs,
      alt: 'data and dashboards image',
      title: 'Dashboards & Databases',
      desc: 'Description of project and technologies used maybe some icons'
   },
   {
      src: systems,
      alt: 'systems image',
      title: 'API & Systems Engineering',
      desc: 'Description of project and technologies used maybe some icons'
   }
];

export default function Portfolio() {
   return (
      <div className='portfolio-content text-center'>
         <div className='row'>
            {images.map((image, i) => (
               <div key={i} className='col-md-4 col-12'>
                  <div className='profile-picture'>
                     <Image src={image.src} alt={image.alt} className='circle-image' />
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
