import React from 'react';
import { Link } from 'react-router-dom';
import './projects.css';

const images = [
   {
      src: 'https://placehold.co/400',
      alt: 'gallery image',
      desc: 'Description of project and technologies used maybe some icons',
      title: 'Project Sample'
   },
   {
      src: 'https://placehold.co/400',
      alt: 'gallery image',
      desc: 'Description of project and technologies used maybe some icons',
      title: 'Project Sample'
   },
   {
      src: 'https://placehold.co/400',
      alt: 'gallery image',
      desc: 'Description of project and technologies used maybe some icons',
      title: 'Project Sample'
   },
   {
      src: 'https://placehold.co/400',
      alt: 'gallery image',
      desc: 'Description of project and technologies used maybe some icons',
      title: 'Project Sample'
   },
   {
      src: 'https://placehold.co/400',
      alt: 'gallery image',
      desc: 'Description of project and technologies used maybe some icons',
      title: 'Project Sample'
   },
   {
      src: 'https://placehold.co/400',
      alt: 'gallery image',
      desc: 'Description of project and technologies used maybe some icons',
      title: 'Project Sample'
   }
];

export default function Projects() {
   return (
      <>
         {/* <h2>Projects</h2> */}
         <div className='gallery'>
            {images.map((img, index) => (
               <div key={index} className='gallery-item-container'>
                  <img className='gallery-item' src={img.src} alt={img.alt} />
                  <p className='text-overlay'>{img.desc}</p>
               </div>
            ))}
         </div>
      </>
   );
}
