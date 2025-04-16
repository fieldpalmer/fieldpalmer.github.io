// import React, { useState } from 'react';
import { FiArrowDownRight } from 'react-icons/fi';
import IconsList from '../IconsList';
// import ReadmeModal from '../ReadmeModal';
import profPic from '../../assets/images/profPic.png';
import './cardfront.css';

export default function CardFront({ cardFlip, handleCardFlip }) {
     //  const [showReadme, setShowReadme] = useState(false);

     return (
          <div className='card-face card-front' aria-hidden={!cardFlip}>
               <FiArrowDownRight
                    className='arrow arrow-right'
                    onClick={handleCardFlip}
                    role='button'
                    tabIndex='0'
                    aria-label='Flip card to back'
                    onKeyDown={(e) => {
                         if (e.key === 'Enter' || e.key === ' ') {
                              handleCardFlip();
                         }
                    }}
               />
               {/* <code id='readme' onClick={() => setShowReadme(true)} style={{ cursor: 'pointer' }}>
                    README.md
               </code>
               <ReadmeModal showModal={showReadme} handleClose={() => setShowReadme(false)} handleCardFlip={handleCardFlip} /> */}

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
