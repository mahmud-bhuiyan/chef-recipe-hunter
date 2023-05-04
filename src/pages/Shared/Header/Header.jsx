import React from "react";
import { Nav, Navbar, Button, Image } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const isActiveRoute = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <>
      <Navbar bg="light" expand="md">
        <div className="container">
          <Navbar.Brand className="fw-bold">
            <Link className="text-decoration-none" to="/">
              <span className="gradient-text">Food Cravings</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Link className={`links ${isActiveRoute("/")}`} to="/">
                Home
              </Link>
              <Link className={`links ${isActiveRoute("/blog")}`} to="/blog">
                Blog
              </Link>
            </Nav>
            <FaUserCircle
              className="me-2"
              style={{ fontSize: "2rem" }}
            ></FaUserCircle>

            <Link to="/login">
              <Button variant="primary">Login</Button>
            </Link>
            {/* <Button onClick={handleSignOut} variant="primary">
              Logout
            </Button> */}
          </Navbar.Collapse>
        </div>
      </Navbar>

      {isHomePage && (
        <div className="banner">
          <h3 className="text-dark">
            Learn the <span className="highlight">Art</span> of Cooking Here
          </h3>
          <p className="text-dark">
            Discover the joy of cooking with our recipes and tutorials
          </p>
        </div>
      )}
    </>
  );
}

export default Header;
