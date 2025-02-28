import { skills } from './skills';

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

export const projects = [
   {
      name: 'DataDashboard',
      one_liner: 'React and Syncfusion allow us to fluidly display data visualizations.',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro animi magnam quasi alias repellendus pariatur minus cupiditate obcaecati amet culpa blanditiis itaque laboriosam rerum nobis possimus dicta aperiam accusamus?',
      url: 'https://datadashdemo.web.app/',
      github: 'https://github.com/fieldpalmer/data-dashboard',
      technologies: getSkill(['react', 'tailwind', 'javascript', 'firebase', 'git', 'npm'])
   },
   {
      name: 'StreamingApp',
      one_liner: 'Spotify Clone using ShazamCore API.',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro animi magnam quasi alias repellendus pariatur minus cupiditate obcaecati amet culpa blanditiis itaque laboriosam rerum nobis possimus dicta aperiam accusamus?',
      url: 'https://shazamify.netlify.app/',
      github: 'https://github.com/fieldpalmer/social-music-app',
      technologies: getSkill(['react', 'javascript', 'netlify', 'tailwind', 'git', 'npm'])
   },
   {
      name: 'LandingPage',
      one_liner: 'A fully responsive and customizable landing page for tech products.',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro animi magnam quasi alias repellendus pariatur minus cupiditate obcaecati amet culpa blanditiis itaque laboriosam rerum nobis possimus dicta aperiam accusamus?',
      url: 'https://pwawebapp.netlify.app/',
      github: 'https://github.com/fieldpalmer/responsive-web-app',
      technologies: getSkill(['react', 'tailwind', 'nodejs', 'netlify'])
   },
   {
      name: 'MEV.Art',
      one_liner: 'An online art gallery and eCommerce portal for local artist.',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro animi magnam quasi alias repellendus pariatur minus cupiditate obcaecati amet culpa blanditiis itaque laboriosam rerum nobis possimus dicta aperiam accusamus?',
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'ThriveSampson',
      one_liner: 'An information portal for local physical therapy clinic.',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro animi magnam quasi alias repellendus pariatur minus cupiditate obcaecati amet culpa blanditiis itaque laboriosam rerum nobis possimus dicta aperiam accusamus?',
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'FactionArc',
      one_liner: 'Landing page for local architecture studio.',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro animi magnam quasi alias repellendus pariatur minus cupiditate obcaecati amet culpa blanditiis itaque laboriosam rerum nobis possimus dicta aperiam accusamus?',
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'CSV Cleaner',
      one_liner: 'An information portal for local physical therapy clinic.',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro animi magnam quasi alias repellendus pariatur minus cupiditate obcaecati amet culpa blanditiis itaque laboriosam rerum nobis possimus dicta aperiam accusamus?',

      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'SocialNetwork',
      one_liner: 'lorem ipsum dolor sit ameit amatus bunt alebit wacundus secondi',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro animi magnam quasi alias repellendus pariatur minus cupiditate obcaecati amet culpa blanditiis itaque laboriosam rerum nobis possimus dicta aperiam accusamus?',

      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Match Maker',
      one_liner: 'An information portal for local physical therapy clinic',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro animi magnam quasi alias repellendus pariatur minus cupiditate obcaecati amet culpa blanditiis itaque laboriosam rerum nobis possimus dicta aperiam accusamus?',

      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'AI Chat Bot',
      one_liner: 'lorem ipsum dolor sit ameit amatus bunt alebit wacundus secondi',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro animi magnam quasi alias repellendus pariatur minus cupiditate obcaecati amet culpa blanditiis itaque laboriosam rerum nobis possimus dicta aperiam accusamus?',

      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Web Plug-In',
      one_liner: 'An information portal for local physical therapy clinic',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro animi magnam quasi alias repellendus pariatur minus cupiditate obcaecati amet culpa blanditiis itaque laboriosam rerum nobis possimus dicta aperiam accusamus?',
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Auth Portal',
      one_liner: 'An information portal for local physical therapy clinic',
      description:
         '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro animi magnam quasi alias repellendus pariatur minus cupiditate obcaecati amet culpa blanditiis itaque laboriosam rerum nobis possimus dicta aperiam accusamus?',
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   }
];
