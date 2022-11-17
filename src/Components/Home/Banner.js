import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import pdf from "../../zonaet-hossain-resume-for-Frontend-developer.pdf";
import { AiOutlinePhone } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Banner = () => {
  return (
    <div id="hello">
      <Container>
        <Row className="d-flex justify-center align-items-center">
          <Col sm={12} md={6}>
            <h3>
              Hello, I am{" "}
              <span className="text-primary text-uppercase">
                {" "}
                zonaet hossain munna
              </span>
            </h3>
            <p className="text-secondary">
              I am a react web and mobile application developer. Focused mainly
              on React. I love to build smooth and beautiful apps that solves
              real-world problems!
            </p>
            <h6>
              <span>
                <AiOutlinePhone />
              </span>
              <span className="m-2">01634501332</span>
            </h6>
            <h6>
              <span>
                <SiGmail />
              </span>
              <span className="m-2">zonaet.hossain.munna@gmail.com</span>
            </h6>
            <h6>
              <span>
                <a href="https://github.com/zonaetmunna">
                  <BsGithub />
                </a>
              </span>

              <span className="m-2">
                <a href="https://www.facebook.com/zonaet.monna/">
                  <BsFacebook />
                </a>
              </span>

              <span className="m-2">
                <a href=" https://www.linkedin.com/in/md-zonaet-hossain-munna-22b909216/">
                  <BsLinkedin />
                </a>
              </span>
            </h6>
          </Col>
          <Col sm={12} md={6}>
            <Image
              width="400px"
              className="w-75 mt-3"
              src="https://i.ibb.co/qrRhjtk/83024583.jpg"
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
