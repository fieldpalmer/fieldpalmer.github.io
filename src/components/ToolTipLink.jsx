import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function ToolTipLink({ link, className, tip, id, icon }) {
   return (
      <OverlayTrigger overlay={<Tooltip id={id}>{tip}</Tooltip>}>
         <a className={className} href={link} target='_blank' rel='noopener noreferrer'>
            {icon}
            &nbsp;
         </a>
      </OverlayTrigger>
   );
}
