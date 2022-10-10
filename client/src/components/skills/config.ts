import React from "./../../images/react-logo.png";
import HTML from "./../../images/html5-logo.png";
import CSS from "./../../images/css-logo.png";
import JS from "./../../images/js-logo.png";
import Solidity from "./../../images/solidity-logo.png";
import Gas from "./../../images/gas-logo.png"; 
import NPM from "./../../images/npm-logo.png";
import Git from "./../../images/git-logo.png";
import Firebase from "./../../images/firebase-logo.png";
import Web3 from "./../../images/web3js.png";
import Mongo from "./../../images/mongo.svg";
import Netlify from "./../../images/netlify-logo.png";
import IPFS from "./../../images/ipfs-logo.png";
import GraphQL from "./../../images/graphql-logo.png";
import Python from "./../../images/python-logo.png";
import Rust from "./../../images/rust-logo.png";
import NodeJS from "./../../images/nodej-js.png";
import Postman from "./../../images/postman-logo.png";
import Tailwind from "./../../images/tailwind-logo.png";

export type Skill = {
  name: string;
  img: any;
  url: string;
}

export const getSkill = (names: string[]) => {
  let toReturn: Skill[] = [];
  names.map((name: string) => {
    skills.map((skill: Skill) => {
      if(skill.name.toLowerCase() === name.toLowerCase()) {
        toReturn.push(skill);
      }
    });
  })
  return toReturn;
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: JS
  },
  // {
  //   name: "TypeScript",
  //   url: "https://www.typescriptlang.org/",
  //   img: TS
  // },
  {
    name: "NodeJS",
    url: "https://nodejs.org/en/",
    img: NodeJS
  },
  {
    name: "Firebase",
    url: "https://firebase.google.com/",
    img: Firebase
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    img: React
  },
  {
    name: "Postman",
    url: "https://www.postman.com/",
    img: Postman
  },
  {
    name: "Netlify",
    url: "https://netlify.com/",
    img: Netlify
  },
  {
    name: "Google Apps Script",
    url: "https://developers.google.com/apps-script",
    img: Gas
  },
  // {
  //   name: "Vue.js",
  //   url: "https://vuejs.org/",
  //   img: Vue
  // },
  {
    name: "web3js",
    url: "https://web3js.readthedocs.io/en/v1.7.4/",
    img: Web3
  },
  {
    name: "Solidity",
    url: "https://soliditylang.org/",
    img: Solidity
  },
  {
    name: "Rust",
    url: "https://www.rust-lang.org/",
    img: Rust
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    img: Mongo
  },
  {
    name: "GraphQL",
    url: "https://graphql.org/",
    img: GraphQL
  },
  {
    name: "Python",
    url: "https://www.python.org/",
    img: Python
  },
//   {
//     name: "IPFS",
//     url: "https://ipfs.io/",
//     img: IPFS
//   },
  {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: HTML
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: CSS
  },
  // {
  //   name: "React Native",
  //   url: "https://reactnative.dev/",
  //   img: Native
  // },
  {
    name: "NPM",
    url: "https://www.npmjs.com/",
    img: NPM
  },
  {
    name: "Tailwind",
    url: "https://tailwindcss.com/",
    img: Tailwind
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    img: Git
  },
]