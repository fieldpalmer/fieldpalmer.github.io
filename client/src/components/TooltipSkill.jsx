import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function TooltipSkill({ id, children, skill }) {
   return (
      <OverlayTrigger overlay={<Tooltip id={id}>{skill}</Tooltip>}>
         <span>{children}</span>
      </OverlayTrigger>
   );
}
