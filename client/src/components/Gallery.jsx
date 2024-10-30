import React, { useRef } from 'react';
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
      <div className='gallery-card'>
         <img src={image} alt={`${name} logo`} className='gallery-card-image' />
         <h2 className='gallery-card-title'>{name}</h2>
         <p className='gallery-card-description'>{description}</p>
         <div className='gallery-card-links'>
            <a href={url} target='_blank' rel='noopener noreferrer'>
               Live Site
            </a>
            <a href={github} target='_blank' rel='noopener noreferrer'>
               GitHub
            </a>
         </div>
         <ul className='gallery-card-technologies'>
            {technologies.map((tech, index) => (
               <li key={index}>{tech}</li>
            ))}
         </ul>
      </div>
   );
};

export default function Gallery() {
   return (
      <HorizontalScroll>
         {projects.map((p, i) => {
            return (
               <GalleryCard
                  name={p.name}
                  description={p.description}
                  image={p.image}
                  url={p.url}
                  github={p.github}
                  technologies={p.technologies}
               />
            );
         })}

         {/* <Card>
            <Card.Img variant='top' src='holder.js/100px160' />
            <Card.Body>
               <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Card.Footer>
               <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
         </Card> */}
      </HorizontalScroll>
   );
}
