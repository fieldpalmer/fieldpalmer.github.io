import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { projects } from '../../assets/projects';
import { Link } from 'react-router-dom';
import { MdOutlineLink } from 'react-icons/md';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import { GoProjectSymlink } from 'react-icons/go';
import { LuExternalLink } from 'react-icons/lu';

export default function Gallery() {
   const GalleryCard = ({ name, description, image, url, github, technologies }) => {
      return (
         <Row>
            <Col xs={5}>
               <Image src={image} thumbnail />
            </Col>
            <Col xs={7} className='mx-0 px-0'>
               {/* <div className='gallery-card'> */}
               <strong>{name}</strong>
               <br />
               <a href={github} style={{ textDecoration: 'none' }}>
                  <FaGithub />
               </a>
               &nbsp;
               <a href={url} style={{ textDecoration: 'none' }}>
                  <LuExternalLink />
               </a>
               {/* &nbsp;|{technologies}  */}
               {/* <small>{url}</small> */}
               {/* </div> */}
            </Col>
         </Row>
      );
   };

   return (
      <div className='portfolio-container' id='gallery-container'>
         <Row>
            {projects.map((p, i) => {
               return (
                  <Col key={p.name + i} xs={12} md={6} className='mb-2'>
                     <GalleryCard
                        name={p.name}
                        description={p.description}
                        image={p.image}
                        url={p.url}
                        github={p.github}
                        technologies={p.technologies}
                     />
                  </Col>
               );
            })}
         </Row>
      </div>
   );
}
