import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pdf from '../../../../zonaet-hossain-resume-for-Frontend-developer.pdf';

const Banner = () => {
     return (
          <div id="hello">
               <Container>
                    <Row className="d-flex justify-center align-items-center">
                         <Col sm={12} md={6}>
                              <h2>Hello i am <span className="text-primary"> zonaet hossain</span></h2>
                              <h4 className="text-secondary">Front-end Developer</h4>
                              <h5>age :22</h5>
                              <h5>Phone : 01634501332</h5>
                              <h5>Email : zonaet.hossain.munna@gmail.com</h5>
                              <Button className="bg-dark"><Link className='text-decoration-none' to={pdf} target="_blank" download>Resume</Link></Button>
                         </Col>
                         <Col sm={12} md={6}>
                              <Image width="400px" className="w-75 mt-3" src="https://i.ibb.co/qrRhjtk/83024583.jpg" roundedCircle />
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default Banner;