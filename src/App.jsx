import { useState } from 'react';
import FrontSide from './components/Front/Front-Side';
import BackSide from './components/Back/Back-Side';
import { SlArrowLeftCircle, SlArrowRightCircle } from 'react-icons/sl';
import { FiArrowDownRight, FiArrowDownLeft } from 'react-icons/fi';
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
                              <FiArrowDownRight className='arrow arrow-right' onClick={handleCardFlip} />
                         ) : (
                              <FiArrowDownLeft className='arrow arrow-left' onClick={handleCardFlip} />
                         )}
                    </div>
               </section>
          </main>
     );
}

export default App;
