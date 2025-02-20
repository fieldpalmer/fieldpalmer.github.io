import React, { useState } from 'react';
import GalleryModal from './GalleryModal';
// import { skills } from '../../../assets/skills';

export default function GitHubGalleryIcon({
   index,
   name,
   description,
   visibility,
   size,
   language,
   topics,
   license,
   openIssues,
   lastPush,
   dateCreated,
   branches,
   commits,
   homepage,
   repoUrl,
   socialImage,
   readmePreview
}) {
   const [showModal, setShowModal] = useState(false);
   const handleClose = () => setShowModal(false);

   return (
      <>
         <div
            className='gallery-icon-view'
            style={{ background: `transparent` }}
            onClick={() => setShowModal(true)}
         >
            <div className='gallery-overlay'>
               {/* <small>{name}</small> */}
               <code className='px-1'>project_00{JSON.stringify(index + 1)}</code>
               <hr className='my-0 py-0 mx-1' />
               <span style={{ fontSize: '0.8rem' }}>
                  <small className='px-1'>
                     {new Date(dateCreated).toLocaleDateString('en-US', {
                        month: '2-digit',
                        year: 'numeric'
                     })}
                  </small>{' '}
                  -
                  <small className='px-1'>
                     {new Date(lastPush).toLocaleDateString('en-US', {
                        month: '2-digit',
                        year: 'numeric'
                     })}
                  </small>
                  <br />
                  <span className='px-1'>{'size: ' + size + 'KB'}</span>
               </span>
            </div>
         </div>

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
