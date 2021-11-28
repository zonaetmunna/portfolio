import React, { useRef } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';


const Contact = () => {
     const form = useRef();
     const sendEmail = (e) => {
          e.preventDefault();

          // service_1317448

          emailjs.sendForm('service_1317448', 'template_vd01ols', form.current, 'user_wdIIPNgQClF1IL8gHS20T')
               .then((result) => {
                    console.log(result.text);
               }, (error) => {
                    console.log(error.text);
               });
          e.target.reset();
     };
     return (
          <div style={{ marginTop: '20px' }}>
               <Container>
                    <Row className="d-flex justify-center align-items-center shadow p-5">
                         <Col sm={12} md={4}>
                              <h2>Contact me</h2>
                              <h5>Please any question or any comment please </h5>
                         </Col>
                         <Col sm={12} md={8}>
                              <Form onSubmit={sendEmail} ref={form}>
                                   <Form.Control className="w-75 m-2" name="user_name" type="text" placeholder="user name " />

                                   <Form.Control className="w-75 m-2" type="email" name="user_email" placeholder="your email" />
                                   <Form.Control className="w-75 m-2" name="message" placeholder="comment" as="textarea" rows={3} />
                                   <Button className="m-2" variant="primary" type="submit" value="Send">submit</Button>{' '}

                              </Form>
                         </Col>
                    </Row>
               </Container>

          </div >
     );
};

export default Contact;