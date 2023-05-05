import React, { useState, useEffect } from "react";

import { Card, Button, Col } from "react-bootstrap";

const RecipesCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = () => {
    setIsFavorite(true);
    setShowToast(true);
  };

  return (
    <Col md={4}>
      <Card className="recipe-card h-100">
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.recipe_name}</Card.Title>
          <br />
          <Card.Text>
            <span className="fw-bold">Ingredients</span>{" "}
            {recipe.ingredients.join(", ")}
          </Card.Text>
          <hr />
          <Card.Text>
            <span className="fw-bold">Cooking Method:</span>{" "}
            {recipe.cooking_method}
          </Card.Text>
          <Button
            variant="primary"
            disabled={isFavorite}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? "Added to favorites!" : "Add to favorites"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecipesCard;
