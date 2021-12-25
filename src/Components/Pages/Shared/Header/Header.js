import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import pdf from '../../../../zonaet-hossain-resume-for-Frontend-developer.pdf'

const Header = () => {
     return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                         <Nav className="me-auto">
                         </Nav>
                         <Nav>
                              <Nav.Link as={HashLink} to="#home">Home</Nav.Link>
                              <Nav.Link as={HashLink} to="#home">hello</Nav.Link>
                              <Nav.Link as={HashLink} to="#contact">Contact</Nav.Link>
                              <Nav.Link as={HashLink} to="#about">About</Nav.Link>
                              <Button className="bg-dark"><Link className='text-decoration-none' to={pdf} target="_blank" download>Resume</Link></Button>
                         </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar >
     );
};

export default Header;