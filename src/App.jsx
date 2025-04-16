import React, { useState } from 'react';
import CardFront from './components/CardFront/CardFront';
import CardBack from './components/CardBack/CardBack';
import './App.css';

function App() {
     const [cardFlip, setCardFlip] = useState(true);

     const handleCardFlip = () => {
          setCardFlip(!cardFlip);
     };

     return (
          <main className='App'>
               <section className={`glass-pane ${cardFlip ? '' : 'flipped'}`} role='region' aria-label='Interactive business card'>
                    <div className='glass-card'>
                         {/* FRONT SIDE */}
                         <CardFront cardFlip={cardFlip} handleCardFlip={handleCardFlip} />
                         {/* BACK SIDE */}
                         <CardBack cardFlip={cardFlip} handleCardFlip={handleCardFlip} />
                    </div>
               </section>
          </main>
     );
}

export default App;
