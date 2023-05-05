import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import "./Register.css";
import { AuthContext } from "../../providers/AuthProviders";

function Register() {
  const { user, createUser } = useContext(AuthContext);

  const auth = getAuth(app);
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photoURL = form.photoURL.value;
    console.log(name, email, password, confirm, photoURL);

    if (password.length < 6) {
      setErrorMessage("Password must be 6 character long");
      return;
    } else if (password === confirm) {
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setSuccess("User created successfully");
          form.reset();
        })
        .catch((error) => {
          console.log(error.message);
          setErrorMessage(error.message);
          setSuccess("");
        });
    } else {
      setErrorMessage("Password did not match!");
      return;
    }
  };

  return (
    <>
      <Container className="register-container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center my-5">
            <h2 className="heading-section mt-5">Register</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap p-0">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>

                <div className="form-group my-3 position-relative">
                  <div className="d-flex">
                    <input
                      type={passwordShown ? "text" : "password"}
                      className="form-control flex-grow-1"
                      placeholder="Password"
                      name="password"
                      required
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="position-absolute top-50 end-0 translate-middle-y pe-2 text-primary toggle-password"
                      style={{ cursor: "pointer", userSelect: "none" }}
                    >
                      {passwordShown ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                <div className="form-group my-3 position-relative">
                  <div className="d-flex">
                    <input
                      type={passwordShown ? "text" : "password"}
                      className="form-control flex-grow-1"
                      placeholder="Confirm Password"
                      name="confirm"
                      required
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="position-absolute top-50 end-0 translate-middle-y pe-2 text-primary toggle-password"
                      style={{ cursor: "pointer", userSelect: "none" }}
                    >
                      {passwordShown ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Photo URL"
                    name="photoURL"
                    required
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary submit px-3"
                  >
                    Register
                  </button>
                </div>
              </form>
              <p className="text-danger">{errorMessage}</p>
              <p className="text-success">{success}</p>
              <div className="text-center mt-3">
                <p>
                  Already have an account?{" "}
                  <Link className="text-decoration-none fw-bold" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Register;
