import React from 'react';
import './Portfolio.css';

const images = [
   {
      src: 'https://placehold.co/400',
      alt: 'gallery image',
      desc: 'Description of project and technologies used maybe some icons'
   },
   {
      src: 'https://placehold.co/400',
      alt: 'gallery image',
      desc: 'Description of project and technologies used maybe some icons'
   },
   {
      src: 'https://placehold.co/400',
      alt: 'gallery image',
      desc: 'Description of project and technologies used maybe some icons'
   },
   {
      src: 'https://placehold.co/400',
      alt: 'gallery image',
      desc: 'Description of project and technologies used maybe some icons'
   },
   {
      src: 'https://placehold.co/400',
      alt: 'gallery image',
      desc: 'Description of project and technologies used maybe some icons'
   },
   {
      src: 'https://placehold.co/400',
      alt: 'gallery image',
      desc: 'Description of project and technologies used maybe some icons'
   }
];

export default function Portfolio() {
   return (
      <div className='gallery'>
         {images.map((img, index) => (
            <div key={index} className='gallery-item-container'>
               <img className='gallery-item' src={img.src} alt={img.alt} />
               <p className='text-overlay'>{img.desc}</p>
            </div>
         ))}
      </div>
   );
}
