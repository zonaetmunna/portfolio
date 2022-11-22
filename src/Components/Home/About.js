import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container
      id="about"
      className="mt-3 mb-3 p-3"
      style={{ background: "#69F8EB" }}
    >
      <Row className="justify-center align-items-center">
        <h2>About me</h2>
        <Col sm={12} md={4}>
          <Image
            src="https://i.ibb.co/qrRhjtk/83024583.jpg"
            className="w-75"
            roundedCircle
          />
        </Col>
        <Col sm={12} md={8}>
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
          <div>
            <h4>Personal Info</h4>
            <div className="">
              <div className="d-flex">
                <div>phone</div>
                <div>email</div>
              </div>
              <div className="d-flex">
                <div>address</div>
                <div>birthday</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-center align-items-center">
        {/* web development */}
        <Col sm={12} md={4}>
          <div>
            <div>
              <h5>web development</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium repellat nostrum aperiam!
              </p>
            </div>
          </div>
        </Col>
        {/* mobile apps development*/}
        <Col sm={12} md={4}>
          <div>
            <div>
              <h5>mobile apps development</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium repellat nostrum aperiam!
              </p>
            </div>
          </div>
        </Col>
        {/* digital marketing*/}
        <Col sm={12} md={4}>
          <div>
            <div>
              <h5>digital marketing</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium repellat nostrum aperiam!
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
