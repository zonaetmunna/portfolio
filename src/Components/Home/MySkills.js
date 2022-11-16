import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

const MySkills = () => {
     return (
          <div style={{ background: '#F0645E', color: 'white' }}>
               <Container >
                    <Row className="d-flex justify-center align-items-center p-5">
                         <Col sm={12} md={6}>
                              <h3>My-Skills </h3>
                              <h5>You can Imagine I can do</h5>
                              <p>I am working on a professional ,visually sophisticated and technology proficient .</p>
                         </Col>
                         <Col sm={12} md={6}>
                              <h4>Html</h4>
                              <ProgressBar animated now={90} />
                              <h4>css</h4>
                              <ProgressBar animated now={60} />
                              <h4>javascript</h4>
                              <ProgressBar animated now={50} />
                              <h4>React</h4>
                              <ProgressBar animated now={60} />

                         </Col>
                    </Row>
               </Container>

          </div>
     );
};

export default MySkills;