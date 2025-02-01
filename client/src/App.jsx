import React, { useState } from 'react';
import FrontSide from './components/FrontSide/FrontSide';
import BackSide from './components/BackSide/BackSide';
import { SlArrowLeftCircle, SlArrowRightCircle } from 'react-icons/sl';
import './App.css';

export default function App() {
   const [cardFlip, setCardFlip] = useState(true);

   const handleCardFlip = () => {
      setCardFlip(!cardFlip);
   };

   return (
      <main className='App'>
         <section className='container'>
            {cardFlip ? <FrontSide /> : <BackSide />}
            <div className='arrow-container'>
               {cardFlip === true ? (
                  <SlArrowRightCircle
                     className='arrow arrow-right'
                     onClick={handleCardFlip}
                  />
               ) : (
                  <SlArrowLeftCircle
                     className='arrow arrow-left'
                     onClick={handleCardFlip}
                  />
               )}
            </div>
         </section>
      </main>
   );
}
