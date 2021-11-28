import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from '../Project/Project';



const MyProject = () => {
     const projects = [
          {
               id: 1,
               name: 'THE Hands of Time',
               description: 'In this project, I used client-side, server-side, and database.Developed a dashboard for normal and admin users for different services.For any service, a user must login and he will be able to give reviews.An admin can add, delete or update any service and make an admin.for client site designed i used Material-UI, react,firebase-authenticationFor back-end site Node.js, express.js, and MongoDB. Deploy in Heroku and firebase.',
               image: 'https://i.ibb.co/h2ZbmM8/12.png'
          },
          {
               id: 2,
               name: 'World Travel',
               description: 'A user selects any service and goes to the order placed for full details.  Users must login to order a service and redirect them to the previous page. The user will be able to see all his orders and delete them if he wants. A simple admin can see all the orders and he can add any service. Implemented this project react,react-bootstrap,react-router , react-hook-form , firebase-authentication ,Node.js and express.js. MongoDB is used for the database.',
               image: 'https://i.ibb.co/9YCL5K8/11.png'
          },
          {
               id: 3,
               name: 'Medical and Health center',
               description: 'The project has been designed using only front-end technology-based. If the user clicks on any service then full details will be shown. Users will have to login for a service and be redirected to an appointment. A user will be able to see his appointment, news medicine details. The technology is used to react ,react-bootstrap ,react-router ,firebase- authentication systems.',
               image: 'https://i.ibb.co/QdPs9Hs/10.png'
          }
     ];
     return (
          <div style={{ marginTop: '50px' }}>
               <Container>
                    <h3 className="text-center text-primary">My Projects</h3>
                    <Row xs={1} md={3} className="g-4">
                         {
                              projects.map(project => <Project
                                   key={project.id}
                                   project={project}
                              ></Project>)
                         }
                    </Row>

               </Container>
          </div>
     );
};

export default MyProject;