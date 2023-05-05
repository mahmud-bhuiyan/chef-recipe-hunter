import React, { useState } from "react";
import { Card, Button, Col, Toast } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LazyLoad from "react-lazy-load";

const RecipesCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const notify = () => {
    setIsFavorite(true);
    toast("Recipe added to favorite");
  };

  return (
    <Col md={4}>
      <Card className="recipe-card h-100">
        <LazyLoad>
          <Card.Img
            style={{ height: "500px" }}
            variant="top"
            src={recipe.image}
          />
        </LazyLoad>
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
          <Button variant="primary" disabled={isFavorite} onClick={notify}>
            {isFavorite ? "Added to favorites!" : "Add to favorites"}
          </Button>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Col>
  );
};

export default RecipesCard;
