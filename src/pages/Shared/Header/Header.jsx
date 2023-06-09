import React, { useContext } from "react";
import { Nav, Navbar, Button, Image } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { AuthContext } from "../../../providers/AuthProviders";
import "./Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const isActiveRoute = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logout()
      .then(() => {
        console.log("Sign-out successful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
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
            <Nav className="ms-auto">
              <Link className={`links ${isActiveRoute("/")}`} to="/">
                Home
              </Link>
              <Link className={`links ${isActiveRoute("/blog")}`} to="/blog">
                Blog
              </Link>
              <Link className={`links ${isActiveRoute("/about")}`} to="/about">
                About Us
              </Link>
              {user ? (
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <Link
                      className={`links d-flex ${isActiveRoute("/profile")}`}
                      to="/profile"
                      title={user.displayName}
                    >
                      <img
                        src={user?.photoURL}
                        alt={user?.email}
                        style={{ maxWidth: "25px", borderRadius: "50%" }}
                      />
                    </Link>
                    <Button
                      onClick={handleLogOut}
                      style={{
                        background: "none",
                        color: "black",
                        padding: "0px 5px",
                        margin: "0px",
                        border: "none",
                        fontWeight: "500",
                      }}
                    >
                      Sign Out
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  <Link
                    className={`links ${isActiveRoute("/register")}`}
                    to="/register"
                  >
                    Register
                  </Link>
                  <Link
                    className={`links ${isActiveRoute("/login")}`}
                    to="/login"
                  >
                    Login
                  </Link>

                  <FaUserCircle
                    className="ms-1"
                    style={{ fontSize: "2rem" }}
                  ></FaUserCircle>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {isHomePage && (
        <LazyLoad>
          <div className="banner">
            <h3 className="text-dark">
              Learn the <span className="highlight">Art</span> of Cooking Here
            </h3>
            <p className="text-dark">
              Discover the joy of cooking with our recipes and tutorials
            </p>
          </div>
        </LazyLoad>
      )}
    </>
  );
}

export default Header;
