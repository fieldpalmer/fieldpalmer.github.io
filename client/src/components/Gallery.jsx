import React, { useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { projects } from './projectsAndSkills';
export const HorizontalScroll = ({ children }) => {
   const containerRef = useRef(null);

   return (
      <div className='horizontal-scroll' ref={containerRef}>
         <div className='horizontal-scroll-content'>{children}</div>
      </div>
   );
};

export const GalleryCard = ({
   name,
   description,
   image,
   url,
   github,
   technologies
}) => {
   return (
      <div className='gallery-card p-1 mx-1'>
         <img src={image} alt={`${name} logo`} className='gallery-card-image' />
         <h5 className='gallery-card-title'>{name}</h5>
         {/* <p className='gallery-card-description'>{description}</p> */}
         <div className='gallery-card-links'>
            <a href={url} target='_blank' rel='noopener noreferrer'>
               Live Site
            </a>
            <a href={github} target='_blank' rel='noopener noreferrer'>
               GitHub
            </a>
         </div>
         {/* <ul className='gallery-card-technologies'>
            {technologies.map((tech, index) => (
               <li key={index}>{tech}</li>
            ))}
         </ul> */}
      </div>
   );
};

export default function Gallery() {
   return (
      <div className='gallery-container'>
         <HorizontalScroll>
            {projects.map((p, i) => {
               return (
                  <GalleryCard
                     name={p.name}
                     // description={p.description}
                     image={p.image}
                     url={p.url}
                     github={p.github}
                     // technologies={p.technologies}
                  />
               );
            })}
         </HorizontalScroll>
      </div>
   );
}
