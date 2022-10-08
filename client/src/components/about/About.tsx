import React, { useState } from "react";
import { Heading, Text, Button, CloseButton } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowDown } from "react-icons/ai";
import { BsTelegram, BsChevronDown } from "react-icons/bs";
import { SiUpwork, SiFiverr } from "react-icons/si";
// import { FaDiscord  } from "react-icons/fa";
import avatar from "./../../images/hi.png";
import "./About.css";


const About = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const hide = () => setIsVisible(false);

  const getFontSize = () => {
    let width = window.innerWidth;
    if(width < 450) return "5rem";
    if(width < 1250) return "6rem";
    return "8rem";
  }

  const getAlertSize = () => {
    let width = window.innerWidth;
    if(width < 1275) return "md";
    return "lg";
  }

  const Alert = () => {
    if(isVisible) {
      return(
        <div className="alert">
          <Heading as="h3" size={getAlertSize()}>💻{"   "}<a href="mailto:gfieldpalmer@gmail.com" className="contact-link">Download Resume</a></Heading>
          <CloseButton size='lg' className="close-btn" onClick={() => hide()} />
        </div>
      )
    }else{
      return null
    }
  }

  return(
    <>
    <Alert />
    <div className="bg">
      <div className="about-wrapper">
        <div className="about-text">
          <div className="about-title">
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              Hello,
            </Heading>
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              I'm <span className="name">Field</span>.
            </Heading>
          </div>
          <div className="about-text-desc">
            <Text fontSize='3xl'>Passionate <span className="name">FULL STACK DEVELOPER</span> with over 3 years of experience in web development. Enthusiastic about fun, cool, efficient technology solutions.</Text>
          </div>

          <div className="icons">
            <a href="https://github.com/fieldpalmer" target="_blank" rel="noreferrer">
              <AiFillGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/fieldpalmer/" target="_blank"rel="noreferrer">
              <AiFillLinkedin className="icon" />
            </a>
            <a href="https://www.upwork.com/freelancers/~0138641f49fd7be560" target="_blank" rel="noreferrer">
              <SiUpwork className="icon" />
            </a>
            <a href="https://www.fiverr.com/gfpalmer" target="_blank" rel="noreferrer">
              <SiFiverr className="icon" />
            </a>
            <a href="https://t.me/fieldpalmer" target="_blank" rel="noreferrer">
              <BsTelegram className="icon" />
            </a>
          </div>
      
          <a className="innerLinks" href="mailto:gfieldpalmer@gmail.com">
            <Button size='lg' rightIcon={<AiOutlineArrowDown />} colorScheme="whatsapp" variant='outline'>
              SKILLS
            </Button>
          </a>
          <a className="innerLinks" href="mailto:gfieldpalmer@gmail.com">
            <Button size='lg' rightIcon={<AiOutlineArrowDown />} colorScheme="whatsapp" variant='outline'>
              DEMOS
            </Button>
          </a>
          <a className="innerLinks" href="mailto:gfieldpalmer@gmail.com">
            <Button size='lg' rightIcon={<AiOutlineArrowDown />} colorScheme="whatsapp" variant='outline'>
              CERTIFICATIONS
            </Button>
          </a>
          <a className="innerLinks" href="mailto:gfieldpalmer@gmail.com">
            <Button size='lg' rightIcon={<AiOutlineArrowDown />} colorScheme="whatsapp" variant='outline'>
              CONTACT
            </Button>
          </a>
        </div>
        <div className="about-avatar">
          <img src={avatar} className="avatar" alt="Field Bitmoji" />
        </div>
      </div>
      <div className="icon-wrapper">
        <div className="bottom-icon">
          <BsChevronDown />
        </div>
      </div>
    </div>
    </>
  )  
}

export default About;