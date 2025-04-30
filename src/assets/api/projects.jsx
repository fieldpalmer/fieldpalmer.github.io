import React from 'react';
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
      name: 'Interactive Data Dashboard',
      one_liner: 'React and Syncfusion allow us to fluidly display data visualizations.',
      description:
         'A dynamic data visualization platform built with React and Syncfusion components. Features real-time data updates, interactive charts, and customizable dashboards. The application integrates with Firebase for backend services and authentication.',
      url: 'https://fieldpalmer.github.io/Full-Stack-SaaS-Dashboard/',
      github: 'https://github.com/fieldpalmer/Full-Stack-SaaS-Dashboard',
      technologies: getSkill(['react', 'tailwind', 'javascript', 'firebase', 'git', 'npm'])
   },
   {
      name: 'Multi-Model A.I. Chatbot',
      one_liner: 'A multi-model A.I. chatbot that provides a seamless user experience.',
      description:
         'A multi-model A.I. chatbot that provides a seamless user experience. Built with React and Tailwind CSS, it offers a seamless user experience with modern UI components and responsive design. It uses a variety of models to provide a seamless user experience.',
      url: 'https://analysisic.web.app/solutions/chatbots',
      github: 'https://github.com/fieldpalmer/cli-chatbot',
      technologies: getSkill(['react', 'javascript', 'netlify', 'tailwind', 'git', 'npm'])
   },
   {
      name: 'Automated File Analysis',
      one_liner: 'A web application that automatically analyzes and processes various file formats.',
      description:
         'A web application that automatically analyzes and processes various file formats. Built with React and Node.js, it provides a user-friendly interface for uploading and analyzing files, with results displayed in an intuitive dashboard.',
      url: 'https://analysisic.web.app/solutions/file-analysis',
      github: '',
      technologies: getSkill(['react', 'tailwind', 'nodejs', 'netlify'])
   },
   {
      name: 'Cloud-Based Reporting',
      one_liner: 'A comprehensive reporting platform that generates and distributes business intelligence reports.',
      description:
         'A comprehensive reporting platform that generates and distributes business intelligence reports. Features include automated report generation, scheduled deliveries, and interactive data visualization tools.',
      url: 'https://fieldpalmer.github.io/client-reporting-portal/',
      github: 'https://github.com/fieldpalmer/client-reporting-portal',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'DataDashboard',
      one_liner: 'React and Syncfusion allow us to fluidly display data visualizations.',
      description:
         'An enterprise-grade dashboard solution that transforms complex data into actionable insights. Built with React and Syncfusion, it offers customizable widgets, real-time data updates, and advanced filtering capabilities.',
      url: 'https://datadashdemo.web.app/',
      github: 'https://github.com/fieldpalmer/data-dashboard',
      technologies: getSkill(['react', 'tailwind', 'javascript', 'firebase', 'git', 'npm'])
   },
   {
      name: 'StreamingApp',
      one_liner: 'Spotify Clone using ShazamCore API.',
      description:
         'A modern music streaming platform that combines the power of ShazamCore with a sleek user interface. Features include music recognition, playlist creation, and social sharing capabilities.',
      url: 'https://shazamify.netlify.app/',
      github: 'https://github.com/fieldpalmer/social-music-app',
      technologies: getSkill(['react', 'javascript', 'netlify', 'tailwind', 'git', 'npm'])
   },
   {
      name: 'LandingPage',
      one_liner: 'A fully responsive and customizable landing page for tech products.',
      description:
         'A high-conversion landing page template built with React and Tailwind CSS. Features include responsive design, animated components, and optimized performance for various devices and screen sizes.',
      url: 'https://pwawebapp.netlify.app/',
      github: 'https://github.com/fieldpalmer/responsive-web-app',
      technologies: getSkill(['react', 'tailwind', 'nodejs', 'netlify'])
   },
   {
      name: 'MEV.Art',
      one_liner: 'An online art gallery and eCommerce portal for local artist.',
      description:
         'A digital art marketplace that connects artists with collectors. Features include artist profiles, artwork galleries, secure payment processing, and social sharing capabilities.',
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'ThriveSampson',
      one_liner: 'An information portal for local physical therapy clinic.',
      description:
         'A comprehensive healthcare portal for physical therapy patients. Features include appointment scheduling, treatment tracking, exercise guides, and secure patient-provider communication.',
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'FactionArc',
      one_liner: 'Landing page for local architecture studio.',
      description:
         'A portfolio website showcasing architectural projects and design services. Features include project galleries, client testimonials, and interactive 3D model viewing capabilities.',
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'CSV Cleaner',
      one_liner: 'An information portal for local physical therapy clinic.',
      description:
         'A data cleaning tool specifically designed for CSV files. Features include automated data validation, duplicate removal, format standardization, and export to various file formats.',
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'SocialNetwork',
      one_liner: 'A modern social networking platform for creative professionals.',
      description:
         'A professional networking platform that connects creative professionals. Features include profile customization, portfolio sharing, job postings, and industry-specific discussion forums.',
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Match Maker',
      one_liner: 'An information portal for local physical therapy clinic.',
      description:
         'A specialized matching platform that connects healthcare providers with patients. Features include detailed provider profiles, appointment scheduling, insurance verification, and patient reviews.',
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'AI Chat Bot',
      one_liner: 'An intelligent customer service assistant powered by AI.',
      description:
         'A conversational AI platform that provides automated customer support. Features include natural language processing, multi-language support, and seamless integration with existing customer service systems.',
      url: 'https://markviser.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Web Plug-In',
      one_liner: 'An information portal for local physical therapy clinic.',
      description:
         'A versatile web plugin framework that enhances website functionality. Features include easy installation, customizable settings, and seamless integration with popular content management systems.',
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   },
   {
      name: 'Auth Portal',
      one_liner: 'A secure authentication and authorization management system.',
      description:
         'A comprehensive authentication solution that provides secure user management. Features include multi-factor authentication, role-based access control, and detailed activity logging.',
      url: 'https://thrivesampson.com',
      github: '',
      technologies: getSkill(['ux/ui design', 'google analytics', 'google ads'])
   }
];
