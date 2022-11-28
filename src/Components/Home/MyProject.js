import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Project from "./Project";

const MyProject = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./FakeData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);

  return (
    <Container className="mt-5">
      <div className="text-dark mb-3">
        <span>
          <h3>My Projects</h3>
        </span>
        <span>
          <hr />
        </span>
      </div>
      <Row xs={1} md={3} className="g-4">
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </Row>
    </Container>
  );
};

export default MyProject;
