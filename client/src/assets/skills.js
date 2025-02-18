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

export const skills = [
   {
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      icon: <SiJavascript />,
      category: 'Frontend'
   },
   {
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
      icon: <SiTypescript />,
      category: 'Frontend'
   },
   {
      name: 'React',
      url: 'https://reactjs.org/',
      icon: <FaReact />,
      category: 'Frontend'
   },
   {
      name: 'Vue.js',
      url: 'https://vuejs.org/',
      icon: <FaVuejs />,
      category: 'Frontend'
   },
   {
      name: 'Angular',
      url: 'https://angular.dev',
      icon: <FaAngular />,
      category: 'Frontend'
   },
   {
      name: 'CSS',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      icon: <FaCss3Alt />,
      category: 'Frontend'
   },
   {
      name: 'HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      icon: <SiHtml5 />,
      category: 'Frontend'
   },
   {
      name: 'Tailwind',
      url: 'https://tailwindcss.com/',
      icon: <SiTailwindcss />,
      category: 'Frontend'
   },
   {
      name: 'React Native',
      url: 'https://reactnative.dev/',
      icon: <TbBrandReactNative />,
      category: 'Mobile'
   },
   {
      name: 'NodeJS',
      url: 'https://nodejs.org/en/',
      icon: <FaNodeJs />,
      category: 'Backend'
   },
   {
      name: 'Python',
      url: 'https://www.python.org/',
      icon: <FaPython />,
      category: 'Backend'
   },
   {
      name: 'Rust',
      url: 'https://www.rust-lang.org/',
      icon: <FaRust />,
      category: 'Backend'
   },
   {
      name: 'MongoDB',
      url: 'https://www.mongodb.com/',
      icon: <SiMongodb />,
      category: 'Database'
   },
   {
      name: 'GraphQL',
      url: 'https://graphql.org/',
      icon: <SiGraphql />,
      category: 'Backend'
   },
   {
      name: 'Firebase',
      url: 'https://firebase.google.com/',
      icon: <IoLogoFirebase />,
      category: 'Database'
   },
   {
      name: 'Postman',
      url: 'https://www.postman.com/',
      icon: <SiPostman />,
      category: 'Tools'
   },
   {
      name: 'Google Apps Script',
      url: 'https://developers.google.com/apps-script',
      icon: <SiGoogleappsscript />,
      category: 'Tools'
   },
   {
      name: 'AWS Amplify',
      url: 'https://aws.amazon.com/amplify/',
      icon: <SiAwsamplify />,
      category: 'Cloud'
   },
   {
      name: 'Linux',
      url: 'https://www.linux.org',
      icon: <SiLinux />,
      category: 'Cloud'
   },
   {
      name: 'Kubernetes',
      url: 'https://kubernetes.io',
      icon: <SiKubernetes />,
      category: 'Cloud'
   },
   {
      name: 'Solidity',
      url: 'https://soliditylang.org/',
      icon: <SiSolidity />,
      category: 'Blockchain'
   },
   {
      name: 'web3js',
      url: 'https://web3js.readthedocs.io/en/v1.7.4/',
      icon: <SiWeb3Dotjs />,
      category: 'Blockchain'
   },
   {
      name: 'IPFS',
      url: 'https://ipfs.io/',
      icon: <SiIpfs />,
      category: 'Blockchain'
   },
   {
      name: 'Netlify',
      url: 'https://netlify.com/',
      icon: <BiLogoNetlify />,
      category: 'DevOps'
   },
   {
      name: 'Github',
      url: 'https://github.com/',
      icon: <FaGithub />,
      category: 'DevOps'
   },
   {
      name: 'UX/UI Design',
      url: 'https://atomicdesign.bradfrost.com/table-of-contents/',
      icon: <TbUxCircle />,
      category: 'Design'
   },
   {
      name: 'Google Ads',
      url: 'https://ads.google.com/home/',
      icon: <SiGoogleads />,
      category: 'Marketing'
   },
   {
      name: 'Google Analytics',
      url: 'https://developers.google.com/analytics',
      icon: <SiGoogleanalytics />,
      category: 'Marketing'
   }
];
