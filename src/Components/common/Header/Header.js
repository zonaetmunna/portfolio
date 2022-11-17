import React, { useContext, useState } from "react";
import { Container, Nav, Navbar, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../../../context/ContextProvider";
import { ThemeContext } from "../../../context/ThemeProvider";
import pdf from "../../../zonaet-hossain-resume-for-Frontend-developer.pdf";

const Header = () => {
  // context state value
  const { user } = useContext(AuthContext);
  const { state, dispatch } = useContext(ThemeContext);
  // const darkMode = state.darkMode;

  // input search state
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow-lg"
      sticky="top"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center "
          sticky="top"
        >
          <Nav className="">
            <Nav.Link
              as={Link}
              to="/"
              className="text-decoration-none text-white"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              to="#blog"
              className="text-decoration-none text-white"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              to="#contact"
              className="text-decoration-none text-white"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              to="#about"
              className="text-decoration-none text-white"
            >
              About
            </Nav.Link>
            <Button className="bg-dark border-0">
              <Link
                className="text-decoration-none"
                to={pdf}
                target="_blank"
                download
              >
                Resume
              </Link>
            </Button>
            {user ? (
              <p>{user.displayName}</p>
            ) : (
              <Link to="/signup" className="text-decoration-none">
                signup
              </Link>
            )}
            {/* input */}
            <Form.Control
              size="sm"
              type="text"
              placeholder="search"
              className="justify-content-end"
              onChange={handleInputChange}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
