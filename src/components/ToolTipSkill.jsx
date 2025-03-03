import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function ToolTipSkill({ className, tip, id, icon }) {
   return (
      <OverlayTrigger overlay={<Tooltip id={id}>{tip}</Tooltip>}>
         <span className={className}>{icon}&nbsp;</span>
      </OverlayTrigger>
   );
}
