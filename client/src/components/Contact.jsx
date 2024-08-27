import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import IconsList from './IconsList';

export default function Contact() {
   return (
      <Row>
         <Col sm={12} className='mx-2'>
            <h4>Reach out!</h4>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, totam
               quam? Omnis illo optio molestiae. Perspiciatis reprehenderit, unde eos
               optio placeat eaque voluptatibus quas, sed quidem excepturi ab
               necessitatibus possimus.
            </p>
            <hr />
            <IconsList />
            {/* <Form>
               <Form.Group>
                  <Form.Control type='text' placeholder='Enter your name' />
               </Form.Group>

               <Form.Group>
                  <Form.Control type='number' placeholder='Write your message' />
               </Form.Group>
               <Button className='btn btn-block' type='submit'>
                  Send
               </Button>
            </Form> */}
         </Col>
      </Row>
   );
}
