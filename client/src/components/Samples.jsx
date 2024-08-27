import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function Samples() {
   const titles = ['Web Dev', 'Big Data', 'Systems'];
   const TitleTile = ({ title }) => (
      <Col sm={12} md={4}>
         <Card className='mb-2 border-light'>
            <Card.Body>
               <Card.Title>{title}</Card.Title>
            </Card.Body>
         </Card>
      </Col>
   );

   return (
      <Row className='text-center'>
         {titles.map((t, i) => {
            return <TitleTile title={t} />;
         })}
      </Row>
   );
}
