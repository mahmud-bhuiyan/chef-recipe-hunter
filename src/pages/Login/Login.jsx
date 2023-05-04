import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Button, Container } from "react-bootstrap";
import "./Login.css";

function Login() {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

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

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container className="login-container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center my-5">
            <h2 className="heading-section">Login</h2>
            <Button onClick={handleSignOut} variant="primary">
              Logout
            </Button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap p-0">
              <h3 className="mb-4 text-center">Have an account?</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="form-group my-3 position-relative">
                  <div className="d-flex">
                    <input
                      type={passwordShown ? "text" : "password"}
                      className="form-control flex-grow-1"
                      placeholder="Password"
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
                    Sign In
                  </button>
                </div>
              </form>
              <p className="w-100 text-center mt-3">
                &mdash; Or Sign In With &mdash;
              </p>
              <div className="social d-flex gap-3 justify-content-center">
                <Button onClick={handleGoogleSignIn}>
                  <FaGoogle></FaGoogle>
                  <span className="ion-logo-facebook mr-2"></span> Google
                </Button>
                <Button onClick={handleGithubSignIn}>
                  <FaGithub></FaGithub>
                  <span className="ion-logo-twitter mr-2"></span> Github
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;
