import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { projects } from '../../assets/projectsAndSkills';
import { GalleryCard } from './GalleryCard';
import './gallery.css';

export default function Gallery() {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      // Function to check screen size
      const updateScreenSize = () => {
         setIsMobile(window.matchMedia('(max-width: 768px)').matches);
      };

      // Add event listener to track screen size changes
      updateScreenSize(); // Initial check
      window.addEventListener('resize', updateScreenSize);

      // Clean up the event listener on unmount
      return () => window.removeEventListener('resize', updateScreenSize);
   }, []);

   // Show 8 items on mobile, 12 on larger screens
   const displayedItems = isMobile ? projects.slice(0, 8) : projects.slice(0, 12);

   return (
      <div className='portfolio-container'>
         <Row className='gallery-container'>
            {displayedItems.map((p, i) => {
               return (
                  <Col key={p.name + i} xs={6} md={3} className='mb-2'>
                     <GalleryCard
                        name={p.name}
                        description={p.description}
                        image={p.image}
                        url={p.url}
                        github={p.github}
                        technologies={p.technologies}
                     />
                  </Col>
               );
            })}
         </Row>
      </div>
   );
}
