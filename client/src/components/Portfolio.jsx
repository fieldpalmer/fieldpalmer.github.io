import React from 'react';
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
      <div className='portfolio-content text-center my-2'>
         <div className='row'>
            {images.map((image, i) => (
               <div key={i} className='col-md-4 col-12'>
                  <div className='circle-image mx-3'>
                     <img src={image.src} alt={image.alt} />
                     <p class='circle-text'>Design & Development</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
