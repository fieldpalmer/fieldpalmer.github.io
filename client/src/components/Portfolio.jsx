import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
import SkillIcons from './SkillIcons';

const images = [
   {
      src: 'https://placehold.co/200',
      alt: 'gallery image',
      title: 'Full-Stack Development',
      desc: 'Description of project and technologies used maybe some icons'
   },
   {
      src: 'https://placehold.co/200',
      alt: 'gallery image',
      title: 'User Interface Design',
      desc: 'Description of project and technologies used maybe some icons'
   },
   {
      src: 'https://placehold.co/200',
      alt: 'gallery image',
      title: 'Systems Engineering',
      desc: 'Description of project and technologies used maybe some icons'
   }
];

export default function Portfolio() {
   return (
      <div className='portfolio-content'>
         <div className='row g-1 row-cols-2 row-cols-md-3 g-md-'>
            {images.map((img, index) => (
               <div key={index} className='col'>
                  <div className='card'>
                     <img className='card-img' src={img.src} alt={img.alt} />
                     <div className='card-img-overlay d-flex text-justify'>
                        <div className='align-self-center'>
                           <h5 className='card-title fs-5'>{img.title}</h5>
                           <p className='card-text'>
                              <SkillIcons />
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
