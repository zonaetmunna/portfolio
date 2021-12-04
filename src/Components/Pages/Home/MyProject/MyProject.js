import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from '../Project/Project';


const MyProject = () => {
     const [projects, setProjects] = useState([]);
     useEffect(() => {
          fetch('./FakeData.json')
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    setProjects(data);
               })
     }, [])

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