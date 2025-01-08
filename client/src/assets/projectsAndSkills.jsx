// project images
import Portfolio from './images/portfolio-sg.png';
import LandingPage from './images/pwa-sg.png';
import Shazamify from './images/shazamify-sg.png';
import Dashboard from './images/dashboard-sg.png';
import mevArt from './images/mevArt.png';
import thriveSampson from './images/thriveSampson.png';
// skill icons
import { TbBrandReactNative, TbUxCircle } from 'react-icons/tb';
import { BiLogoNetlify } from 'react-icons/bi';
import {
   FaReact,
   FaNodeJs,
   FaPython,
   FaGithub,
   FaAngular,
   FaRust,
   FaVuejs,
   FaCss3Alt
} from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import {
   SiGraphql,
   SiMongodb,
   SiOpenai,
   SiGoogleappsscript,
   SiSolidity,
   SiJavascript,
   SiTypescript,
   SiPostman,
   SiWeb3Dotjs,
   SiIpfs,
   SiHtml5,
   SiNpm,
   SiTailwindcss,
   SiGoogleads,
   SiGoogleanalytics,
   SiAwsamplify,
   SiLinux,
   SiKubernetes
} from 'react-icons/si';

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
      icon: <SiJavascript />
   },
   {
      name: 'OpenAI',
      url: 'https://platform.openai.com/docs/overview',
      icon: <SiOpenai />
   },
   {
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
      icon: <SiTypescript />
   },
   {
      name: 'NodeJS',
      url: 'https://nodejs.org/en/',
      icon: <FaNodeJs />
   },
   {
      name: 'Firebase',
      url: 'https://firebase.google.com/',
      icon: <IoLogoFirebase />
   },
   {
      name: 'React',
      url: 'https://reactjs.org/',
      icon: <FaReact />
   },
   {
      name: 'Angular',
      url: 'https://angular.dev',
      icon: <FaAngular />
   },
   {
      name: 'Postman',
      url: 'https://www.postman.com/',
      icon: <SiPostman />
   },
   {
      name: 'Netlify',
      url: 'https://netlify.com/',
      icon: <BiLogoNetlify />
   },
   {
      name: 'Google Apps Script',
      url: 'https://developers.google.com/apps-script',
      icon: <SiGoogleappsscript />
   },
   {
      name: 'Vue.js',
      url: 'https://vuejs.org/',
      icon: <FaVuejs />
   },
   {
      name: 'web3js',
      url: 'https://web3js.readthedocs.io/en/v1.7.4/',
      icon: <SiWeb3Dotjs />
   },
   {
      name: 'Solidity',
      url: 'https://soliditylang.org/',
      icon: <SiSolidity />
   },
   {
      name: 'Rust',
      url: 'https://www.rust-lang.org/',
      icon: <FaRust />
   },
   {
      name: 'MongoDB',
      url: 'https://www.mongodb.com/',
      icon: <SiMongodb />
   },
   {
      name: 'GraphQL',
      url: 'https://graphql.org/',
      icon: <SiGraphql />
   },
   {
      name: 'Python',
      url: 'https://www.python.org/',
      icon: <FaPython />
   },
   {
      name: 'IPFS',
      url: 'https://ipfs.io/',
      icon: <SiIpfs />
   },
   {
      name: 'HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      icon: <SiHtml5 />
   },
   {
      name: 'CSS',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      icon: <FaCss3Alt />
   },
   {
      name: 'React Native',
      url: 'https://reactnative.dev/',
      icon: <TbBrandReactNative />
   },
   {
      name: 'NPM',
      url: 'https://www.npmjs.com/',
      icon: <SiNpm />
   },
   {
      name: 'Tailwind',
      url: 'https://tailwindcss.com/',
      icon: <SiTailwindcss />
   },
   {
      name: 'Github',
      url: 'https://github.com/',
      icon: <FaGithub />
   },
   {
      name: 'Google Ads',
      url: 'https://ads.google.com/home/',
      icon: <SiGoogleads />
   },
   {
      name: 'Google Analytics',
      url: 'https://developers.google.com/analytics',
      icon: <SiGoogleanalytics />
   },
   {
      name: 'UX/UI Design',
      url: 'https://atomicdesign.bradfrost.com/table-of-contents/',
      icon: <TbUxCircle />
   },
   {
      name: 'AWS Amplify',
      url: 'https://aws.amazon.com/amplify/',
      icon: <SiAwsamplify />
   },
   {
      name: 'Linux',
      url: 'https://www.linux.org',
      icon: <SiLinux />
   },
   {
      name: 'Kubernetes',
      url: 'https://kubernetes.io',
      icon: <SiKubernetes />
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
