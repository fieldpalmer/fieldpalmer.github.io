import { FiArrowDownRight } from 'react-icons/fi';
import IconsList from '../IconsList';
import profPic from '../../assets/images/profPic.png';
import './cardfront.css';

export default function CardFront({ cardFlip, handleCardFlip }) {
     return (
          <div className='card-face card-front' inert={!cardFlip}>
               <div className='corner-click-area top-left' onClick={handleCardFlip}></div>
               <div className='corner-click-area top-right' onClick={handleCardFlip}></div>
               <div className='corner-click-area bottom-left' onClick={handleCardFlip}></div>
               <div className='corner-click-area bottom-right' onClick={handleCardFlip}></div>
               <FiArrowDownRight
                    className='arrow arrow-right'
                    onClick={handleCardFlip}
                    role='button'
                    tabIndex={!cardFlip ? '0' : '-1'}
                    title='Flip to back'
                    aria-label='Flip to back'
                    onKeyDown={(e) => {
                         if (e.key === 'Enter' || e.key === ' ') {
                              handleCardFlip();
                         }
                    }}
               />
               <div className='circle-image'>
                    <img alt='profPic' src={profPic} />
               </div>

               <div className='content-section'>
                    <h1>FIELD PALMER</h1>
                    <hr />
                    <p>
                         <small>Full-Stack Developer + Systems Engineer</small>
                    </p>
                    <hr />
                    <IconsList />
               </div>
          </div>
     );
}
