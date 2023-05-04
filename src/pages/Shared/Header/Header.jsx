import React from "react";
import { Nav, Navbar, Button, Image } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="md">
        <div className="container">
          <Navbar.Brand className="fw-bold" to="/">
            Food Cravings
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/blog">Blog</Nav.Link>
            </Nav>
            <FaUserCircle
              className="me-2"
              style={{ fontSize: "2rem" }}
            ></FaUserCircle>
            <Button variant="primary">Login</Button>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="banner">
        <h3 className="text-dark">
          Learn the <span className="highlight">Art</span> of Cooking Here
        </h3>
        <p className="text-dark">
          Discover the joy of cooking with our recipes and tutorials
        </p>
      </div>
    </>
  );
}

export default Header;
