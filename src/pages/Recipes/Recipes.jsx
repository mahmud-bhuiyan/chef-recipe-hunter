import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Button,
  Spinner,
  Toast,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import RecipesCard from "../RecipesCard/RecipesCard";

const Recipes = () => {
  const { id } = useParams();
  const [chef, setChef] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchChefData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:7000/chefs/${id}`);
        const data = await response.json();
        console.log(data);
        setChef(data);
        setRecipes(data.recipes);
        console.log(data.recipes);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchChefData();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div>
          <Container className="my-4">
            <Row>
              <Col md={4} className="mb-2">
                <Image
                  className="w-75 float-right"
                  src={chef?.image}
                  alt={chef?.name}
                  fluid
                  roundedCircle
                />
              </Col>

              <Col md={8}>
                <div className="chef-details">
                  <h3>{chef?.name}</h3>
                  <p>{chef?.bio}</p>
                  <div className="chef-stats">
                    <span>
                      <FaHeart /> {chef?.likes}
                    </span>
                    <br />
                    <span>{chef?.total_recipes} recipes</span>
                    <br />
                    <span>{chef?.experience} years of experience</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="recipes-container">
            <Container>
              <Row>
                {recipes.map((recipe) => (
                  <RecipesCard key={recipe.id} recipe={recipe}></RecipesCard>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      )}
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        className="favorite-toast"
      >
        <Toast.Header>
          <strong className="mr-auto">Added to favorites!</strong>
        </Toast.Header>
      </Toast>
    </div>
  );
};

export default Recipes;
