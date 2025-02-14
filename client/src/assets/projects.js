// project images
import LandingPage from './images/pwa-sg.png';
import Shazamify from './images/shazamify-sg.png';
import Dashboard from './images/dashboard-sg.png';
import mevArt from './images/mevArt.png';
import thriveSampson from './images/thriveSampson.png';
import { skills } from './skills';

export const getSkill = (names) => {
   let toReturn = [];
   names.map((name) => {
      skills.map((skill) => {
         if (skill.name.toLowerCase() === name.toLowerCase()) {
            toReturn.push(skill);
         }
      });
   });
   return toReturn;
};

export const projects = [
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
      name: 'Faction Architecture',
      description:
         'An online art gallery built with Squarespace and integrated with Google Analytics and Ads.',
      image: mevArt,
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'CSV Cleaner',
      description:
         'An information portal uilt with Squarespace and integrated with Google Ads, Analytics, and Calendar',
      image: thriveSampson,
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Social Network',
      description:
         'An online art gallery built with Squarespace and integrated with Google Analytics and Ads.',
      image: mevArt,
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Match Maker',
      description:
         'An information portal uilt with Squarespace and integrated with Google Ads, Analytics, and Calendar',
      image: thriveSampson,
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'AI Chat Bot',
      description:
         'An online art gallery built with Squarespace and integrated with Google Analytics and Ads.',
      image: mevArt,
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Chrome Plug-In',
      description:
         'An information portal uilt with Squarespace and integrated with Google Ads, Analytics, and Calendar',
      image: thriveSampson,
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Auth Portal',
      description:
         'An information portal uilt with Squarespace and integrated with Google Ads, Analytics, and Calendar',
      image: thriveSampson,
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   }
];
