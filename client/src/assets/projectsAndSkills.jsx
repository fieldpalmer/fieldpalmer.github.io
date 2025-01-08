import Portfolio from './images/portfolio-sg.png';
import LandingPage from './images/pwa-sg.png';
import Shazamify from './images/shazamify-sg.png';
import Dashboard from './images/dashboard-sg.png';
import mevArt from './images/mevArt.png';
import thriveSampson from './images/thriveSampson.png';
import React from './images/react-logo.png';
import HTML from './images/html5-logo.png';
import CSS from './images/css-logo.png';
import JS from './images/js-logo.png';
import Solidity from './images/solidity-logo.png';
import Gas from './images/gas-logo.png';
import NPM from './images/npm-logo.png';
import Git from './images/git-logo.png';
import Firebase from './images/firebase-logo.png';
import Web3 from './images/web3js.png';
import Mongo from './images/mongo.svg';
import Netlify from './images/netlify-logo.png';
import IPFS from './images/ipfs-logo.png';
import Vue from './images/vue-logo.png';
import GraphQL from './images/graphql-logo.png';
import Postman from './images/postman-logo.png';
import Python from './images/python-logo.png';
import Rust from './images/rust-logo.png';
import NodeJS from './images/nodej-js.png';
import Native from './images/react-native.png';
import Tailwind from './images/tailwind-logo.png';
import TS from './images/ts-logo.png';
import GoogleAnalytics from './images/googleAnalytics.png';
import GoogleAds from './images/googleAds.png';
import WebDesign from './images/webDesign.png';

export const getSkill = (names) => {
   let toReturn = [];
   names.forEach((name) => {
      skills.forEach((skill) => {
         if (skill.name.toLowerCase() === name.toLowerCase()) {
            toReturn.push(skill);
         }
      });
   });
   return toReturn;
};

export const skills = [
   {
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      img: JS
   },
   {
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
      img: TS
   },
   {
      name: 'NodeJS',
      url: 'https://nodejs.org/en/',
      img: NodeJS
   },
   {
      name: 'Firebase',
      url: 'https://firebase.google.com/',
      img: Firebase
   },
   {
      name: 'React',
      url: 'https://reactjs.org/',
      img: React
   },
   {
      name: 'Postman',
      url: 'https://www.postman.com/',
      img: Postman
   },
   {
      name: 'Netlify',
      url: 'https://netlify.com/',
      img: Netlify
   },
   {
      name: 'Google Apps Script',
      url: 'https://developers.google.com/apps-script',
      img: Gas
   },
   {
      name: 'Vue.js',
      url: 'https://vuejs.org/',
      img: Vue
   },
   {
      name: 'web3js',
      url: 'https://web3js.readthedocs.io/en/v1.7.4/',
      img: Web3
   },
   {
      name: 'Solidity',
      url: 'https://soliditylang.org/',
      img: Solidity
   },
   {
      name: 'Rust',
      url: 'https://www.rust-lang.org/',
      img: Rust
   },
   {
      name: 'MongoDB',
      url: 'https://www.mongodb.com/',
      img: Mongo
   },
   {
      name: 'GraphQL',
      url: 'https://graphql.org/',
      img: GraphQL
   },
   {
      name: 'Python',
      url: 'https://www.python.org/',
      img: Python
   },
   {
      name: 'IPFS',
      url: 'https://ipfs.io/',
      img: IPFS
   },
   {
      name: 'HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      img: HTML
   },
   {
      name: 'CSS',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      img: CSS
   },
   {
      name: 'React Native',
      url: 'https://reactnative.dev/',
      img: Native
   },
   {
      name: 'NPM',
      url: 'https://www.npmjs.com/',
      img: NPM
   },
   {
      name: 'Tailwind',
      url: 'https://tailwindcss.com/',
      img: Tailwind
   },
   {
      name: 'Git',
      url: 'https://git-scm.com/',
      img: Git
   },
   {
      name: 'Google Ads',
      url: 'https://ads.google.com/home/',
      img: GoogleAds
   },
   {
      name: 'Google Analytics',
      url: 'https://developers.google.com/analytics',
      img: GoogleAnalytics
   },
   {
      name: 'UX/UI Design',
      url: 'https://atomicdesign.bradfrost.com/table-of-contents/',
      img: WebDesign
   }
];

export const projects = [
   {
      name: 'Portfolio',
      description:
         'Developer portfolio showing my blockchain projects, skillset and certificates.',
      image: Portfolio,
      url: 'https://tijan.dev/',
      github: 'https://github.com/0xTijan/portfolio',
      technologies: getSkill(['react', 'typescript', 'html', 'css', 'git', 'npm'])
   },
   {
      name: 'Data Dashboard',
      description:
         'React and Syncfusion allow us to fluidly display data visualizations.',
      image: Dashboard,
      url: 'https://datadashdemo.web.app/',
      github: 'https://github.com/fieldpalmer/data-dashboard',
      technologies: getSkill([
         'react',
         'tailwind',
         'javascript',
         'firebase',
         'git',
         'npm'
      ])
   },
   {
      name: 'Streaming App',
      description:
         'Users can stream free clips of thousands of songs thanks to ShazamCore API.',
      image: Shazamify,
      url: 'https://shazamify.netlify.app/',
      github: 'https://github.com/fieldpalmer/social-music-app',
      technologies: getSkill([
         'react',
         'javascript',
         'netlify',
         'tailwind',
         'git',
         'npm'
      ])
   },
   {
      name: 'Landing Page',
      description:
         'A fully responsive web app built with React and Tailwind to highlight a business or product.',
      image: LandingPage,
      url: 'https://pwawebapp.netlify.app/',
      github: 'https://github.com/fieldpalmer/responsive-web-app',
      technologies: getSkill(['react', 'tailwind', 'nodejs', 'netlify'])
   },
   {
      name: 'M.E.V. Art',
      description:
         'An online art gallery built with Squarespace and integrated with Google Analytics and Ads.',
      image: mevArt,
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Thrive Sampson',
      description:
         'An information portal uilt with Squarespace and integrated with Google Ads, Analytics, and Calendar',
      image: thriveSampson,
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Work Sample1',
      description:
         'An online art gallery built with Squarespace and integrated with Google Analytics and Ads.',
      image: mevArt,
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Work Sample2',
      description:
         'An information portal uilt with Squarespace and integrated with Google Ads, Analytics, and Calendar',
      image: thriveSampson,
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Work Sample3',
      description:
         'An online art gallery built with Squarespace and integrated with Google Analytics and Ads.',
      image: mevArt,
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Work Sample4',
      description:
         'An information portal uilt with Squarespace and integrated with Google Ads, Analytics, and Calendar',
      image: thriveSampson,
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Work Sample5',
      description:
         'An online art gallery built with Squarespace and integrated with Google Analytics and Ads.',
      image: mevArt,
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Work Sample6',
      description:
         'An information portal uilt with Squarespace and integrated with Google Ads, Analytics, and Calendar',
      image: thriveSampson,
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   }
];
