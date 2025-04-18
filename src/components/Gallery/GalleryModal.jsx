import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// import MarkdownView from 'react-showdown';
import { skills } from '../../assets/api/skills';
import './gallery.css';

export default function GalleryModal({
     name,
     description,
     size,
     topics,
     openIssues,
     lastPush,
     homepage,
     repoUrl,
     socialImage,
     showModal,
     // setShowModal,
     handleClose
}) {
     const ToolTipSkill = ({ className, tip, icon }) => {
          return (
               <span className={className} title={tip}>
                    {icon}&nbsp;
               </span>
          );
     };
     const findSkillIcon = (skillName, skills) => {
          const skill = skills.find(
               (s) => s.name.replace(/[()-. ]/g, '').toLowerCase() === skillName.replace(/[()-_. ]/g, '').toLowerCase()
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
                    <Button variant='primary' href={homepage} target='_blank' rel='noopener noreferrer'>
                         View Demo
                    </Button>
                    <Button variant='primary' href={repoUrl} target='_blank' rel='noopener noreferrer'>
                         View Repo
                    </Button>
               </Modal.Footer>
          </Modal>
     );
}
