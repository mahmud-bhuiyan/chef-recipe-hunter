import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const ChefsCard = ({ chef }) => {
  return (
    <div className="col-md-4 mb-4">
      <Card>
        <Card.Img variant="top" src={chef.image} />
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
