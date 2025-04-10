import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// import MarkdownView from 'react-showdown';
import ToolTipSkill from '../../ToolTipSkill';
import { skills } from '../../../assets/api/skills';

export default function GalleryModal({
   name,
   description,
   // visibility,
   size,
   // language,
   topics,
   // license,
   openIssues,
   lastPush,
   homepage,
   repoUrl,
   socialImage,
   // readmePreview,
   showModal,
   // setShowModal,
   handleClose
}) {
   const findSkillIcon = (skillName, skills) => {
      const skill = skills.find(
         (s) =>
            s.name.replace(/[()-. ]/g, '').toLowerCase() ===
            skillName.replace(/[()-_. ]/g, '').toLowerCase()
      );
      return skill ? skill.icon : 'x';
   };

   return (
      <Modal show={showModal} onHide={handleClose} centered className='gallery-modal'>
         <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <strong>{description}</strong>
            <hr />
            <img src={socialImage} alt={name} className='img-fluid mb-3' />
            {/* <small>
               <MarkdownView markdown={readmePreview} />
            </small> */}
            <hr />
            <h1 className='gallery-modal-skill-icons'>
               {topics.split(', ').map((skill, index) => (
                  <ToolTipSkill
                     key={index}
                     tip={skill}
                     id={skill + '-tooltip-' + index}
                     icon={findSkillIcon(skill, skills)}
                  />
               ))}
            </h1>
            <hr />
            <ul>
               <li>Size: {size} KB</li>
               <li>Last Push: {new Date(lastPush).toLocaleDateString()}</li>
               <li>Open Issues: {openIssues}</li>
            </ul>
         </Modal.Body>
         <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
               Close
            </Button>
            {homepage ? (
               <Button variant='primary' href={homepage} target='_blank' rel='noopener noreferrer'>
                  View Project
               </Button>
            ) : (
               <Button variant='primary' href={repoUrl} target='_blank' rel='noopener noreferrer'>
                  View Project
               </Button>
            )}
         </Modal.Footer>
      </Modal>
   );
}
