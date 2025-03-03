import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ToolTipSkill from '../../ToolTipSkill';
import GalleryModal from './GalleryModal';
import { skills } from '../../../assets/api/skills';

export default function GalleryList({
   // index,
   name,
   description,
   dateCreated,
   visibility,
   size,
   language,
   topics,
   license,
   openIssues,
   lastPush,
   homepage,
   repoUrl,
   socialImage,
   readmePreview
}) {
   const [showModal, setShowModal] = useState(false);
   const handleClose = () => setShowModal(false);

   const findSkillIcon = (skillName, skills) => {
      const skill = skills.find(
         (s) =>
            s.name.replace(/[()-. ]/g, '').toLowerCase() ===
            skillName.replace(/[()-_. ]/g, '').toLowerCase()
      );
      return skill ? skill.icon : 'x';
   };

   return (
      <>
         <Row className='gallery-row-item' role='button' onClick={() => setShowModal(true)}>
            <Col xs={5} className='p-1'>
               <Image src={socialImage} className='gallery-image img-thumbnail' />
               {/* <img href={socialImage} className='gallery-image img-thumbnail' alt="social-image" /> */}
            </Col>
            <Col xs={7} className='px-0'>
               {/* <code className='mt-1 d-none d-md-block'>{name}</code> */}
               <code className='mt-1'>{name}</code>
               <br />
               <p className='project-desc d-none d-md-block small mb-0'>{description}</p>
               {/* <em className='my-0 d-md-none'>
                  project_00{JSON.stringify(index + 1)}
                  <br />
               </em> */}

               <span className='px-1'>
                  {topics.split(', ').map((skill, index) => (
                     <TooltipSkill
                        key={index}
                        tip={skill}
                        id={skill + '-tooltip-' + index}
                        icon={findSkillIcon(skill, skills)}
                     />
                  ))}
               </span>
            </Col>
         </Row>

         <GalleryModal
            name={name}
            description={description}
            dateCreate={dateCreated}
            visibility={visibility}
            size={size}
            language={language}
            topics={topics}
            license={license}
            openIssues={openIssues}
            lastPush={lastPush}
            homepage={homepage}
            repoUrl={repoUrl}
            socialImage={socialImage}
            readmePreview={readmePreview}
            showModal={showModal}
            setShowModal={setShowModal}
            handleClose={handleClose}
         />
      </>
   );
}
