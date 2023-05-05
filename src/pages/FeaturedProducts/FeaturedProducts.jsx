import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import LazyLoad from "react-lazy-load";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Zucchini Fritters",
      image: "https://i.ibb.co/vm22vW3/pexels-ruslan-khmelevsky-7655118.jpg",
    },
    {
      id: 2,
      name: "Grilled Ribeye Steak",
      image: "https://i.ibb.co/6sBS2NG/pexels-angele-j-128408.jpg",
    },
    {
      id: 3,
      name: "Chicken Parmigiana",
      image: "https://i.ibb.co/8rtpCkw/pexels-pixabay-236887.jpg",
    },
  ];

  return (
    <section className="featured-products my-5">
      <hr />
      <Container className="my-4">
        <h2 className="fw-bold text-center mb-3">Featured Products</h2>
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id}>
              <Card className="mb-4">
                <LazyLoad>
                  <Card.Img variant="top" src={product.image} />
                </LazyLoad>
                <Card.Body>
                  <Card.Title className="fw-bold">{product.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
