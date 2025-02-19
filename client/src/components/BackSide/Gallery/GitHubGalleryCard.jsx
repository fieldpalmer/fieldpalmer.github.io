import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import TooltipLink from '../../TooltipLink';
import TooltipSkill from '../../TooltipSkill';
import GalleryModal from './GalleryModal';
import { skills } from '../../../assets/skills';

export default function GitHubGalleryCard({
   name,
   description,
   visibility,
   size,
   language,
   topics,
   license,
   openIssues,
   lastPush,
   branches,
   commits,
   homepage,
   repoUrl,
   socialImage,
   readmePreview
}) {
   const [showModal, setShowModal] = useState(false);
   const handleClose = () => setShowModal(false);

   const findSkillIcon = (skillName, skills) => {
      const skill = skills.find(
         (s) => s.name.toLowerCase() === skillName.toLowerCase()
      );
      return skill ? skill.icon : 'x';
   };
   return (
      <>
         <Row
            className='gallery-row-item'
            role='button'
            onClick={() => setShowModal(true)}
         >
            <Col xs={5} className='p-1'>
               <Image src={socialImage} className='gallery-image img-thumbnail' />
            </Col>
            <Col xs={7} className='px-0'>
               <h6 className='my-1'>{name}</h6>
               <p className='project-desc d-none d-md-block small mb-2'>
                  {description}
               </p>
               {topics.split(', ').map((skill, index) => (
                  <TooltipSkill
                     className={'gallery-skill'}
                     tip={skill}
                     id={skill + '-tooltip-' + index}
                     icon={findSkillIcon(skill, skills)}
                  />
               ))}
               {repoUrl && (
                  <TooltipLink
                     link={repoUrl}
                     className={'gallery-link'}
                     tip={'Repo Link'}
                     id={'gh-tooltip'}
                     icon={<FaGithub />}
                  />
               )}
               {homepage && (
                  <TooltipLink
                     link={homepage}
                     className={'gallery-link'}
                     tip={'Live Demo'}
                     id={'homepage-tooltip'}
                     icon={<FaGlobe />}
                  />
               )}
            </Col>
         </Row>

         <GalleryModal
            name={name}
            description={description}
            visibility={visibility}
            size={size}
            language={language}
            topics={topics}
            license={license}
            openIssues={openIssues}
            lastPush={lastPush}
            branches={branches}
            commits={commits}
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
