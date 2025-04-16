import React from 'react';
// skill icons
// import { projects } from './projects';
import { TbBrandReactNative, TbSeo, TbUxCircle } from 'react-icons/tb';
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
     FaJava,
     FaSync,
     FaStore
} from 'react-icons/fa';
import { IoLogoFirebase, IoBarChartSharp } from 'react-icons/io5';
import { AiOutlineLayout } from 'react-icons/ai';
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
     SiNextdotjs,
     SiLangchain,
     SiPrisma,
     // SiAdobe,
     SiNodedotjs,
     SiMongoose,
     SiGooglecloud,
     SiGoogledocs,
     SiMapbox,
     SiExpo
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
          first_learned: 2014
     },
     {
          name: 'Expo',
          url: 'https://expo.dev/',
          icon: <SiExpo />,
          category: 'Frontend',
          one_liner: 'framework for building native mobile apps using React Native.',
          description:
               'Expo is a framework for building native mobile apps using React Native. It provides a range of tools and APIs for creating maps, geocoding, routing, and more, making it a popular choice for building location-based applications.'
     },
     {
          name: 'Mapbox',
          url: 'https://www.mapbox.com/',
          icon: <SiMapbox />,
          category: 'Frontend',
          one_liner: 'map API for building interactive maps.',
          description:
               'Mapbox is a platform for building custom maps and navigation experiences. It provides a range of tools and APIs for creating maps, geocoding, routing, and more, making it a popular choice for building location-based applications.'
     },
     {
          name: 'Google Cloud Platform',
          url: 'https://cloud.google.com/',
          icon: <SiGooglecloud />,
          category: 'Cloud',
          one_liner: 'cloud computing platform for building scalable applications.',
          description:
               'Google Cloud is a comprehensive cloud computing platform that offers a wide range of services, including compute, storage, and networking. It provides a secure and scalable environment for building and hosting applications, data analytics, and machine learning.'
     },
     {
          name: 'Google Docs Api',
          url: 'https://docs.google.com/',
          icon: <SiGoogledocs />,
          category: 'Tools',
          one_liner: 'collaboration platform for document creation and sharing.',
          description:
               'Google Docs is a web-based word processor that allows users to create and edit documents online. It provides a collaborative environment for creating and sharing text, spreadsheets, and presentations.'
     },
     {
          name: 'TypeScript',
          url: 'https://www.typescriptlang.org/',
          icon: <SiTypescript />,
          category: 'Frontend',
          one_liner: 'typed superset of JavaScript that compiles to plain JS.',
          description:
               'TypeScript adds static typing, interfaces, and other powerful features to JavaScript, making large codebases more maintainable and reducing runtime errors. It’s fully compatible with existing JavaScript code and tooling.',
          first_learned: 2022
     },
     {
          name: 'React',
          url: 'https://reactjs.org/',
          icon: <FaReact />,
          category: 'Frontend',
          one_liner: 'library for building dynamic and reusable UI components.',
          description:
               'React is a popular front-end JavaScript library developed by Meta (Facebook) for building user interfaces. It uses a component-based approach and a virtual DOM for high performance and easy reusability, making it ideal for modern single-page applications.',
          first_learned: 2018
     },
     {
          name: 'Prisma',
          url: 'https://www.prisma.io/',
          icon: <SiPrisma />,
          category: 'Database',
          one_liner: 'ORM for Node.js and TypeScript',
          description:
               'Prisma is an open-source database toolkit that provides a modern, type-safe way to interact with databases. It supports multiple databases and integrates seamlessly with popular frameworks like React, Next.js, and Node.js.',
          first_learned: 2024
     },
     {
          name: 'Vue-js',
          url: 'https://vuejs.org/',
          icon: <FaVuejs />,
          category: 'Frontend',
          one_liner: 'progressive JavaScript framework for building user interfaces.',
          description:
               'Vue.js is known for its gentle learning curve and flexible architecture. It focuses on incrementally adopting features, making it easy to integrate into existing projects or scale up for complex single-page applications.',
          first_learned: 2018
     },
     {
          name: 'Angular',
          url: 'https://angular.dev',
          icon: <FaAngular />,
          category: 'Frontend',
          one_liner: 'robust framework for building large-scale, feature-rich web apps.',
          description:
               'Angular, maintained by Google, uses TypeScript and a structured approach to build enterprise-grade web applications. It offers two-way data binding, dependency injection, and a comprehensive CLI for streamlined development.',
          first_learned: 2018
     },
     {
          name: 'CSS',
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          icon: <FaCss3Alt />,
          category: 'Frontend',
          one_liner: 'styling language used to define the look and layout of web pages.',
          description:
               'Cascading Style Sheets (CSS) control the presentation of HTML elements, enabling developers to create visually appealing and responsive designs. It provides the ability to separate content from styling, improving maintainability.',
          first_learned: 2014
     },
     {
          name: 'HTML',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          icon: <SiHtml5 />,
          category: 'Frontend',
          one_liner: 'standard markup language for structuring web content.',
          description:
               'HyperText Markup Language (HTML) is the foundation of all websites, defining the structure and content of web pages. It works hand-in-hand with CSS and JavaScript to deliver rich user experiences.',
          first_learned: 2014
     },
     {
          name: 'Tailwind',
          url: 'https://tailwindcss.com/',
          icon: <SiTailwindcss />,
          category: 'Frontend',
          one_liner: 'utility-first CSS framework for rapidly building custom UIs.',
          description:
               'Tailwind CSS provides low-level utility classes that let you build designs directly in your HTML. Its approach avoids the need for custom CSS, enabling faster development and consistent styling across projects.',
          first_learned: 2022
     },
     {
          name: 'React Native',
          url: 'https://reactnative.dev/',
          icon: <TbBrandReactNative />,
          category: 'Mobile',
          one_liner: 'framework for building native mobile apps using React.',
          description:
               'React Native extends the React library to iOS and Android development, letting you write native mobile applications using JavaScript and React components, while still accessing platform-specific APIs.',
          first_learned: 2020
     },
     {
          name: 'NodeJS',
          url: 'https://nodejs.org/en/',
          icon: <FaNodeJs />,
          category: 'Backend',
          one_liner: 'JavaScript runtime for building server-side and networking apps.',
          description:
               'Node.js uses the V8 JavaScript engine to execute code on the server, enabling developers to use a single language (JavaScript) for both client and server. Its event-driven, non-blocking I/O model excels at real-time applications.',
          first_learned: 2018
     },
     {
          name: 'Python',
          url: 'https://www.python.org/',
          icon: <FaPython />,
          category: 'Backend',
          one_liner: 'versatile language known for readability and a vast ecosystem.',
          description:
               'Python is a high-level, interpreted language favored for its simplicity and robust libraries. It’s used in web development, data science, AI, automation, and more, making it one of the most popular languages in the world.',
          first_learned: 2019
     },
     {
          name: 'Rust',
          url: 'https://www.rust-lang.org/',
          icon: <FaRust />,
          category: 'Backend',
          one_liner: 'memory-safe systems language that prioritizes performance and reliability.',
          description:
               'Rust ensures thread and memory safety without a garbage collector, making it ideal for systems programming, game engines, and performance-critical code. It aims to prevent entire classes of bugs at compile time.',
          first_learned: 2021
     },
     {
          name: 'MongoDB',
          url: 'https://www.mongodb.com/',
          icon: <SiMongodb />,
          category: 'Database',
          one_liner: 'NoSQL database designed for scalability and high performance.',
          description:
               'MongoDB stores data in flexible JSON-like documents, allowing schema evolution over time. It’s known for easy horizontal scaling and a powerful query language, making it popular for modern web and mobile applications.',
          first_learned: 2018
     },
     {
          name: 'GraphQL',
          url: 'https://graphql.org/',
          icon: <SiGraphql />,
          category: 'Backend',
          one_liner: 'query language for APIs that allows fetching exactly the data needed.',
          description:
               'GraphQL, developed by Facebook, provides a single endpoint to query or mutate data. Clients can request only the fields they need, reducing over-fetching and under-fetching commonly encountered with REST APIs.',
          first_learned: 2023
     },
     {
          name: 'Firebase',
          url: 'https://firebase.google.com/',
          icon: <IoLogoFirebase />,
          category: 'Database',
          one_liner: 'Google-backed platform offering serverless app development tools.',
          description:
               'Firebase provides real-time databases, authentication, hosting, and cloud functions, enabling developers to quickly build, deploy, and scale applications without managing their own infrastructure.',
          first_learned: 2018
     },
     {
          name: 'Postman',
          url: 'https://www.postman.com/',
          icon: <SiPostman />,
          category: 'Tools',
          one_liner: 'collaboration platform for API development and testing.',
          description:
               'Postman streamlines API workflows with features like request saving, automated testing, environment management, and team collaboration, making it a go-to tool for modern web development.',
          first_learned: 2018
     },
     {
          name: 'Google Apps Script',
          url: 'https://developers.google.com/apps-script',
          icon: <SiGoogleappsscript />,
          category: 'Tools',
          one_liner: 'cloud-based scripting language for extending Google Workspace apps.',
          description:
               'Built on JavaScript, Google Apps Script automates tasks across Gmail, Docs, Sheets, and more. It provides easy integration with Google services, letting you create custom workflows and add-ons.',
          first_learned: 2021
     },
     {
          name: 'AWS Amplify',
          url: 'https://aws.amazon.com/amplify/',
          icon: <SiAwsamplify />,
          category: 'Cloud',
          one_liner: 'set of tools to build, deploy, and host serverless web and mobile apps.',
          description:
               'AWS Amplify simplifies cloud-based development by providing authentication, storage, APIs, and hosting out-of-the-box. It integrates closely with AWS services to streamline full-stack development.',
          first_learned: 2022
     },
     {
          name: 'Linux',
          url: 'https://www.linux.org',
          icon: <SiLinux />,
          category: 'Cloud',
          one_liner: 'An open-source OS kernel powering servers, desktops, and embedded systems.',
          description:
               'Linux forms the backbone of much of the internet, offering stability, security, and flexibility. Its open-source nature fosters a vast community and a wide range of distributions for diverse needs.',
          first_learned: 2024
     },
     {
          name: 'Kubernetes',
          url: 'https://kubernetes.io',
          icon: <SiKubernetes />,
          category: 'Cloud',
          one_liner: 'container orchestration platform for automating app deployment and scaling.',
          description:
               'Kubernetes manages containerized applications across clusters of hosts. It provides features like load balancing, self-healing, and rolling updates, making it essential for cloud-native development.',
          first_learned: 2024
     },
     {
          name: 'Solidity',
          url: 'https://soliditylang.org/',
          icon: <SiSolidity />,
          category: 'Blockchain',
          one_liner: 'contract-oriented language for writing Ethereum-based smart contracts.',
          description:
               'Solidity compiles to EVM bytecode and allows developers to create decentralized applications (dApps) on the Ethereum network, handling transactions, tokens, and complex logic on the blockchain.',
          first_learned: 2021
     },
     {
          name: 'web3js',
          url: 'https://web3js.readthedocs.io/en/v1.7.4/',
          icon: <SiWeb3Dotjs />,
          category: 'Blockchain',
          one_liner: 'JavaScript library for interacting with the Ethereum blockchain.',
          description:
               'web3.js enables dApp developers to send transactions, read data, and execute smart contracts. It abstracts away low-level details, simplifying communication with Ethereum nodes.',
          first_learned: 2022
     },
     {
          name: 'IPFS',
          url: 'https://ipfs.io/',
          icon: <SiIpfs />,
          category: 'Blockchain',
          one_liner: 'peer-to-peer hypermedia protocol for storing and sharing data.',
          description:
               'The InterPlanetary File System (IPFS) uses a content-addressed approach to distribute data across a network of nodes. It aims to make the web faster, safer, and more open by eliminating centralized servers.',
          first_learned: 2020
     },
     {
          name: 'Netlify',
          url: 'https://netlify.com/',
          icon: <BiLogoNetlify />,
          category: 'DevOps',
          one_liner: 'platform for deploying and hosting static sites and serverless functions.',
          description:
               'Netlify simplifies continuous deployment and hosting for modern web projects. With features like form handling, split testing, and serverless functions, it’s a popular choice for JAMstack architectures.',
          first_learned: 2022
     },
     {
          name: 'Github',
          url: 'https://github.com/',
          icon: <FaGithub />,
          category: 'DevOps',
          one_liner: 'platform for version control and collaboration using Git.',
          description:
               'GitHub provides a web-based interface for hosting code repositories, enabling issue tracking, pull requests, and code reviews. It fosters open-source collaboration and is widely used in the developer community.',
          first_learned: 2018
     },
     {
          name: 'UX/UI Design',
          url: 'https://atomicdesign.bradfrost.com/table-of-contents/',
          icon: <TbUxCircle />,
          category: 'Design',
          one_liner: 'Crafting intuitive interfaces that enhance user satisfaction and usability.',
          description:
               'UX/UI Design focuses on understanding user needs and translating them into cohesive, visually appealing interfaces. It combines user research, wireframing, prototyping, and visual design principles.',
          first_learned: 2019
     },
     {
          name: 'Google Ads',
          url: 'https://ads.google.com/home/',
          icon: <SiGoogleads />,
          category: 'Marketing',
          one_liner: 'platform for creating and managing pay-per-click advertising campaigns.',
          description:
               'Google Ads helps businesses reach potential customers through targeted search, display, and video ads. Its robust analytics and bidding tools optimize ad spend and measure campaign performance.',
          first_learned: 2016
     },
     {
          name: 'Google Analytics',
          url: 'https://developers.google.com/analytics',
          icon: <SiGoogleanalytics />,
          category: 'Marketing',
          one_liner: 'web analytics service for tracking and reporting site traffic.',
          description:
               'Google Analytics collects data on user interactions, demographics, and behaviors, helping website owners make data-driven decisions. It provides insights into audience, acquisition, and user engagement metrics.',
          first_learned: 2016
     },
     {
          name: 'Snowflake',
          url: 'https://www.snowflake.com',
          icon: <SiSnowflake />,
          category: 'Database',
          one_liner: 'Cloud-based data warehouse for fast, scalable analytics.',
          description:
               'Snowflake provides a fully managed, high-performance data warehouse with automatic scaling, built-in security, and seamless data sharing capabilities.',
          first_learned: 2024
     },
     {
          name: 'Supabase',
          url: 'https://supabase.com',
          icon: <SiSupabase />,
          category: 'Database',
          one_liner: 'Open-source Firebase alternative with PostgreSQL.',
          description:
               'Supabase offers an easy-to-use backend with authentication, real-time databases, and serverless functions, leveraging PostgreSQL for scalable data storage.',
          first_learned: 2024
     },
     {
          name: 'PostgreSQL',
          url: 'https://www.postgresql.org',
          icon: <SiPostgresql />,
          category: 'Database',
          one_liner: 'Advanced open-source relational database known for extensibility.',
          description:
               'PostgreSQL is a powerful, object-relational database system with strong ACID compliance, advanced indexing, and extensibility through custom functions.',
          first_learned: 2022
     },
     {
          name: 'MySQL',
          url: 'https://www.mysql.com',
          icon: <SiMysql />,
          category: 'Database',
          one_liner: 'Widely used relational database for web applications.',
          description:
               'MySQL is an open-source relational database management system (RDBMS) known for its speed, reliability, and integration with popular web technologies.',
          first_learned: 2018
     },
     {
          name: 'SQLite',
          url: 'https://www.sqlite.org',
          icon: <SiSqlite />,
          category: 'Database',
          one_liner: 'Lightweight, self-contained database engine for local storage.',
          description:
               'SQLite is a serverless, file-based relational database that provides a simple and efficient solution for embedded applications and mobile development.',
          first_learned: 2022
     },
     {
          name: 'DynamoDB',
          url: 'https://aws.amazon.com/dynamodb',
          icon: <SiAmazondynamodb />,
          category: 'Database',
          one_liner: 'AWS-managed NoSQL database with high availability and scalability.',
          description:
               'DynamoDB is a fully managed NoSQL database service that offers single-digit millisecond performance, automatic scaling, and built-in security.',
          first_learned: 2022
     },
     {
          name: 'S3',
          url: 'https://aws.amazon.com/s3',
          icon: <SiAmazons3 />,
          category: 'Cloud',
          one_liner: 'Scalable object storage for secure file hosting and backups.',
          description:
               'Amazon S3 is an industry-leading cloud storage service that allows businesses to store, retrieve, and manage vast amounts of data with high durability.',
          first_learned: 2022
     },
     {
          name: 'Heroku',
          url: 'https://www.heroku.com',
          icon: <SiHeroku />,
          category: 'Cloud',
          one_liner: 'Platform-as-a-Service (PaaS) for deploying and managing applications.',
          description:
               'Heroku simplifies app deployment with a fully managed platform, supporting multiple programming languages and seamless scaling.',
          first_learned: 2018
     },
     {
          name: 'Docker',
          url: 'https://www.docker.com',
          icon: <SiDocker />,
          category: 'DevOps',
          one_liner: 'Containerization platform for building, shipping, and running applications.',
          description:
               'Docker packages applications and dependencies into lightweight, portable containers, ensuring consistency across different environments.',
          first_learned: 2022
     },
     {
          name: 'Jira',
          url: 'https://www.atlassian.com/software/jira',
          icon: <SiJira />,
          category: 'Productivity',
          one_liner: 'Agile project management and issue tracking software.',
          description:
               'Jira, developed by Atlassian, provides tools for software development teams to plan, track, and release projects using Agile methodologies.',
          first_learned: 2019
     },
     {
          name: 'Confluence',
          url: 'https://www.atlassian.com/software/confluence',
          icon: <SiConfluence />,
          category: 'Productivity',
          one_liner: 'Team collaboration tool for documentation and knowledge sharing.',
          description:
               'Confluence allows teams to create, share, and organize content in a structured workspace, improving productivity and knowledge management.',
          first_learned: 2019
     },
     {
          name: 'Lucidchart',
          url: 'https://www.lucidchart.com',
          icon: <SiLucid />,
          category: 'Design',
          one_liner: 'Cloud-based diagramming tool for visualizing ideas and processes.',
          description:
               'Lucidchart provides an intuitive platform for creating flowcharts, wireframes, and diagrams to enhance communication and workflow efficiency.',
          first_learned: 2019
     },
     {
          name: 'Figma',
          url: 'https://www.figma.com',
          icon: <SiFigma />,
          category: 'Design',
          one_liner: 'Collaborative design tool for UI/UX prototyping and wireframing.',
          description:
               'Figma allows teams to design, prototype, and collaborate on user interfaces in real-time, making it a powerful tool for web and mobile design.',
          first_learned: 2024
     },
     {
          name: 'Salesforce',
          url: 'https://www.salesforce.com',
          icon: <SiSalesforce />,
          category: 'CRM',
          one_liner: 'Leading customer relationship management (CRM) platform.',
          description:
               'Salesforce provides cloud-based CRM solutions that help businesses manage sales, customer service, marketing, and analytics.',
          first_learned: 2019
     },
     {
          name: 'Trello',
          url: 'https://trello.com',
          icon: <SiTrello />,
          category: 'Productivity',
          one_liner: 'Visual task management tool for organizing projects.',
          description:
               'Trello uses boards, lists, and cards to help teams and individuals track progress, collaborate, and manage workflows with ease.',
          first_learned: 2021
     },
     {
          name: 'Looker Studio',
          url: 'https://lookerstudio.google.com',
          icon: <SiLooker />,
          category: 'Data Analytics',
          one_liner: 'Google-powered BI tool for creating interactive dashboards.',
          description:
               'Looker Studio connects to various data sources, enabling users to visualize and share insights through customizable reports and dashboards.',
          first_learned: 2021
     },
     {
          name: 'Java',
          url: 'https://www.java.com',
          icon: <FaJava />,
          category: 'Backend',
          one_liner: 'Versatile object-oriented programming language used across industries.',
          description:
               'Java is a widely used, platform-independent language known for its security, scalability, and performance in web, mobile, and enterprise applications.',
          first_learned: 2021
     },
     {
          name: 'Shopify',
          url: 'https://www.shopify.com',
          icon: <SiShopify />,
          category: 'E-commerce',
          one_liner: 'All-in-one commerce platform for online and retail businesses.',
          description:
               'Shopify provides a flexible solution for entrepreneurs and businesses to build, manage, and scale online stores with integrated payments, inventory, and marketing tools.',
          first_learned: 2016
     },
     {
          name: 'WordPress',
          url: 'https://wordpress.org',
          icon: <SiWordpress />,
          category: 'Web Development',
          one_liner: 'Popular CMS for building and managing websites and blogs.',
          description:
               'WordPress powers a vast majority of websites, offering customizable themes, plugins, and an intuitive content management system for both beginners and developers.',
          first_learned: 2013
     },
     {
          name: 'Squarespace',
          url: 'https://www.squarespace.com',
          icon: <SiSquarespace />,
          category: 'Web Development',
          one_liner: 'Website-building platform for entrepreneurs and creatives.',
          description:
               'Squarespace provides elegant templates, built-in SEO, and e-commerce tools, making it easy for users to create and manage professional websites without coding.',
          first_learned: 2017
     },
     {
          name: 'Axios',
          url: 'https://axios-http.com/',
          icon: <SiAxios />,
          category: 'Backend',
          one_liner: 'Promise-based HTTP client for JavaScript',
          description:
               'Axios simplifies making HTTP requests in JavaScript applications, supporting request cancellation, interceptors, and automatic transformation of response data.',
          first_learned: 2018
     },
     {
          name: 'Express',
          url: 'https://expressjs.com/',
          icon: <SiExpress />,
          category: 'Backend',
          one_liner: 'Minimal and flexible Node.js web framework',
          description:
               'Express.js is a fast, lightweight web framework for Node.js, providing routing, middleware, and HTTP utilities for building web applications and APIs.',
          first_learned: 2018
     },
     {
          name: 'Nodemon',
          url: 'https://nodemon.io/',
          icon: <SiNodemon />,
          category: 'DevOps',
          one_liner: 'Auto-restart utility for Node.js applications',
          description:
               'Nodemon monitors files and automatically restarts the server when changes are detected, improving developer efficiency.',
          first_learned: 2019
     },
     {
          name: 'Passport-JWT',
          url: 'http://www.passportjs.org/packages/passport-jwt/',
          icon: <SiPassport />,
          category: 'Security',
          one_liner: 'Authentication middleware for JWT in Node.js',
          description:
               'Passport-JWT enables authentication using JSON Web Tokens (JWTs) in Node.js applications, commonly used in API authentication.',
          first_learned: 2019
     },
     {
          name: 'Cheerio',
          url: 'https://cheerio.js.org/',
          icon: <SiCheerio />,
          category: 'Web Scraping',
          one_liner: 'Fast, flexible, and lean implementation of jQuery for Node.js',
          description:
               'Cheerio is a lightweight HTML parser for Node.js, allowing developers to scrape and manipulate web pages efficiently.',
          first_learned: 2019
     },
     {
          name: 'Sequelize',
          url: 'https://sequelize.org/',
          icon: <SiSequelize />,
          category: 'Database',
          one_liner: 'Promise-based ORM for Node.js',
          description:
               'Sequelize is a feature-rich ORM for SQL databases, supporting models, migrations, and advanced querying in JavaScript applications.',
          first_learned: 2018
     },
     {
          name: 'Stripe',
          url: 'https://stripe.com/',
          icon: <SiStripe />,
          category: 'Payments',
          one_liner: 'Online payment processing for businesses',
          description:
               'Stripe is a powerful API-driven payment gateway that enables businesses to accept and manage online transactions with ease.',
          first_learned: 2019
     },
     {
          name: 'Redux',
          url: 'https://redux.js.org/',
          icon: <SiRedux />,
          category: 'Frontend',
          one_liner: 'Predictable state management for JavaScript apps',
          description:
               'Redux provides a centralized state management solution, ensuring consistent application behavior in complex React and JavaScript applications.',
          first_learned: 2019
     },
     {
          name: 'React Router',
          url: 'https://reactrouter.com/',
          icon: <SiReactrouter />,
          category: 'Frontend',
          one_liner: 'Declarative routing for React applications',
          description:
               'React Router enables dynamic client-side routing in React applications, providing seamless navigation and component-based route handling.',
          first_learned: 2018
     },
     {
          name: 'Handlebars',
          url: 'https://handlebarsjs.com/',
          icon: <SiHandlebarsdotjs />,
          category: 'Frontend',
          one_liner: 'Minimal templating engine for JavaScript',
          description:
               'Handlebars is a logic-less templating engine that enables developers to separate UI and logic, simplifying dynamic HTML rendering.',
          first_learned: 2018
     },
     {
          name: 'Bootstrap',
          url: 'https://getbootstrap.com/',
          icon: <SiBootstrap />,
          category: 'Frontend',
          one_liner: 'Popular CSS framework for responsive design',
          description:
               'Bootstrap provides a mobile-first framework with pre-designed UI components, making web development faster and more efficient.',
          first_learned: 2018
     },
     {
          name: 'React-Bootstrap',
          url: 'https://getbootstrap.com/',
          icon: <SiReactbootstrap />,
          category: 'Frontend',
          one_liner: 'Popular CSS framework for responsive design in React',
          description:
               'Bootstrap provides a mobile-first framework with pre-designed UI components, making web development faster and more efficient.',
          first_learned: 2018
     },
     {
          name: 'Google-Maps-API',
          url: 'https://developers.google.com/maps',
          icon: <SiGooglemaps />,
          category: 'API',
          one_liner: 'Geolocation and mapping services for web and mobile',
          description:
               'The Google Maps API enables developers to embed interactive maps, geocoding, and location-based services in applications.',
          first_learned: 2018
     },
     {
          name: 'Vite',
          url: 'https://vitejs.dev/',
          icon: <SiVite />,
          category: 'Frontend',
          one_liner: 'Next-generation frontend build tool',
          description:
               'Vite is a fast, modern build tool for web development, offering instant server start, optimized bundling, and hot module replacement.',
          first_learned: 2023
     },
     {
          name: 'Ethereum',
          url: 'https://ethereum.org/',
          icon: <SiEthereum />,
          category: 'Blockchain',
          one_liner: 'Open-source, decentralized blockchain platform',
          description:
               'Ethereum enables the creation of smart contracts and decentralized applications (dApps) using blockchain technology.',
          first_learned: 2021
     },
     {
          name: 'Mocha',
          url: 'https://mochajs.org/',
          icon: <SiMocha />,
          category: 'Testing',
          one_liner: 'Feature-rich JavaScript test framework',
          description:
               'Mocha is a flexible testing framework for JavaScript applications, supporting asynchronous testing, test coverage, and custom reporters.',
          first_learned: 2020
     },
     {
          name: 'Spotify API',
          url: 'https://developer.spotify.com/documentation/web-api/',
          icon: <SiSpotify />,
          category: 'API',
          one_liner: 'Music streaming API for developers',
          description:
               'The Spotify API allows developers to access music metadata, playlists, and streaming capabilities for integration into applications.',
          first_learned: 2023
     },
     {
          name: 'jQuery',
          url: 'https://jquery.com/',
          icon: <SiJquery />,
          category: 'Frontend',
          one_liner: 'JavaScript library for simplifying DOM manipulation',
          description:
               'jQuery simplifies event handling, animations, and AJAX requests, providing cross-browser compatibility for web applications.',
          first_learned: 2018
     },
     {
          name: 'NextJS',
          url: 'https://jquery.com/',
          icon: <SiNextdotjs />,
          category: 'Frontend',
          one_liner: 'React framework for production-ready web apps',
          description:
               'Next.js is a powerful React framework that enables server-side rendering, static site generation, and API routes, making it ideal for fast and scalable web applications.',
          first_learned: 2022
     },
     {
          name: 'Snowflake',
          url: 'https://www.snowflake.com',
          icon: <SiSnowflake />,
          category: 'Database',
          one_liner: 'Cloud-based data warehouse for fast, scalable analytics.',
          description:
               'Snowflake provides a fully managed, high-performance data warehouse with automatic scaling, built-in security, and seamless data sharing capabilities.',
          first_learned: 2024
     },
     {
          name: 'MongoDB',
          url: 'https://www.mongodb.com/',
          icon: <SiMongodb />,
          category: 'Database',
          one_liner: 'NoSQL database designed for scalability and high performance.',
          description:
               'MongoDB stores data in flexible JSON-like documents, allowing schema evolution over time. It’s known for easy horizontal scaling and a powerful query language, making it popular for modern web and mobile applications.',
          first_learned: 2018
     },
     {
          name: 'GraphQL',
          url: 'https://graphql.org/',
          icon: <SiGraphql />,
          category: 'Backend',
          one_liner: 'query language for APIs that allows fetching exactly the data needed.',
          description:
               'GraphQL, developed by Facebook, provides a single endpoint to query or mutate data. Clients can request only the fields they need, reducing over-fetching and under-fetching commonly encountered with REST APIs.',
          first_learned: 2023
     },
     {
          name: 'Lucidchart',
          url: 'https://www.lucidchart.com',
          icon: <SiLucid />,
          category: 'Design',
          one_liner: 'Cloud-based diagramming tool for visualizing ideas and processes.',
          description:
               'Lucidchart provides an intuitive platform for creating flowcharts, wireframes, and diagrams to enhance communication and workflow efficiency.',
          first_learned: 2019
     },
     {
          name: 'Figma',
          url: 'https://www.figma.com',
          icon: <SiFigma />,
          category: 'Design',
          one_liner: 'Collaborative design tool for UI/UX prototyping and wireframing.',
          description:
               'Figma allows teams to design, prototype, and collaborate on user interfaces in real-time, making it a powerful tool for web and mobile design.',
          first_learned: 2024
     },
     {
          name: 'Linux',
          url: 'https://www.linux.org',
          icon: <SiLinux />,
          category: 'Cloud',
          one_liner: 'An open-source OS kernel powering servers, desktops, and embedded systems.',
          description:
               'Linux forms the backbone of much of the internet, offering stability, security, and flexibility. Its open-source nature fosters a vast community and a wide range of distributions for diverse needs.',
          first_learned: 2024
     },
     {
          name: 'Google Apps Script',
          url: 'https://developers.google.com/apps-script',
          icon: <SiGoogleappsscript />,
          category: 'Tools',
          one_liner: 'cloud-based scripting language for extending Google Workspace apps.',
          description:
               'Built on JavaScript, Google Apps Script automates tasks across Gmail, Docs, Sheets, and more. It provides easy integration with Google services, letting you create custom workflows and add-ons.',
          first_learned: 2021
     },
     {
          name: 'Python',
          url: 'https://www.python.org/',
          icon: <FaPython />,
          category: 'Backend',
          one_liner: 'versatile language known for readability and a vast ecosystem.',
          description:
               'Python is a high-level, interpreted language favored for its simplicity and robust libraries. It’s used in web development, data science, AI, automation, and more, making it one of the most popular languages in the world.',
          first_learned: 2019
     },
     {
          name: 'Tableau',
          url: 'https://www.tableau.com',
          icon: <SiTableau />,
          category: 'Data Analytics',
          one_liner: 'Data visualization platform for business intelligence.',
          description:
               'Tableau enables users to create interactive and shareable dashboards, helping organizations analyze and interpret complex data sets visually.',
          first_learned: 2020
     },
     {
          name: 'Looker Studio',
          url: 'https://lookerstudio.google.com',
          icon: <SiLooker />,
          category: 'Data Analytics',
          one_liner: 'Google-powered BI tool for creating interactive dashboards.',
          description:
               'Looker Studio connects to various data sources, enabling users to visualize and share insights through customizable reports and dashboards.',
          first_learned: 2021
     },
     {
          name: 'AWS Lambda',
          url: 'https://aws.amazon.com/lambda',
          icon: <SiAwslambda />,
          category: 'Cloud',
          one_liner: 'Serverless compute service that runs code on demand.',
          description:
               'AWS Lambda executes code in response to events without provisioning or managing servers, enabling cost-effective and scalable cloud functions.',
          first_learned: 2022
     },
     {
          name: 'Smartsheet',
          url: 'https://www.smartsheet.com',
          icon: <GiCheckMark />,
          category: 'Productivity',
          one_liner: 'Collaborative work management platform for teams and automation.',
          description:
               'Smartsheet combines spreadsheets, automation, and project management tools to help organizations track, manage, and execute work efficiently.',
          first_learned: 2021
     },
     {
          name: 'NodeJS',
          url: 'https://nodejs.org/en/',
          icon: <FaNodeJs />,
          category: 'Backend',
          one_liner: 'JavaScript runtime for building server-side and networking apps.',
          description:
               'Node.js uses the V8 JavaScript engine to execute code on the server, enabling developers to use a single language (JavaScript) for both client and server. Its event-driven, non-blocking I/O model excels at real-time applications.',
          first_learned: 2018
     },
     {
          name: 'Express',
          url: 'https://expressjs.com/',
          icon: <SiExpress />,
          category: 'Backend',
          one_liner: 'Minimal and flexible Node.js web framework',
          description:
               'Express.js is a fast, lightweight web framework for Node.js, providing routing, middleware, and HTTP utilities for building web applications and APIs.',
          first_learned: 2018
     },
     {
          name: 'TypeScript',
          url: 'https://www.typescriptlang.org/',
          icon: <SiTypescript />,
          category: 'Frontend',
          one_liner: 'typed superset of JavaScript that compiles to plain JS.',
          description:
               'TypeScript adds static typing, interfaces, and other powerful features to JavaScript, making large codebases more maintainable and reducing runtime errors. It’s fully compatible with existing JavaScript code and tooling.',
          first_learned: 2022
     },
     {
          name: 'React',
          url: 'https://reactjs.org/',
          icon: <FaReact />,
          category: 'Frontend',
          one_liner: 'library for building dynamic and reusable UI components.',
          description:
               'React is a popular front-end JavaScript library developed by Meta (Facebook) for building user interfaces. It uses a component-based approach and a virtual DOM for high performance and easy reusability, making it ideal for modern single-page applications.',
          first_learned: 2018
     },
     {
          name: 'Vite',
          url: 'https://vitejs.dev/',
          icon: <SiVite />,
          category: 'Frontend',
          one_liner: 'Next-generation frontend build tool',
          description:
               'Vite is a fast, modern build tool for web development, offering instant server start, optimized bundling, and hot module replacement.',
          first_learned: 2023
     },
     {
          name: 'TailwindCSS',
          url: 'https://tailwindcss.com/',
          icon: <SiTailwindcss />,
          category: 'Frontend',
          one_liner: 'Utility-first CSS framework',
          description:
               'TailwindCSS is a utility-first CSS framework that allows developers to build custom designs quickly and efficiently.'
     },
     {
          name: 'LangChain',
          url: 'https://www.langchain.com/',
          icon: <SiLangchain />,
          category: 'Backend',
          one_liner: 'Framework for building LLM-based applications'
     },
     {
          name: 'Firebase',
          url: 'https://firebase.google.com/',
          icon: <IoLogoFirebase />,
          category: 'Database',
          one_liner: 'Google-backed platform offering serverless app development tools.',
          description:
               'Firebase provides real-time databases, authentication, hosting, and cloud functions, enabling developers to quickly build, deploy, and scale applications without managing their own infrastructure.',
          first_learned: 2018
     },
     {
          name: 'Bootstrap',
          url: 'https://getbootstrap.com/',
          icon: <SiBootstrap />,
          category: 'Frontend',
          one_liner: 'Popular CSS framework for responsive design',
          description:
               'Bootstrap provides a mobile-first framework with pre-designed UI components, making web development faster and more efficient.',
          first_learned: 2018
     },
     {
          name: 'React-Bootstrap',
          url: 'https://getbootstrap.com/',
          icon: <SiReactbootstrap />,
          category: 'Frontend',
          one_liner: 'Popular CSS framework for responsive design in React',
          description:
               'Bootstrap provides a mobile-first framework with pre-designed UI components, making web development faster and more efficient.',
          first_learned: 2018
     }
];

export const coreStack = [
     {
          name: 'NodeJS',
          url: 'https://nodejs.org/en/',
          icon: <FaNodeJs />,
          category: 'Backend',
          one_liner: 'JavaScript runtime for building server-side and networking apps.',
          description:
               'Node.js uses the V8 JavaScript engine to execute code on the server, enabling developers to use a single language (JavaScript) for both client and server. Its event-driven, non-blocking I/O model excels at real-time applications.',
          first_learned: 2018
     },
     // {
     //      name: 'Express',
     //      url: 'https://expressjs.com/',
     //      icon: <SiExpress />,
     //      category: 'Backend',
     //      one_liner: 'Minimal and flexible Node.js web framework',
     //      description:
     //           'Express.js is a fast, lightweight web framework for Node.js, providing routing, middleware, and HTTP utilities for building web applications and APIs.',
     //      first_learned: 2018
     // },
     {
          name: 'TypeScript',
          url: 'https://www.typescriptlang.org/',
          icon: <SiTypescript />,
          category: 'Frontend',
          one_liner: 'typed superset of JavaScript that compiles to plain JS.',
          description:
               'TypeScript adds static typing, interfaces, and other powerful features to JavaScript, making large codebases more maintainable and reducing runtime errors. It’s fully compatible with existing JavaScript code and tooling.',
          first_learned: 2022
     },
     {
          name: 'React',
          url: 'https://reactjs.org/',
          icon: <FaReact />,
          category: 'Frontend',
          one_liner: 'library for building dynamic and reusable UI components.',
          description:
               'React is a popular front-end JavaScript library developed by Meta (Facebook) for building user interfaces. It uses a component-based approach and a virtual DOM for high performance and easy reusability, making it ideal for modern single-page applications.',
          first_learned: 2018
     },
     // {
     //      name: 'Vite',
     //      url: 'https://vitejs.dev/',
     //      icon: <SiVite />,
     //      category: 'Frontend',
     //      one_liner: 'Next-generation frontend build tool',
     //      description:
     //           'Vite is a fast, modern build tool for web development, offering instant server start, optimized bundling, and hot module replacement.',
     //      first_learned: 2023
     // },
     {
          name: 'Firebase',
          url: 'https://firebase.google.com/',
          icon: <IoLogoFirebase />,
          category: 'Database',
          one_liner: 'Google-backed platform offering serverless app development tools.',
          description:
               'Firebase provides real-time databases, authentication, hosting, and cloud functions, enabling developers to quickly build, deploy, and scale applications without managing their own infrastructure.',
          first_learned: 2018
     }
     // {
     //      name: 'Bootstrap',
     //      url: 'https://getbootstrap.com/',
     //      icon: <SiBootstrap />,
     //      category: 'Frontend',
     //      one_liner: 'Popular CSS framework for responsive design',
     //      description:
     //           'Bootstrap provides a mobile-first framework with pre-designed UI components, making web development faster and more efficient.',
     //      first_learned: 2018
     // },
     // {
     //      name: 'React-Bootstrap',
     //      url: 'https://getbootstrap.com/',
     //      icon: <SiReactbootstrap />,
     //      category: 'Frontend',
     //      one_liner: 'Popular CSS framework for responsive design in React',
     //      description:
     //           'Bootstrap provides a mobile-first framework with pre-designed UI components, making web development faster and more efficient.',
     //      first_learned: 2018
     // }
];

export const dataTools = [
     {
          name: 'Google Apps Script',
          url: 'https://developers.google.com/apps-script',
          icon: <SiGoogleappsscript />,
          category: 'Tools',
          one_liner: 'cloud-based scripting language for extending Google Workspace apps.',
          description:
               'Built on JavaScript, Google Apps Script automates tasks across Gmail, Docs, Sheets, and more. It provides easy integration with Google services, letting you create custom workflows and add-ons.',
          first_learned: 2021
     },
     {
          name: 'Python',
          url: 'https://www.python.org/',
          icon: <FaPython />,
          category: 'Backend',
          one_liner: 'versatile language known for readability and a vast ecosystem.',
          description:
               'Python is a high-level, interpreted language favored for its simplicity and robust libraries. It’s used in web development, data science, AI, automation, and more, making it one of the most popular languages in the world.',
          first_learned: 2019
     },
     {
          name: 'Tableau',
          url: 'https://www.tableau.com',
          icon: <SiTableau />,
          category: 'Data Analytics',
          one_liner: 'Data visualization platform for business intelligence.',
          description:
               'Tableau enables users to create interactive and shareable dashboards, helping organizations analyze and interpret complex data sets visually.',
          first_learned: 2020
     },
     {
          name: 'Looker Studio',
          url: 'https://lookerstudio.google.com',
          icon: <SiLooker />,
          category: 'Data Analytics',
          one_liner: 'Google-powered BI tool for creating interactive dashboards.',
          description:
               'Looker Studio connects to various data sources, enabling users to visualize and share insights through customizable reports and dashboards.',
          first_learned: 2021
     }
     // {
     //      name: 'AWS Lambda',
     //      url: 'https://aws.amazon.com/lambda',
     //      icon: <SiAwslambda />,
     //      category: 'Cloud',
     //      one_liner: 'Serverless compute service that runs code on demand.',
     //      description:
     //           'AWS Lambda executes code in response to events without provisioning or managing servers, enabling cost-effective and scalable cloud functions.',
     //      first_learned: 2022
     // },
     // {
     //      name: 'Smartsheet',
     //      url: 'https://www.smartsheet.com',
     //      icon: <GiCheckMark />,
     //      category: 'Productivity',
     //      one_liner: 'Collaborative work management platform for teams and automation.',
     //      description:
     //           'Smartsheet combines spreadsheets, automation, and project management tools to help organizations track, manage, and execute work efficiently.',
     //      first_learned: 2021
     // }
];

export const otherSkills = [
     // {
     //      name: 'React Native',
     //      url: 'https://reactnative.dev/',
     //      icon: <TbBrandReactNative />,
     //      category: 'Mobile',
     //      one_liner: 'framework for building native mobile apps using React.',
     //      description:
     //           'React Native extends the React library to iOS and Android development, letting you write native mobile applications using JavaScript and React components, while still accessing platform-specific APIs.',
     //      first_learned: 2020
     // },
     {
          name: 'Snowflake',
          url: 'https://www.snowflake.com',
          icon: <SiSnowflake />,
          category: 'Database',
          one_liner: 'Cloud-based data warehouse for fast, scalable analytics.',
          description:
               'Snowflake provides a fully managed, high-performance data warehouse with automatic scaling, built-in security, and seamless data sharing capabilities.',
          first_learned: 2024
     },
     {
          name: 'MongoDB',
          url: 'https://www.mongodb.com/',
          icon: <SiMongodb />,
          category: 'Database',
          one_liner: 'NoSQL database designed for scalability and high performance.',
          description:
               'MongoDB stores data in flexible JSON-like documents, allowing schema evolution over time. It’s known for easy horizontal scaling and a powerful query language, making it popular for modern web and mobile applications.',
          first_learned: 2018
     },
     {
          name: 'GraphQL',
          url: 'https://graphql.org/',
          icon: <SiGraphql />,
          category: 'Backend',
          one_liner: 'query language for APIs that allows fetching exactly the data needed.',
          description:
               'GraphQL, developed by Facebook, provides a single endpoint to query or mutate data. Clients can request only the fields they need, reducing over-fetching and under-fetching commonly encountered with REST APIs.',
          first_learned: 2023
     },
     // {
     //      name: 'Lucidchart',
     //      url: 'https://www.lucidchart.com',
     //      icon: <SiLucid />,
     //      category: 'Design',
     //      one_liner: 'Cloud-based diagramming tool for visualizing ideas and processes.',
     //      description:
     //           'Lucidchart provides an intuitive platform for creating flowcharts, wireframes, and diagrams to enhance communication and workflow efficiency.',
     //      first_learned: 2019
     // },
     // {
     //      name: 'Figma',
     //      url: 'https://www.figma.com',
     //      icon: <SiFigma />,
     //      category: 'Design',
     //      one_liner: 'Collaborative design tool for UI/UX prototyping and wireframing.',
     //      description:
     //           'Figma allows teams to design, prototype, and collaborate on user interfaces in real-time, making it a powerful tool for web and mobile design.',
     //      first_learned: 2024
     // },
     {
          name: 'Linux',
          url: 'https://www.linux.org',
          icon: <SiLinux />,
          category: 'Cloud',
          one_liner: 'An open-source OS kernel powering servers, desktops, and embedded systems.',
          description:
               'Linux forms the backbone of much of the internet, offering stability, security, and flexibility. Its open-source nature fosters a vast community and a wide range of distributions for diverse needs.',
          first_learned: 2024
     }
];
