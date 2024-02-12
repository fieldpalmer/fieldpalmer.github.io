import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
import { IoLogoJavascript, IoLogoNodejs, IoLogoPython } from 'react-icons/io';
import { IoLogoReact, IoLogoFirebase, IoLogoCss3, IoLogoHtml5 } from 'react-icons/io5';
import {
   SiMongodb,
   SiApollographql,
   SiGraphql,
   SiFigma,
   SiAwsamplify
} from 'react-icons/si';

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
   }
];

export default function Portfolio() {
   return (
      <>
         <div className='card-group px-5 mx-5'>
            {images.map((img, index) => (
               // <div key={index} className='gallery-item-container'>
               // </div>
               <div class='card'>
                  <img className='card-img-top' src={img.src} alt={img.alt} />
                  {/* <div class='card-body'>
                     <h5 class='card-title'>Card title</h5>
                     <p className='small'>
                        <small>{img.desc}</small>
                     </p>
                  </div> */}
                  <div class='card-footer'>
                     <IoLogoNodejs />
                     {/* <IoLogoPython /> */}
                     <IoLogoReact />
                     <SiMongodb />
                     <IoLogoFirebase />
                     {/* <SiApollographql /> */}
                     {/* <SiGraphql /> */}
                     <IoLogoCss3 />
                     <IoLogoHtml5 />
                     <SiFigma />
                     {/* <SiAwsamplify /> */}
                     {/* <small class='text-body-secondary white'>
                     </small> */}
                  </div>
               </div>
            ))}
         </div>
      </>
   );
}
