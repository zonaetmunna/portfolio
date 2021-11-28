import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pdf from '../../../../zonaet-hossain-resume-for-Frontend-developer.pdf'

const Header = () => {
     return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                         <Nav className="me-auto">
                         </Nav>
                         <Nav>
                              <Nav.Link as={Link} to="/">Home</Nav.Link>
                              <Nav.Link as={Link} to="/">Contact</Nav.Link>
                              <Nav.Link as={Link} to="/">About</Nav.Link>
                              <Button className="resume__Button2" to={pdf} download={pdf} component={Link}>My Resume</Button>
                         </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar >
     );
};

export default Header;