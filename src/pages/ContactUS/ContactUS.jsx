import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./ContactUS.css";

const ContactUS = () => {
  return (
    <>
      <hr />
      <section className="contact-section">
        <Container fluid className="p-0 contact-container">
          <Row className="m-0">
            <Col md={5} xs={12} className="p-5 contact-form-col">
              <div className="contact-form-wrapper">
                <h2>Contact Us</h2>
                <p>Have a question or feedback? Get in touch with us!</p>
                <Form>
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicSubject" className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" />
                  </Form.Group>

                  <Form.Group controlId="formBasicMessage" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Enter message"
                    />
                  </Form.Group>

                  <Button variant="primary">Submit</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <hr />
    </>
  );
};

export default ContactUS;
