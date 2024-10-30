import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Gallery() {
   return (
      <CardGroup>
         <Card>
            <Card.Img variant='top' src='holder.js/100px160' />
            <Card.Body>
               <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Card.Footer>
               <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
         </Card>
         <Card>
            <Card.Img variant='top' src='holder.js/100px160' />
            <Card.Body>
               <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Card.Footer>
               <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
         </Card>
         <Card>
            <Card.Img variant='top' src='holder.js/100px160' />
            <Card.Body>
               <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Card.Footer>
               <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
         </Card>
      </CardGroup>
   );
}
