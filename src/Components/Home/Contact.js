import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // service_1317448
    emailjs
      .sendForm(
        "service_1317448",
        "template_vd01ols",
        data,
        "user_wdIIPNgQClF1IL8gHS20T"
      )
      .then(
        (data) => {
          console.log(data.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
    alert("hi");
  };

  return (
    <div id="contact" style={{ marginTop: "20px" }}>
      <Container>
        <Row className="d-flex justify-content-center align-items-center p-5">
          <h2>Contact</h2>
          {/* contact phone email section */}
          <Col sm={12} md={4}>
            <div className="">
              {/* phone section */}
              <div className="d-flex justify-content-start align-items-start border border-success rounded p-2 mb-1 w-75 bg-info">
                <div className="me-2">
                  <AiOutlinePhone />
                </div>
                <div>
                  <h6>Phone</h6>
                  <p>01634501332</p>
                </div>
              </div>
              {/* email section */}
              <div className="d-flex border border-success rounded p-2 bg-info  w-75">
                <div className="me-2">
                  <AiOutlinePhone />
                </div>
                <div>
                  <h5>Email</h5>
                  <p>zonaet.hossain.munna</p>
                </div>
              </div>
            </div>
          </Col>
          {/* contact form section */}
          <Col sm={12} md={8}>
            <h5>
              I'm always open to discussing product design work or partnerships.{" "}
            </h5>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Control
                className="w-75 m-2"
                type="text"
                placeholder="name"
                {...register("name", { required: true, maxLength: 20 })}
              />
              <Form.Control
                className="w-75 m-2"
                type="email"
                placeholder="your email"
                {...register("email", { required: true, maxLength: 20 })}
              />
              <Form.Control
                className="w-75 m-2"
                placeholder="comment"
                as="textarea"
                rows={3}
                {...register("text", { required: true })}
              />
              <Button className="m-2" variant="primary" type="submit">
                submit
              </Button>{" "}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
