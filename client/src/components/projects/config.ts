import { getSkill, Skill } from "../skills/config"
import Portfolio from "./../../images/portfolio-sg.png";
import LandingPage from "./../../images/pwa-sg.png";
import Shazamify from "./../../images/shazamify-sg.png";
import Dashboard from "./../../images/dashboard-sg.png";

export type Project = {
  name: string,
  description: string,
  image: any,
  url: string,
  github: string,
  technologies: Skill[],
}

export const projects: Project[] = [
  {
    name: "Portfolio",
    description: "Developer portfolio showing my blockchain projects, skillset and certificates.",
    image: Portfolio,
    url: "https://tijan.dev/",
    github: "https://github.com/0xTijan/portfolio",
    technologies: getSkill(["react", "typescript", "html", "css", "git", "npm"])
  },
  {
    name: "Business Landing Page",
    description: "A fully responsive web app built with React and Tailwind to highlight a business or product.",
    image: LandingPage,
    url: "https://pwawebapp.netlify.app/",
    github: "https://github.com/fieldpalmer/responsive-web-app",
    technologies: getSkill(["react", "tailwind", "nodejs", "netlify"])
  },
  {
    name: "Music Streaming App",
    description: "Users can stream free clips of thousands of songs thanks to ShazamCore API.",
    image: Shazamify,
    url: "https://shazamify.netlify.app/",
    github: "https://github.com/fieldpalmer/social-music-app",
    technologies: getSkill(["react", "javascript", "netlify", "tailwind", "git", "npm"])
  },
  {
    name: "Data Dashboard",
    description: "React and Syncfusion allow us to fluidly display data visualizations.",
    image: Dashboard,
    url: "https://datadashdemo.web.app/",
    github: "https://github.com/fieldpalmer/data-dashboard",
    technologies: getSkill(["react", "tailwind", "javascript", "firebase", "git", "npm"])
  },
  // {
  //   name: "AWS Amplify",
  //   description: "Shows on-chain stats off user's address.",
  //   image: Portfolio,
  //   url: "https://github.com/0xTijan/mobile-wallet",
  //   github: "https://github.com/0xTijan/mobile-wallet",
  //   technologies: getSkill(["react native", "javascript", "moralis", "css", "npm"])
  // },
  // {
  //   name: "Dating App",
  //   description: "Multiplayer Coin Flip game using smart contracts and chainlink VRF to determine a winner in decentralized way.",
  //   image: Portfolio,
  //   url: "https://projects.tijan.dev/coin-flip",
  //   github: "https://github.com/0xTijan/coin-flip",
  //   technologies: getSkill(["react", "solidity", "hardhat", "typescript", "chainlink", "moralis"])
  // },
  // {
  //   name: "Online Checkout",
  //   description: "Funny blockchain game that prevents you to panic sell your cryptos by locking them in smart contract.",
  //   image: Portfolio,
  //   url: "https://projects.tijan.dev/diamond-hands",
  //   github: "https://github.com/0xTijan/diamond-hands",
  //   technologies: getSkill(["solidity", "hardhat", "react", "javascript", "moralis"])
  // },
  // {
  //   name: "Social Network",
  //   description: "Shows on-chain stats off user's address. User can add personal contacts for easy assets transfer.",
  //   image: Portfolio,
  //   url: "https://github.com/0xTijan/mobile-wallet",
  //   github: "https://github.com/0xTijan/mobile-wallet",
  //   technologies: getSkill(["react native", "javascript", "moralis", "css", "npm"])
  // },
]