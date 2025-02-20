import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import TooltipSkill from '../../TooltipSkill';
import GalleryModal from './GalleryModal';
import { skills } from '../../../assets/skills';

export default function GitHubGalleryCard({
   index,
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
               <code className='mt-1 d-none d-md-block'>{name}</code>
               <p className='project-desc d-none d-md-block small mb-0'>
                  {description}
               </p>
               <em className='my-0 d-md-none'>
                  project_00{JSON.stringify(index + 1)}
                  <br />
               </em>

               <span className='px-1'>
                  {topics
                     .split(', ')
                     .slice(0, 3)
                     .map((skill, index) => (
                        <TooltipSkill
                           key={index}
                           tip={skill}
                           id={skill + '-tooltip-' + index}
                           icon={findSkillIcon(skill, skills)}
                        />
                     ))}
                  {topics.split(', ').length > 3 && (
                     <span style={{ fontSize: '0.7rem' }}>
                        +{topics.split(', ').length - 3} more
                     </span>
                  )}
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
