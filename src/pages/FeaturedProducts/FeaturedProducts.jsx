import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",

      image: "https://i.ibb.co/vm22vW3/pexels-ruslan-khmelevsky-7655118.jpg",
    },
    {
      id: 2,
      name: "Product 2",

      image: "https://i.ibb.co/6sBS2NG/pexels-angele-j-128408.jpg",
    },
    {
      id: 3,
      name: "Product 3",

      image: "https://i.ibb.co/8rtpCkw/pexels-pixabay-236887.jpg",
    },
  ];

  return (
    <section className="featured-products my-5">
      <Container>
        <h2>Featured Products</h2>
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id}>
              <Card className="mb-4">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <hr />
    </section>
  );
};

export default FeaturedProducts;
