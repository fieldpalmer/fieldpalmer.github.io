import React from "react";
import { Button } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';
import "./Contact.css";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "gfieldpalmer@gmail.com",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "mailto:gfieldpalmer@gmail.com",
  },
  {
    name: "TELEGRAM:",
    info: "@fieldpalmer",
    icon: <BsTelegram className="contact-icon" />,
    url: "https://t.me/fieldpalmer",
  },
  {
    name: "GitHub:",
    info: "@fieldpalmer",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/fieldpalmer",
  },
  {
    name: "LOCATION & ZONE:",
    info: "Colorado, UTC-7",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "https://www.timeanddate.com/time/zone/usa/denver",
  },
];

const Contact = () => {
  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">Contact Me</p>
        <p className="text">if you have any questions or want to work together</p>
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank" rel="noreferrer">
              <div className="contact-section">
                  {contact.icon}
                  <div className="contact-text-div">
                    <p className="contact-title">{contact.name}</p>
                    <p className="contact-details">{contact.info}</p>
                  </div>
              </div>
            </a>
          )
        })}
      </div>

      {/* <div className="button-container">
        <a href="mailto:contactme@tijan.dev">
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            Contact Me
          </Button>
        </a>
      </div> */}
    </div>
  )
}

export default Contact;