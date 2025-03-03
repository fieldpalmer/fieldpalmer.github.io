import { useState } from 'react';
import FrontSide from './components/Front/Front-Side';
import BackSide from './components/Back/Back-Side';
import { SlArrowLeftCircle, SlArrowRightCircle } from 'react-icons/sl';
import './App.css';

function App() {
   const [cardFlip, setCardFlip] = useState(true);

   const handleCardFlip = () => {
      setCardFlip(!cardFlip);
   };
   return (
      <main className='App'>
         <section className='glass-pane'>
            <div className='glass-pane-content'>
               {cardFlip ? <FrontSide /> : <BackSide />}
               {cardFlip === true ? (
                  <SlArrowRightCircle className='arrow' onClick={handleCardFlip} />
               ) : (
                  <SlArrowLeftCircle className='arrow' onClick={handleCardFlip} />
               )}
            </div>
         </section>
      </main>
   );
}

export default App;
