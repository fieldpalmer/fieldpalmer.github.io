export const GalleryCard = ({
   name,
   description,
   image,
   url,
   github,
   technologies
}) => {
   return (
      <div className='gallery-card'>
         {/* <img src={image} alt={`${name} logo`} className='gallery-card-image' /> */}
         <p className='gallery-card-title'>{name}</p>
         {/* <p className='gallery-card-description'>{description}</p> */}
         {/* <div className='gallery-card-links'>
             <a href={url} target='_blank' rel='noopener noreferrer'>
                Live Site
             </a>
             <a href={github} target='_blank' rel='noopener noreferrer'>
                GitHub
             </a>
          </div> */}
         {/* <ul className='gallery-card-technologies'>
             {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
             ))}
          </ul> */}
      </div>
   );
};
