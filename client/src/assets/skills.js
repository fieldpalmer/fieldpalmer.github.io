// skill icons
// import { projects } from './projects';
import { TbBrandReactNative, TbUxCircle } from 'react-icons/tb';
import { BiLogoNetlify } from 'react-icons/bi';
import { GiCheckMark } from 'react-icons/gi';
import {
   FaReact,
   FaNodeJs,
   FaPython,
   FaGithub,
   FaAngular,
   FaRust,
   FaVuejs,
   FaCss3Alt,
   FaJava
} from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import {
   SiGraphql,
   SiMongodb,
   // SiOpenai,
   SiGoogleappsscript,
   SiSolidity,
   SiJavascript,
   SiTypescript,
   SiPostman,
   SiWeb3Dotjs,
   SiIpfs,
   SiHtml5,
   // SiNpm,
   SiTailwindcss,
   SiGoogleads,
   SiGoogleanalytics,
   SiAwsamplify,
   SiLinux,
   SiKubernetes,
   SiSupabase,
   SiSnowflake,
   SiPostgresql,
   SiMysql,
   SiSqlite,
   SiAmazondynamodb,
   SiAmazons3,
   SiAwslambda,
   SiHeroku,
   SiDocker,
   SiTableau,
   SiJira,
   SiConfluence,
   SiLucid,
   SiFigma,
   SiSalesforce,
   SiTrello,
   SiLooker,
   SiShopify,
   SiWordpress,
   SiSquarespace,
   SiAxios,
   SiExpress,
   SiNodemon,
   SiPassport,
   SiCheerio,
   SiRedux,
   SiReactrouter,
   SiHandlebarsdotjs,
   SiBootstrap,
   SiReactbootstrap,
   SiGooglemaps,
   SiVite,
   SiEthereum,
   SiMocha,
   SiSpotify,
   SiJquery,
   SiSequelize,
   SiStripe,
   SiNextdotjs
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
      'Year First Learned': 2014,
      'Years of Experience': 11,
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
      'Year First Learned': 2022,
      'Years of Experience': 3,
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
      'Year First Learned': 2018,
      'Years of Experience': 7,
      projectCount: 0
   },
   {
      name: 'Vue-js',
      url: 'https://vuejs.org/',
      icon: <FaVuejs />,
      category: 'Frontend',
      one_liner: 'progressive JavaScript framework for building user interfaces.',
      description:
         'Vue.js is known for its gentle learning curve and flexible architecture. It focuses on incrementally adopting features, making it easy to integrate into existing projects or scale up for complex single-page applications.',
      'Year First Learned': 2018,
      'Years of Experience': 7,
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
      'Year First Learned': 2018,
      'Years of Experience': 7,
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
      'Year First Learned': 2014,
      'Years of Experience': 11,
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
      'Year First Learned': 2014,
      'Years of Experience': 11,
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
      'Year First Learned': 2022,
      'Years of Experience': 3,
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
      'Year First Learned': 2020,
      'Years of Experience': 5,
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
      'Year First Learned': 2018,
      'Years of Experience': 7,
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
      'Year First Learned': 2019,
      'Years of Experience': 6,
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
      'Year First Learned': 2021,
      'Years of Experience': 4,
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
      'Year First Learned': 2018,
      'Years of Experience': 7,
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
      'Year First Learned': 2023,
      'Years of Experience': 2,
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
      'Year First Learned': 2018,
      'Years of Experience': 7,
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
      'Year First Learned': 2018,
      'Years of Experience': 7,
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
      'Year First Learned': 2021,
      'Years of Experience': 4,
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
      'Year First Learned': 2022,
      'Years of Experience': 3,
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
      'Year First Learned': 2024,
      'Years of Experience': 1,
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
      'Year First Learned': 2024,
      'Years of Experience': 1,
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
      'Year First Learned': 2021,
      'Years of Experience': 4,
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
      'Year First Learned': 2022,
      'Years of Experience': 3,
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
      'Year First Learned': 2020,
      'Years of Experience': 5,
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
      'Year First Learned': 2022,
      'Years of Experience': 3,
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
      'Year First Learned': 2018,
      'Years of Experience': 7,
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
      'Year First Learned': 2019,
      'Years of Experience': 6,
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
      'Year First Learned': 2016,
      'Years of Experience': 9,
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
      'Year First Learned': 2016,
      'Years of Experience': 9,
      projectCount: 0
   },
   {
      name: 'Snowflake',
      url: 'https://www.snowflake.com',
      icon: <SiSnowflake />,
      category: 'Database',
      one_liner: 'Cloud-based data warehouse for fast, scalable analytics.',
      description:
         'Snowflake provides a fully managed, high-performance data warehouse with automatic scaling, built-in security, and seamless data sharing capabilities.',
      'Year First Learned': 2024,
      'Years of Experience': 1,
      projectCount: 0
   },
   {
      name: 'Supabase',
      url: 'https://supabase.com',
      icon: <SiSupabase />,
      category: 'Database',
      one_liner: 'Open-source Firebase alternative with PostgreSQL.',
      description:
         'Supabase offers an easy-to-use backend with authentication, real-time databases, and serverless functions, leveraging PostgreSQL for scalable data storage.',
      'Year First Learned': 2024,
      'Years of Experience': 1,
      projectCount: 0
   },
   {
      name: 'PostgreSQL',
      url: 'https://www.postgresql.org',
      icon: <SiPostgresql />,
      category: 'Database',
      one_liner: 'Advanced open-source relational database known for extensibility.',
      description:
         'PostgreSQL is a powerful, object-relational database system with strong ACID compliance, advanced indexing, and extensibility through custom functions.',
      'Year First Learned': 2022,
      'Years of Experience': 3,
      projectCount: 0
   },
   {
      name: 'MySQL',
      url: 'https://www.mysql.com',
      icon: <SiMysql />,
      category: 'Database',
      one_liner: 'Widely used relational database for web applications.',
      description:
         'MySQL is an open-source relational database management system (RDBMS) known for its speed, reliability, and integration with popular web technologies.',
      'Year First Learned': 2018,
      'Years of Experience': 7,
      projectCount: 0
   },
   {
      name: 'SQLite',
      url: 'https://www.sqlite.org',
      icon: <SiSqlite />,
      category: 'Database',
      one_liner: 'Lightweight, self-contained database engine for local storage.',
      description:
         'SQLite is a serverless, file-based relational database that provides a simple and efficient solution for embedded applications and mobile development.',
      'Year First Learned': 2022,
      'Years of Experience': 3,
      projectCount: 0
   },
   {
      name: 'DynamoDB',
      url: 'https://aws.amazon.com/dynamodb',
      icon: <SiAmazondynamodb />,
      category: 'Database',
      one_liner: 'AWS-managed NoSQL database with high availability and scalability.',
      description:
         'DynamoDB is a fully managed NoSQL database service that offers single-digit millisecond performance, automatic scaling, and built-in security.',
      'Year First Learned': 2022,
      'Years of Experience': 3,
      projectCount: 0
   },
   {
      name: 'S3',
      url: 'https://aws.amazon.com/s3',
      icon: <SiAmazons3 />,
      category: 'Cloud',
      one_liner: 'Scalable object storage for secure file hosting and backups.',
      description:
         'Amazon S3 is an industry-leading cloud storage service that allows businesses to store, retrieve, and manage vast amounts of data with high durability.',
      'Year First Learned': 2022,
      'Years of Experience': 3,
      projectCount: 0
   },
   {
      name: 'AWS Lambda',
      url: 'https://aws.amazon.com/lambda',
      icon: <SiAwslambda />,
      category: 'Cloud',
      one_liner: 'Serverless compute service that runs code on demand.',
      description:
         'AWS Lambda executes code in response to events without provisioning or managing servers, enabling cost-effective and scalable cloud functions.',
      'Year First Learned': 2022,
      'Years of Experience': 3,
      projectCount: 0
   },
   {
      name: 'Smartsheet',
      url: 'https://www.smartsheet.com',
      icon: <GiCheckMark />,
      category: 'Productivity',
      one_liner: 'Collaborative work management platform for teams and automation.',
      description:
         'Smartsheet combines spreadsheets, automation, and project management tools to help organizations track, manage, and execute work efficiently.',
      'Year First Learned': 2021,
      'Years of Experience': 4,
      projectCount: 0
   },
   {
      name: 'Heroku',
      url: 'https://www.heroku.com',
      icon: <SiHeroku />,
      category: 'Cloud',
      one_liner:
         'Platform-as-a-Service (PaaS) for deploying and managing applications.',
      description:
         'Heroku simplifies app deployment with a fully managed platform, supporting multiple programming languages and seamless scaling.',
      'Year First Learned': 2018,
      'Years of Experience': 7,
      projectCount: 0
   },
   {
      name: 'Docker',
      url: 'https://www.docker.com',
      icon: <SiDocker />,
      category: 'DevOps',
      one_liner:
         'Containerization platform for building, shipping, and running applications.',
      description:
         'Docker packages applications and dependencies into lightweight, portable containers, ensuring consistency across different environments.',
      'Year First Learned': 2022,
      'Years of Experience': 3,
      projectCount: 0
   },
   {
      name: 'Tableau',
      url: 'https://www.tableau.com',
      icon: <SiTableau />,
      category: 'Data Analytics',
      one_liner: 'Data visualization platform for business intelligence.',
      description:
         'Tableau enables users to create interactive and shareable dashboards, helping organizations analyze and interpret complex data sets visually.',
      'Year First Learned': 2020,
      'Years of Experience': 5,
      projectCount: 0
   },
   {
      name: 'Jira',
      url: 'https://www.atlassian.com/software/jira',
      icon: <SiJira />,
      category: 'Productivity',
      one_liner: 'Agile project management and issue tracking software.',
      description:
         'Jira, developed by Atlassian, provides tools for software development teams to plan, track, and release projects using Agile methodologies.',
      'Year First Learned': 2019,
      'Years of Experience': 6,
      projectCount: 0
   },
   {
      name: 'Confluence',
      url: 'https://www.atlassian.com/software/confluence',
      icon: <SiConfluence />,
      category: 'Productivity',
      one_liner: 'Team collaboration tool for documentation and knowledge sharing.',
      description:
         'Confluence allows teams to create, share, and organize content in a structured workspace, improving productivity and knowledge management.',
      'Year First Learned': 2019,
      'Years of Experience': 6,
      projectCount: 0
   },
   {
      name: 'Lucidchart',
      url: 'https://www.lucidchart.com',
      icon: <SiLucid />,
      category: 'Design',
      one_liner: 'Cloud-based diagramming tool for visualizing ideas and processes.',
      description:
         'Lucidchart provides an intuitive platform for creating flowcharts, wireframes, and diagrams to enhance communication and workflow efficiency.',
      'Year First Learned': 2019,
      'Years of Experience': 6,
      projectCount: 0
   },
   {
      name: 'Figma',
      url: 'https://www.figma.com',
      icon: <SiFigma />,
      category: 'Design',
      one_liner: 'Collaborative design tool for UI/UX prototyping and wireframing.',
      description:
         'Figma allows teams to design, prototype, and collaborate on user interfaces in real-time, making it a powerful tool for web and mobile design.',
      'Year First Learned': 2024,
      'Years of Experience': 1,
      projectCount: 0
   },
   {
      name: 'Salesforce',
      url: 'https://www.salesforce.com',
      icon: <SiSalesforce />,
      category: 'CRM',
      one_liner: 'Leading customer relationship management (CRM) platform.',
      description:
         'Salesforce provides cloud-based CRM solutions that help businesses manage sales, customer service, marketing, and analytics.',
      'Year First Learned': 2019,
      'Years of Experience': 6,
      projectCount: 0
   },
   {
      name: 'Trello',
      url: 'https://trello.com',
      icon: <SiTrello />,
      category: 'Productivity',
      one_liner: 'Visual task management tool for organizing projects.',
      description:
         'Trello uses boards, lists, and cards to help teams and individuals track progress, collaborate, and manage workflows with ease.',
      'Year First Learned': 2021,
      'Years of Experience': 4,
      projectCount: 0
   },
   {
      name: 'Looker Studio',
      url: 'https://lookerstudio.google.com',
      icon: <SiLooker />,
      category: 'Data Analytics',
      one_liner: 'Google-powered BI tool for creating interactive dashboards.',
      description:
         'Looker Studio connects to various data sources, enabling users to visualize and share insights through customizable reports and dashboards.',
      'Year First Learned': 2021,
      'Years of Experience': 4,
      projectCount: 0
   },
   {
      name: 'Java',
      url: 'https://www.java.com',
      icon: <FaJava />,
      category: 'Backend',
      one_liner:
         'Versatile object-oriented programming language used across industries.',
      description:
         'Java is a widely used, platform-independent language known for its security, scalability, and performance in web, mobile, and enterprise applications.',
      'Year First Learned': 2021,
      'Years of Experience': 4,
      projectCount: 0
   },
   {
      name: 'Shopify',
      url: 'https://www.shopify.com',
      icon: <SiShopify />,
      category: 'E-commerce',
      one_liner: 'All-in-one commerce platform for online and retail businesses.',
      description:
         'Shopify provides a flexible solution for entrepreneurs and businesses to build, manage, and scale online stores with integrated payments, inventory, and marketing tools.',
      'Year First Learned': 2016,
      'Years of Experience': 9,
      projectCount: 0
   },
   {
      name: 'WordPress',
      url: 'https://wordpress.org',
      icon: <SiWordpress />,
      category: 'Web Development',
      one_liner: 'Popular CMS for building and managing websites and blogs.',
      description:
         'WordPress powers a vast majority of websites, offering customizable themes, plugins, and an intuitive content management system for both beginners and developers.',
      'Year First Learned': 2013,
      'Years of Experience': 12,
      projectCount: 0
   },
   {
      name: 'Squarespace',
      url: 'https://www.squarespace.com',
      icon: <SiSquarespace />,
      category: 'Web Development',
      one_liner: 'Website-building platform for entrepreneurs and creatives.',
      description:
         'Squarespace provides elegant templates, built-in SEO, and e-commerce tools, making it easy for users to create and manage professional websites without coding.',
      'Year First Learned': 2017,
      'Years of Experience': 8,
      projectCount: 0
   },
   {
      name: 'Axios',
      url: 'https://axios-http.com/',
      icon: <SiAxios />,
      category: 'Backend',
      one_liner: 'Promise-based HTTP client for JavaScript',
      description:
         'Axios simplifies making HTTP requests in JavaScript applications, supporting request cancellation, interceptors, and automatic transformation of response data.',
      'Year First Learned': 2018,
      'Years of Experience': 7,
      projectCount: 0
   },
   {
      name: 'Express',
      url: 'https://expressjs.com/',
      icon: <SiExpress />,
      category: 'Backend',
      one_liner: 'Minimal and flexible Node.js web framework',
      description:
         'Express.js is a fast, lightweight web framework for Node.js, providing routing, middleware, and HTTP utilities for building web applications and APIs.',
      'Year First Learned': 2018,
      'Years of Experience': 7,
      projectCount: 0
   },
   {
      name: 'Nodemon',
      url: 'https://nodemon.io/',
      icon: <SiNodemon />,
      category: 'DevOps',
      one_liner: 'Auto-restart utility for Node.js applications',
      description:
         'Nodemon monitors files and automatically restarts the server when changes are detected, improving developer efficiency.',
      'Year First Learned': 2019,
      'Years of Experience': 6,
      projectCount: 0
   },
   {
      name: 'Passport-JWT',
      url: 'http://www.passportjs.org/packages/passport-jwt/',
      icon: <SiPassport />,
      category: 'Security',
      one_liner: 'Authentication middleware for JWT in Node.js',
      description:
         'Passport-JWT enables authentication using JSON Web Tokens (JWTs) in Node.js applications, commonly used in API authentication.',
      'Year First Learned': 2019,
      'Years of Experience': 6,
      projectCount: 0
   },
   {
      name: 'Cheerio',
      url: 'https://cheerio.js.org/',
      icon: <SiCheerio />,
      category: 'Web Scraping',
      one_liner: 'Fast, flexible, and lean implementation of jQuery for Node.js',
      description:
         'Cheerio is a lightweight HTML parser for Node.js, allowing developers to scrape and manipulate web pages efficiently.',
      'Year First Learned': 2019,
      'Years of Experience': 6,
      projectCount: 0
   },
   {
      name: 'Sequelize',
      url: 'https://sequelize.org/',
      icon: <SiSequelize />,
      category: 'Database',
      one_liner: 'Promise-based ORM for Node.js',
      description:
         'Sequelize is a feature-rich ORM for SQL databases, supporting models, migrations, and advanced querying in JavaScript applications.',
      'Year First Learned': 2018,
      'Years of Experience': 7,
      projectCount: 0
   },
   {
      name: 'Stripe',
      url: 'https://stripe.com/',
      icon: <SiStripe />,
      category: 'Payments',
      one_liner: 'Online payment processing for businesses',
      description:
         'Stripe is a powerful API-driven payment gateway that enables businesses to accept and manage online transactions with ease.',
      'Year First Learned': 2019,
      'Years of Experience': 6,
      projectCount: 0
   },
   {
      name: 'Redux',
      url: 'https://redux.js.org/',
      icon: <SiRedux />,
      category: 'Frontend',
      one_liner: 'Predictable state management for JavaScript apps',
      description:
         'Redux provides a centralized state management solution, ensuring consistent application behavior in complex React and JavaScript applications.',
      'Year First Learned': 2019,
      'Years of Experience': 6,
      projectCount: 0
   },
   {
      name: 'React Router',
      url: 'https://reactrouter.com/',
      icon: <SiReactrouter />,
      category: 'Frontend',
      one_liner: 'Declarative routing for React applications',
      description:
         'React Router enables dynamic client-side routing in React applications, providing seamless navigation and component-based route handling.',
      'Year First Learned': 2018,
      'Years of Experience': 7,
      projectCount: 0
   },
   {
      name: 'Handlebars',
      url: 'https://handlebarsjs.com/',
      icon: <SiHandlebarsdotjs />,
      category: 'Frontend',
      one_liner: 'Minimal templating engine for JavaScript',
      description:
         'Handlebars is a logic-less templating engine that enables developers to separate UI and logic, simplifying dynamic HTML rendering.',
      'Year First Learned': 2018,
      'Years of Experience': 7,
      projectCount: 0
   },
   {
      name: 'Bootstrap',
      url: 'https://getbootstrap.com/',
      icon: <SiBootstrap />,
      category: 'Frontend',
      one_liner: 'Popular CSS framework for responsive design',
      description:
         'Bootstrap provides a mobile-first framework with pre-designed UI components, making web development faster and more efficient.',
      'Year First Learned': 2018,
      'Years of Experience': 7,
      projectCount: 0
   },
   {
      name: 'React-Bootstrap',
      url: 'https://getbootstrap.com/',
      icon: <SiReactbootstrap />,
      category: 'Frontend',
      one_liner: 'Popular CSS framework for responsive design in React',
      description:
         'Bootstrap provides a mobile-first framework with pre-designed UI components, making web development faster and more efficient.',
      'Year First Learned': 2018,
      'Years of Experience': 7,
      projectCount: 0
   },
   {
      name: 'Google-Maps-API',
      url: 'https://developers.google.com/maps',
      icon: <SiGooglemaps />,
      category: 'API',
      one_liner: 'Geolocation and mapping services for web and mobile',
      description:
         'The Google Maps API enables developers to embed interactive maps, geocoding, and location-based services in applications.',
      'Year First Learned': 2018,
      'Years of Experience': 7,
      projectCount: 0
   },
   {
      name: 'Vite',
      url: 'https://vitejs.dev/',
      icon: <SiVite />,
      category: 'Frontend',
      one_liner: 'Next-generation frontend build tool',
      description:
         'Vite is a fast, modern build tool for web development, offering instant server start, optimized bundling, and hot module replacement.',
      'Year First Learned': 2023,
      'Years of Experience': 2,
      projectCount: 0
   },
   {
      name: 'Ethereum',
      url: 'https://ethereum.org/',
      icon: <SiEthereum />,
      category: 'Blockchain',
      one_liner: 'Open-source, decentralized blockchain platform',
      description:
         'Ethereum enables the creation of smart contracts and decentralized applications (dApps) using blockchain technology.',
      'Year First Learned': 2021,
      'Years of Experience': 4,
      projectCount: 0
   },
   {
      name: 'Mocha',
      url: 'https://mochajs.org/',
      icon: <SiMocha />,
      category: 'Testing',
      one_liner: 'Feature-rich JavaScript test framework',
      description:
         'Mocha is a flexible testing framework for JavaScript applications, supporting asynchronous testing, test coverage, and custom reporters.',
      'Year First Learned': 2020,
      'Years of Experience': 5,
      projectCount: 0
   },
   {
      name: 'Spotify API',
      url: 'https://developer.spotify.com/documentation/web-api/',
      icon: <SiSpotify />,
      category: 'API',
      one_liner: 'Music streaming API for developers',
      description:
         'The Spotify API allows developers to access music metadata, playlists, and streaming capabilities for integration into applications.',
      'Year First Learned': 2023,
      'Years of Experience': 2,
      projectCount: 0
   },
   {
      name: 'jQuery',
      url: 'https://jquery.com/',
      icon: <SiJquery />,
      category: 'Frontend',
      one_liner: 'JavaScript library for simplifying DOM manipulation',
      description:
         'jQuery simplifies event handling, animations, and AJAX requests, providing cross-browser compatibility for web applications.',
      'Year First Learned': 2018,
      'Years of Experience': 7,
      projectCount: 0
   },
   {
      name: 'NextJS',
      url: 'https://jquery.com/',
      icon: <SiNextdotjs />,
      category: 'Frontend',
      one_liner: 'React framework for production-ready web apps',
      description:
         'Next.js is a powerful React framework that enables server-side rendering, static site generation, and API routes, making it ideal for fast and scalable web applications.',
      'Year First Learned': 2022,
      'Years of Experience': 3,
      projectCount: 0
   }
];
