import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Landing from './Landing';
import Portfolio from './Portfolio';
import Contact from './Contact';

const ContentCarousel = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };

   const carouselPanes = [<Landing />, <Portfolio />, <Contact />];

   return (
      <Carousel
         activeIndex={index}
         onSelect={handleSelect}
         fade
         interval={null}
         touch={true}
         keyboard={true}
         controls={true}
      >
         {carouselPanes.map((pane, i) => (
            <Carousel.Item key={i}>{pane}</Carousel.Item>
         ))}
      </Carousel>
   );
};

export default ContentCarousel;
