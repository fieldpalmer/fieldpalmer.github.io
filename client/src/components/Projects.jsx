import React from 'react';
import { LiaChevronUpSolid, LiaChevronDownSolid } from 'react-icons/lia';
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
         <Link to={`/`} className='navIcon chevronDown'>
            <LiaChevronUpSolid />
         </Link>
         {/* <h2>Projects</h2> */}
         <div className='gallery'>
            {images.map((img, index) => (
               <div key={index} className='gallery-item-container'>
                  <img className='gallery-item' src={img.src} alt={img.alt} />
                  <p className='text-overlay'>{img.desc}</p>
               </div>
            ))}
         </div>
         <Link to={`/contact`} className='navIcon chevronDown'>
            <LiaChevronDownSolid />
         </Link>
      </>
   );
}
