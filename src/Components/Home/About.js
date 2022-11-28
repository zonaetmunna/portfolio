import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container id="about" className="mt-5 p-3">
      <Row className="">
        <h2>About me</h2>
        <div className="d-flex justify-content-center algin-items-center">
          <Col sm={12} md={4}>
            <div>
              <Image
                src="https://i.ibb.co/qrRhjtk/83024583.jpg"
                className="w-75"
                roundedCircle
              />
            </div>
          </Col>
          <Col sm={12} md={8}>
            {/* who am i */}
            <div>
              <h4>who am i</h4>
              <p>
                I'm Creative web developer and UI/UX Designer, working in web
                development. I enjoy turning complex problems into simple,
                beautiful and intuitive designs. My aim is to bring across your
                message and identity in the most creative way. I created web
                design for many famous brand companies.{" "}
              </p>
            </div>
            {/* personal info */}
            <div>
              <h4>Personal Info</h4>
              <Row className="">
                <Col sm="12" md="6">
                  <div className="">
                    <p>Phone- 01634501332</p>
                  </div>
                  <div className="">
                    <p>Email- zonaet.hossain.munna@gmail.com</p>
                  </div>
                </Col>
                <Col sm="12" md="6">
                  <div>
                    <p>Address: Dhaka</p>
                  </div>
                  <div>
                    <p>Birthday: 23 December, 1998</p>
                  </div>
                </Col>
              </Row>
            </div>
            <Row className="justify-center align-items-center mt-2">
              {/* web development */}
              <Col sm={12} md={4}>
                <div className="bg-info p-3 border border-primary rounded">
                  <h6 className="text-uppercase">web development</h6>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laudantium repellat nostrum aperiam!
                  </p>
                </div>
              </Col>
              {/* mobile apps development*/}
              <Col sm={12} md={4}>
                <div className="bg-info p-3 border border-primary rounded">
                  <h6 className="text-uppercase">mobile apps development</h6>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laudantium repellat nostrum aperiam!
                  </p>
                </div>
              </Col>
              {/* digital marketing*/}
              <Col sm={12} md={4}>
                <div className="bg-info p-3 border border-primary rounded">
                  <h6 className="text-uppercase">digital marketing</h6>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laudantium repellat nostrum aperiam!
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default About;
