import React, { useState } from 'react';
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import { FaRotateRight } from 'react-icons/fa6';
import { FaRotateLeft } from 'react-icons/fa6';
import './app.css';

export default function App() {
   const [showFront, setShowFront] = useState(true);

   const handleArrowClick = () => {
      setShowFront(!showFront);
   };

   return (
      <main className='App'>
         <section className='container p-sm-2 p-md-5'>
            {showFront ? <Landing /> : <Portfolio />}
            <div className='arrow-container'>
               {showFront ? (
                  <FaRotateRight
                     className='arrow arrow-right'
                     onClick={handleArrowClick}
                  />
               ) : (
                  <FaRotateLeft
                     className='arrow arrow-left'
                     onClick={handleArrowClick}
                  />
               )}
            </div>
         </section>
      </main>
   );
}
