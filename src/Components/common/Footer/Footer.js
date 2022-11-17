import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <Container
      fluid
      sticky="fixed"
      className="d-flex justify-content-center algin-item-center bg-dark text-white"
    >
      <Row>
        <Col>
          <p>
            copy right <AiOutlineCopyrightCircle />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
