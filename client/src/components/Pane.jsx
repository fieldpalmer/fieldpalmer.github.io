import React from 'react';
import Landing from './Landing';
import Portfolio from './Portfolio';
import Contact from './Contact';
// import Projects from './Projects';
import './pane.css';

export default function Panel() {
   return (
      <>
         <div id='glassPaneCarousel' className='carousel slide'>
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
            </div>
            <div className='carousel-inner'>
               <div className='carousel-item active'>
                  <Landing />
               </div>
               <div className='carousel-item'>
                  <Portfolio />
               </div>
               <div className='carousel-item'>
                  <Contact />
               </div>
            </div>
            <button
               className='carousel-control-prev mr-5'
               type='button'
               data-bs-target='#glassPaneCarousel'
               data-bs-slide='prev'
            >
               <span className='carousel-control-prev-icon' aria-hidden='true'></span>
               <span className='visually-hidden'>Previous</span>
            </button>
            <button
               className='carousel-control-next ml-5'
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
