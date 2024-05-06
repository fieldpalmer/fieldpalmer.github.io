import React from 'react';
import Landing from './Landing';
import Portfolio from './Portfolio';
import Contact from './Contact';
// import CarouselPane from './CarouselPane';
// import { windows } from '../assets/projects';
import './carousel.css';

export default function Carousel() {
   return (
      <>
         <div id='glassPaneCarousel' className='carousel slide align-middle'>
            <div className='carousel-indicators'>
               <button
                  type='button'
                  data-bs-target='#glassPaneCarousel'
                  data-bs-slide-to='0'
                  className='active'
                  aria-current='true'
                  aria-label='Slide 1'
               ></button>
               <button
                  type='button'
                  data-bs-target='#glassPaneCarousel'
                  data-bs-slide-to='1'
                  aria-label='Slide 2'
               ></button>
               <button
                  type='button'
                  data-bs-target='#glassPaneCarousel'
                  data-bs-slide-to='2'
                  aria-label='Slide 3'
               ></button>
               {/* <button
                  type='button'
                  data-bs-target='#glassPaneCarousel'
                  data-bs-slide-to='3'
                  aria-label='Slide 4'
               ></button>
               <button
                  type='button'
                  data-bs-target='#glassPaneCarousel'
                  data-bs-slide-to='4'
                  aria-label='Slide 5'
               ></button> */}
            </div>
            <div className='carousel-inner'>
               <div className='carousel-item active'>
                  <Landing />
               </div>
               <div className='carousel-item'>
                  <Portfolio />
               </div>
               {/* {windows.map((w, i) => (
                  <div key={i} className='carousel-item'>
                     <CarouselPane
                        src={w.src}
                        title={w.title}
                        desc={w.desc}
                        link={w.link}
                     />
                  </div>
               ))} */}
               <div className='carousel-item'>
                  <Contact />
               </div>
            </div>
            <button
               className='carousel-control-prev'
               type='button'
               data-bs-target='#glassPaneCarousel'
               data-bs-slide='prev'
            >
               <span className='carousel-control-prev-icon' aria-hidden='true'></span>
               <span className='visually-hidden'>Previous</span>
            </button>
            <button
               className='carousel-control-next'
               type='button'
               data-bs-target='#glassPaneCarousel'
               data-bs-slide='next'
            >
               <span className='carousel-control-next-icon' aria-hidden='true'></span>
               <span className='visually-hidden'>Next</span>
            </button>
         </div>
      </>
   );
}
