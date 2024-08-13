import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
export default function Skills() {
   return (
      <h5>
         <ListGroup horizontal>
            <ListGroup.Item>
               <FaReact />
            </ListGroup.Item>
            <ListGroup.Item>
               <FaNodeJs />
            </ListGroup.Item>
            <ListGroup.Item>
               <FaPython />
            </ListGroup.Item>
            <ListGroup.Item>horizontally!</ListGroup.Item>
         </ListGroup>
      </h5>
   );
}
