import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css"; // import external css file

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light py-3 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h4>About Us</h4>
            <p>
              Food Cravings is a website dedicated to sharing the best chef
              recipes from around the world. Our mission is to help home cooks
              and foodies alike discover new and exciting dishes to try, and to
              celebrate the art of cooking and cuisine.
            </p>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <div className="d-flex flex-column">
              <p>
                <FaMapMarkerAlt /> 123 ABC Road, Dhanmondi,Dhaka, Bangladesh
              </p>
              <p>
                <FaPhoneAlt /> +880 1234 567890
              </p>
              <p>
                <FaEnvelope /> food-cravings@gmail.com
              </p>
            </div>
          </Col>
          <Col md={4}>
            <h4>Follow Us</h4>
            <p>
              <a href="#">
                <FaFacebook className="mx-2" />
              </a>
              <a href="#">
                <FaTwitter className="mx-2" />
              </a>
              <a href="#">
                <FaInstagram className="mx-2" />
              </a>
              <a href="#">
                <FaYoutube className="mx-2" />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-3">
        <p>&copy; {currentYear} Food Cravings</p>
      </div>
    </footer>
  );
}

export default Footer;
