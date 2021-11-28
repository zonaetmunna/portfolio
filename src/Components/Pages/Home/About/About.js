import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const About = () => {
     return (
          <div style={{ background: '#69F8EB' }}>
               <Container className="m-4 p-3">
                    <Row className="justify-center align-items-center">
                         <Col sm={12} md={6}>
                              <Image src="https://i.ibb.co/qrRhjtk/83024583.jpg" className="w-75" roundedCircle />
                         </Col>
                         <Col sm={12} md={6}>
                              <h2>About me</h2>
                              <h4>I am Zonaet </h4>
                              <h6>Front-end Developer</h6>
                              <p>Hi my name is md zonaet hossain .I am front-end ,React developer.and i am very passionate and dedicated to my work</p>
                              <p>with 6 month experience as a professional Front-end ,React developer </p>
                         </Col>
                    </Row>
               </Container>

          </div>
     );
};

export default About;