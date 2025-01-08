import React from 'react';
import { CiMenuFries } from 'react-icons/ci';

const MyNavbar = () => {
   return (
      <nav class='navbar fixed-top navbar-expand-lg'>
         <div class='container-fluid'>
            <a class='navbar-brand logo-name' href='/home'>
               <h3>Field Palmer</h3>
            </a>
            <button
               class='navbar-toggler'
               type='button'
               data-bs-toggle='collapse'
               data-bs-target='#navbarTogglerDemo02'
               aria-controls='navbarTogglerDemo02'
               aria-expanded='false'
               aria-label='Toggle navigation'
            >
               <h4 className='menu-logo text-white'>
                  <CiMenuFries />
               </h4>
               {/* <span class='navbar-toggler-icon'></span> */}
            </button>
            <div class='collapse navbar-collapse' id='navbarTogglerDemo02'>
               <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                  {/* <li class='nav-item'>
                     <a class='nav-link' aria-current='page' href='/home'>
                        Welcome
                     </a>
                  </li> */}
                  <li class='nav-item'>
                     <a class='nav-link' href='/portfolio'>
                        Portfolio
                     </a>
                  </li>
                  <li class='nav-item'>
                     <a class='nav-link' href='/contact'>
                        Contact
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default MyNavbar;
