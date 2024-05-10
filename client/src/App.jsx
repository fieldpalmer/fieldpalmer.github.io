import React, { useState } from 'react';
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import IconsList from './components/IconsList';
import { FaRotateRight } from 'react-icons/fa6';
import { FaRotateLeft } from 'react-icons/fa6';
import './app.css';

export default function App() {
   const [showLanding, setShowLanding] = useState(true);

   const handleArrowClick = () => {
      setShowLanding(!showLanding);
   };

   return (
      <main className='App'>
         <h2 id='logo-name' className='logo-name text-center text-white'>
            Field Palmer
         </h2>
         <section className='container p-sm-2 p-md-5'>
            {showLanding ? <Landing /> : <Portfolio />}
            <div className='arrow-container'>
               {showLanding ? (
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
         <IconsList className='icon-footer' />
      </main>
   );
}
