import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const ChefsCard = ({ chef }) => {
  return (
    <div className="col-md-4 mb-4">
      <Card>
        <LazyLoad>
          <Card.Img variant="top" src={chef.image} />
        </LazyLoad>
        <Card.Body>
          <Card.Title>{chef.name}</Card.Title>
          <Card.Text>
            {chef.experience} years of experience <br />
            {chef.total_recipes} recipes
            <span className="ms-3">
              <FaHeart /> {chef.likes}
            </span>
          </Card.Text>
          <Button variant="primary" as={Link} to={`/chef/${chef.id}/recipes`}>
            View Recipes
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefsCard;
