import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { Container } from "react-bootstrap";

const ErrorPage = () => {
  const { status } = useRouteError();
  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(https://i.ibb.co/PrgbH00/no-data-found.webp)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container className="text-center text-dark">
        <h1 className="display-1 mb-4">{status || "404"}</h1>
        <Link to="/" className="btn btn-lg btn-primary">
          Back to Homepage
        </Link>
      </Container>
    </div>
  );
};

export default ErrorPage;
