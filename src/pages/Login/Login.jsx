import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Button, Container } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [errorMessage, setErrorMessage] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        event.target.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error.message));
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error.message));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Container className="login-container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center my-5">
            <h2 className="heading-section mt-5">Login</h2>
            <Button onClick={handleSignOut} variant="primary">
              Logout
            </Button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap p-0">
              <form onSubmit={handleSubmit}>
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

                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary submit px-3"
                  >
                    Login
                  </button>
                </div>

                <p className="text-center my-3 text-white fw-bold">OR</p>

                <div className="d-flex gap-3">
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-danger btn-lg btn-block"
                      onClick={handleGoogleSignIn}
                    >
                      <FaGoogle /> <small>Continue with Google</small>
                    </button>
                  </div>

                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-dark btn-lg btn-block"
                      onClick={handleGithubSignIn}
                    >
                      <FaGithub /> <small>Continue with Github</small>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-danger">{errorMessage}</p>
              <p className="text-center text-white">
                Don't have an account?{" "}
                <Link className="text-decoration-none fw-bold" to="/register">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;
