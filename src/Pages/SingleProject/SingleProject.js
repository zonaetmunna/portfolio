import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const SingleProject = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  const [singleDetails, setSingleDetails] = useState({});
  useEffect(() => {
    fetch("./FakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log("first", data);
      });
  }, []);
  useEffect(() => {
    const singleService = details.find((detail) => detail.id === id);
    console.log("seceond", singleService);
    setSingleDetails(singleService);
  }, [details]);

  return (
    <div>
      <h1>{id}</h1>
      <Container>
        <Row>
          <Col sm={8}>
            <Card>
              <Card.Img variant="top" src={singleDetails?.image} />
              <Card.Img variant="top" src={singleDetails?.image1} />
              <Card.Img variant="top" src={singleDetails?.image2} />
              <Card.Body>
                <Card.Title>{singleDetails?.name}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleProject;
