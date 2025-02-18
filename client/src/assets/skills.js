// skill icons
// import { projects } from './projects';
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
      category: 'Frontend',
      one_liner: 'dynamic language powering interactive web experiences.',
      description:
         'JavaScript is a high-level, versatile language used both on the client and server sides to build interactive and dynamic web applications. It’s one of the core technologies of the web, enabling powerful front-end experiences and real-time features.',
      projectCount: 0
   },
   {
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
      icon: <SiTypescript />,
      category: 'Frontend',
      one_liner: 'typed superset of JavaScript that compiles to plain JS.',
      description:
         'TypeScript adds static typing, interfaces, and other powerful features to JavaScript, making large codebases more maintainable and reducing runtime errors. It’s fully compatible with existing JavaScript code and tooling.',
      projectCount: 0
   },
   {
      name: 'React',
      url: 'https://reactjs.org/',
      icon: <FaReact />,
      category: 'Frontend',
      one_liner: 'library for building dynamic and reusable UI components.',
      description:
         'React is a popular front-end JavaScript library developed by Meta (Facebook) for building user interfaces. It uses a component-based approach and a virtual DOM for high performance and easy reusability, making it ideal for modern single-page applications.',
      projectCount: 0
   },
   {
      name: 'Vue.js',
      url: 'https://vuejs.org/',
      icon: <FaVuejs />,
      category: 'Frontend',
      one_liner: 'progressive JavaScript framework for building user interfaces.',
      description:
         'Vue.js is known for its gentle learning curve and flexible architecture. It focuses on incrementally adopting features, making it easy to integrate into existing projects or scale up for complex single-page applications.',
      projectCount: 0
   },
   {
      name: 'Angular',
      url: 'https://angular.dev',
      icon: <FaAngular />,
      category: 'Frontend',
      one_liner: 'robust framework for building large-scale, feature-rich web apps.',
      description:
         'Angular, maintained by Google, uses TypeScript and a structured approach to build enterprise-grade web applications. It offers two-way data binding, dependency injection, and a comprehensive CLI for streamlined development.',
      projectCount: 0
   },
   {
      name: 'CSS',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      icon: <FaCss3Alt />,
      category: 'Frontend',
      one_liner: 'styling language used to define the look and layout of web pages.',
      description:
         'Cascading Style Sheets (CSS) control the presentation of HTML elements, enabling developers to create visually appealing and responsive designs. It provides the ability to separate content from styling, improving maintainability.',
      projectCount: 0
   },
   {
      name: 'HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      icon: <SiHtml5 />,
      category: 'Frontend',
      one_liner: 'standard markup language for structuring web content.',
      description:
         'HyperText Markup Language (HTML) is the foundation of all websites, defining the structure and content of web pages. It works hand-in-hand with CSS and JavaScript to deliver rich user experiences.',
      projectCount: 0
   },
   {
      name: 'Tailwind',
      url: 'https://tailwindcss.com/',
      icon: <SiTailwindcss />,
      category: 'Frontend',
      one_liner: 'utility-first CSS framework for rapidly building custom UIs.',
      description:
         'Tailwind CSS provides low-level utility classes that let you build designs directly in your HTML. Its approach avoids the need for custom CSS, enabling faster development and consistent styling across projects.',
      projectCount: 0
   },
   {
      name: 'React Native',
      url: 'https://reactnative.dev/',
      icon: <TbBrandReactNative />,
      category: 'Mobile',
      one_liner: 'framework for building native mobile apps using React.',
      description:
         'React Native extends the React library to iOS and Android development, letting you write native mobile applications using JavaScript and React components, while still accessing platform-specific APIs.',
      projectCount: 0
   },
   {
      name: 'NodeJS',
      url: 'https://nodejs.org/en/',
      icon: <FaNodeJs />,
      category: 'Backend',
      one_liner: 'JavaScript runtime for building server-side and networking apps.',
      description:
         'Node.js uses the V8 JavaScript engine to execute code on the server, enabling developers to use a single language (JavaScript) for both client and server. Its event-driven, non-blocking I/O model excels at real-time applications.',
      projectCount: 0
   },
   {
      name: 'Python',
      url: 'https://www.python.org/',
      icon: <FaPython />,
      category: 'Backend',
      one_liner: 'versatile language known for readability and a vast ecosystem.',
      description:
         'Python is a high-level, interpreted language favored for its simplicity and robust libraries. It’s used in web development, data science, AI, automation, and more, making it one of the most popular languages in the world.',
      projectCount: 0
   },
   {
      name: 'Rust',
      url: 'https://www.rust-lang.org/',
      icon: <FaRust />,
      category: 'Backend',
      one_liner:
         'memory-safe systems language that prioritizes performance and reliability.',
      description:
         'Rust ensures thread and memory safety without a garbage collector, making it ideal for systems programming, game engines, and performance-critical code. It aims to prevent entire classes of bugs at compile time.',
      projectCount: 0
   },
   {
      name: 'MongoDB',
      url: 'https://www.mongodb.com/',
      icon: <SiMongodb />,
      category: 'Database',
      one_liner: 'NoSQL database designed for scalability and high performance.',
      description:
         'MongoDB stores data in flexible JSON-like documents, allowing schema evolution over time. It’s known for easy horizontal scaling and a powerful query language, making it popular for modern web and mobile applications.',
      projectCount: 0
   },
   {
      name: 'GraphQL',
      url: 'https://graphql.org/',
      icon: <SiGraphql />,
      category: 'Backend',
      one_liner:
         'query language for APIs that allows fetching exactly the data needed.',
      description:
         'GraphQL, developed by Facebook, provides a single endpoint to query or mutate data. Clients can request only the fields they need, reducing over-fetching and under-fetching commonly encountered with REST APIs.',
      projectCount: 0
   },
   {
      name: 'Firebase',
      url: 'https://firebase.google.com/',
      icon: <IoLogoFirebase />,
      category: 'Database',
      one_liner: 'Google-backed platform offering serverless app development tools.',
      description:
         'Firebase provides real-time databases, authentication, hosting, and cloud functions, enabling developers to quickly build, deploy, and scale applications without managing their own infrastructure.',
      projectCount: 0
   },
   {
      name: 'Postman',
      url: 'https://www.postman.com/',
      icon: <SiPostman />,
      category: 'Tools',
      one_liner: 'collaboration platform for API development and testing.',
      description:
         'Postman streamlines API workflows with features like request saving, automated testing, environment management, and team collaboration, making it a go-to tool for modern web development.',
      projectCount: 0
   },
   {
      name: 'Google Apps Script',
      url: 'https://developers.google.com/apps-script',
      icon: <SiGoogleappsscript />,
      category: 'Tools',
      one_liner: 'cloud-based scripting language for extending Google Workspace apps.',
      description:
         'Built on JavaScript, Google Apps Script automates tasks across Gmail, Docs, Sheets, and more. It provides easy integration with Google services, letting you create custom workflows and add-ons.',
      projectCount: 0
   },
   {
      name: 'AWS Amplify',
      url: 'https://aws.amazon.com/amplify/',
      icon: <SiAwsamplify />,
      category: 'Cloud',
      one_liner:
         'set of tools to build, deploy, and host serverless web and mobile apps.',
      description:
         'AWS Amplify simplifies cloud-based development by providing authentication, storage, APIs, and hosting out-of-the-box. It integrates closely with AWS services to streamline full-stack development.',
      projectCount: 0
   },
   {
      name: 'Linux',
      url: 'https://www.linux.org',
      icon: <SiLinux />,
      category: 'Cloud',
      one_liner:
         'An open-source OS kernel powering servers, desktops, and embedded systems.',
      description:
         'Linux forms the backbone of much of the internet, offering stability, security, and flexibility. Its open-source nature fosters a vast community and a wide range of distributions for diverse needs.',
      projectCount: 0
   },
   {
      name: 'Kubernetes',
      url: 'https://kubernetes.io',
      icon: <SiKubernetes />,
      category: 'Cloud',
      one_liner:
         'container orchestration platform for automating app deployment and scaling.',
      description:
         'Kubernetes manages containerized applications across clusters of hosts. It provides features like load balancing, self-healing, and rolling updates, making it essential for cloud-native development.',
      projectCount: 0
   },
   {
      name: 'Solidity',
      url: 'https://soliditylang.org/',
      icon: <SiSolidity />,
      category: 'Blockchain',
      one_liner:
         'contract-oriented language for writing Ethereum-based smart contracts.',
      description:
         'Solidity compiles to EVM bytecode and allows developers to create decentralized applications (dApps) on the Ethereum network, handling transactions, tokens, and complex logic on the blockchain.',
      projectCount: 0
   },
   {
      name: 'web3js',
      url: 'https://web3js.readthedocs.io/en/v1.7.4/',
      icon: <SiWeb3Dotjs />,
      category: 'Blockchain',
      one_liner: 'JavaScript library for interacting with the Ethereum blockchain.',
      description:
         'web3.js enables dApp developers to send transactions, read data, and execute smart contracts. It abstracts away low-level details, simplifying communication with Ethereum nodes.',
      projectCount: 0
   },
   {
      name: 'IPFS',
      url: 'https://ipfs.io/',
      icon: <SiIpfs />,
      category: 'Blockchain',
      one_liner: 'peer-to-peer hypermedia protocol for storing and sharing data.',
      description:
         'The InterPlanetary File System (IPFS) uses a content-addressed approach to distribute data across a network of nodes. It aims to make the web faster, safer, and more open by eliminating centralized servers.',
      projectCount: 0
   },
   {
      name: 'Netlify',
      url: 'https://netlify.com/',
      icon: <BiLogoNetlify />,
      category: 'DevOps',
      one_liner:
         'platform for deploying and hosting static sites and serverless functions.',
      description:
         'Netlify simplifies continuous deployment and hosting for modern web projects. With features like form handling, split testing, and serverless functions, it’s a popular choice for JAMstack architectures.',
      projectCount: 0
   },
   {
      name: 'Github',
      url: 'https://github.com/',
      icon: <FaGithub />,
      category: 'DevOps',
      one_liner: 'platform for version control and collaboration using Git.',
      description:
         'GitHub provides a web-based interface for hosting code repositories, enabling issue tracking, pull requests, and code reviews. It fosters open-source collaboration and is widely used in the developer community.',
      projectCount: 0
   },
   {
      name: 'UX/UI Design',
      url: 'https://atomicdesign.bradfrost.com/table-of-contents/',
      icon: <TbUxCircle />,
      category: 'Design',
      one_liner:
         'Crafting intuitive interfaces that enhance user satisfaction and usability.',
      description:
         'UX/UI Design focuses on understanding user needs and translating them into cohesive, visually appealing interfaces. It combines user research, wireframing, prototyping, and visual design principles.',
      projectCount: 0
   },
   {
      name: 'Google Ads',
      url: 'https://ads.google.com/home/',
      icon: <SiGoogleads />,
      category: 'Marketing',
      one_liner:
         'platform for creating and managing pay-per-click advertising campaigns.',
      description:
         'Google Ads helps businesses reach potential customers through targeted search, display, and video ads. Its robust analytics and bidding tools optimize ad spend and measure campaign performance.',
      projectCount: 0
   },
   {
      name: 'Google Analytics',
      url: 'https://developers.google.com/analytics',
      icon: <SiGoogleanalytics />,
      category: 'Marketing',
      one_liner: 'web analytics service for tracking and reporting site traffic.',
      description:
         'Google Analytics collects data on user interactions, demographics, and behaviors, helping website owners make data-driven decisions. It provides insights into audience, acquisition, and user engagement metrics.',
      projectCount: 0
   }
];
