import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Project = ({ project }) => {
     const { id, name, description, image } = project;
     const navigate = useNavigate();

     const handleDescription = () => {
          navigate(`/project/${id}`);
     }

     return (

          <Col>
               <Card>
                    <Card.Img variant="top" src={image} width="100%" />
                    <Card.Body>
                         <Card.Title>{name}</Card.Title>
                         <Card.Text>
                              {description.des1}
                         </Card.Text>
                         <Button onClick={handleDescription} variant="primary">Description</Button>
                    </Card.Body>
               </Card>
          </Col>

     );
};

export default Project;