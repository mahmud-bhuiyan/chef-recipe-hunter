import React, { useState } from "react";
import { Card, Button, Col, Toast } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RecipesCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(true);
    setShowToast(true);
  };

  return (
    <Col md={4}>
      <Card className="recipe-card h-100">
        <Card.Img
          style={{ height: "500px" }}
          variant="top"
          src={recipe.image}
        />
        <Card.Body>
          <Card.Title className="fw-bold">{recipe?.recipe_name}</Card.Title>
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
          <hr />
          <Card.Text className="d-flex align-items-center gap-2">
            <Rating style={{ maxWidth: 180 }} value={recipe?.rating} readOnly />
            {recipe?.rating}
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
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={2000}
        autohide
        style={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <Toast.Body>This recipe is now your favorite!</Toast.Body>
      </Toast>
    </Col>
  );
};

export default RecipesCard;
