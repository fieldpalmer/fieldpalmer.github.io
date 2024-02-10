import React from 'react';
import profPic from '../assets/profPic.png';
import IconsList from './IconsList';
import { LiaChevronDownSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import './landing.css';

export default function Landing() {
   return (
      <>
         <div className='two-col-content'>
            <div className='bio-info'>
               <h1>Field Palmer</h1>
               <h4>Web Design & Development</h4>
               <hr className='hr-bar' />
               <IconsList />
               <hr className='hr-bar' />
            </div>
            <div className='profile-picture'>
               <span className='circle-image'>
                  <img alt='profPic' src={profPic} />
               </span>
            </div>
         </div>
         <Link to={`/projects`} className='navIcon chevronDown'>
            <LiaChevronDownSolid />
         </Link>
      </>
   );
}
