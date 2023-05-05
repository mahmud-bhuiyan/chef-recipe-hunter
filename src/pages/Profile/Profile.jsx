import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProviders";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header>
              <div className="text-center">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                />
                <h3 className="mt-3">{user.displayName}</h3>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                <strong>Email: </strong>
                {user.email}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
