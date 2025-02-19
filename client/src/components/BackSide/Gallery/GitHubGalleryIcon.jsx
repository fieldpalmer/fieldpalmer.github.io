import React, { useState } from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import TooltipLink from '../../TooltipLink';
import TooltipSkill from '../../TooltipSkill';
import { Row, Col } from 'react-bootstrap';
import GalleryModal from './GalleryModal';
import { skills } from '../../../assets/skills';

export default function GitHubGalleryIcon({
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
            className='gallery-icon-view'
            style={{ backgroundImage: `url(${socialImage})` }}
            onClick={() => setShowModal(true)}
         >
            <Col className='gallery-overlay'>
               <small>{name}</small>
               <hr className='my-0 py-0 mx-1' />

               {topics.split(', ').map((skill, index) => (
                  <TooltipSkill
                     tip={skill}
                     id={skill + '-tooltip-' + index}
                     icon={findSkillIcon(skill, skills)}
                  />
               ))}

               <div>
                  {repoUrl && (
                     <TooltipLink
                        link={repoUrl}
                        className='gallery-link'
                        tip='Repo Link'
                        id='gh-tooltip'
                        icon={<FaGithub />}
                     />
                  )}
                  {homepage && (
                     <TooltipLink
                        link={homepage}
                        className='gallery-link'
                        tip='Live Demo'
                        id='homepage-tooltip'
                        icon={<FaGlobe />}
                     />
                  )}
               </div>
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
