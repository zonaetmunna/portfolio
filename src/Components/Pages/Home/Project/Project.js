import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Project = ({ project }) => {
     const { name, description, image } = project;
     return (

          <Col>
               <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                         <Card.Title>{name}</Card.Title>
                         <Card.Text>
                              {description.slice(0, 200)}
                         </Card.Text>
                         <Button variant="primary">Description</Button>
                    </Card.Body>
               </Card>
          </Col>

     );
};

export default Project;