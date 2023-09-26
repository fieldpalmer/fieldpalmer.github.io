import { getSkill, Skill } from '../skills/config';
import Portfolio from './../../images/portfolio-sg.png';
import LandingPage from './../../images/pwa-sg.png';
import Shazamify from './../../images/shazamify-sg.png';
import Dashboard from './../../images/dashboard-sg.png';
import mevArt from './../../images/mevArt.png';
import thriveSampson from './../../images/thriveSampson.png';

export type Project = {
   name: string;
   description: string;
   image: any;
   url: string;
   github: string;
   technologies: Skill[];
};

export const projects: Project[] = [
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
      name: 'Music Streaming App',
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
      name: 'Business Landing Page',
      description:
         'A fully responsive web app built with React and Tailwind to highlight a business or product.',
      image: LandingPage,
      url: 'https://pwawebapp.netlify.app/',
      github: 'https://github.com/fieldpalmer/responsive-web-app',
      technologies: getSkill(['react', 'tailwind', 'nodejs', 'netlify'])
   },
   {
      name: 'e-Commerce Site for Local Artist',
      description:
         'An online art gallery built with Squarespace and integrated with Google Analytics and Ads.',
      image: mevArt,
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Local Physical Therapy Clinic Landing Page',
      description:
         'An information portal uilt with Squarespace and integrated with Google Ads, Analytics, and Calendar',
      image: thriveSampson,
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   }
];
