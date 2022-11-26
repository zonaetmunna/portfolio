import React, { useContext, useState } from "react";
import { Container, Nav, Navbar, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../../../context/ContextProvider";
import { ThemeContext } from "../../../context/ThemeProvider";
import pdf from "../../../zonaet-hossain-resume-for-Frontend-developer.pdf";
import "../../../Sass/main.scss";

const Header = () => {
  // context state value
  const { user, logout } = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleMode = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  // input search state
  const [inputText, setInputText] = useState("");
  //handle input change
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
            {/* dark mode button */}
            {/* <button
              className={`bg ${darkMode ? "btn-dark" : "btn-light"}`}
              onClick={handleMode}
            >
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button> */}
            {/* <div className="switch-checkbox">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider round"> </span>
              </label>
            </div> */}

            <button
              className={
                darkMode
                  ? "btn btn-floating fa fa-toggle-on"
                  : "btn btn-floating fa fa-toggle-off"
              }
              onClick={handleMode}
            ></button>

            {/* user link */}
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
