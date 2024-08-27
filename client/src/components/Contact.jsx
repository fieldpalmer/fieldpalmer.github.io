import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import IconsList from './IconsList';

export default function Contact() {
   return (
      <Row>
         <Col sm={12} className='mx-2'>
            <p>
               I’m always excited to connect with fellow professionals, potential
               collaborators, and those interested in my work. Whether you have a
               project in mind, want to discuss an opportunity, or simply want to say
               hello, feel free to reach out. I’ll get back to you as soon as possible!
            </p>
            <hr />
            <IconsList className='mb-0' />
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
