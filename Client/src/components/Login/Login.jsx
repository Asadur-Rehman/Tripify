import React, { useState, useEffect, useContext } from "react";
import styles from "./login.module.css";
import loginPic from "../../assets/loginpage.jpg";
import logo from "../../assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userContext from "../../store/userContext/userContext";
import adminContext from "../../store/adminContext/adminContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const [authenticationMessage, setAuthenticationMessage] = useState("");

  const userDetails = useContext(userContext);
  const adminDetails = useContext(adminContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (userAuthenticated) {
      navigate(`/home`);
    } else if (adminAuthenticated) {
      navigate("/admin-dash");
    }
  }, [userAuthenticated, adminAuthenticated]);

  const changeHandler = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const loginHandler = (event) => {
    event.preventDefault();

    if (event.target.name === "userLogin") {
      axios
        .post("http://localhost:8000/authenticateUser", {
          email: email,
          password: password,
        })
        .then((response) => {
          setAuthenticationMessage(response.data.message);
          if (response.data.status) {
            userDetails.firstName = response.data.result.firstName;
            userDetails.lastName = response.data.result.lastName;
            userDetails.email = response.data.result.email;
            setUserAuthenticated(true);
          } else {
            setUserAuthenticated(false);
          }
        })
        .catch((error) => {
          setUserAuthenticated(false);
          setAuthenticationMessage("Some Error Occurred, Please try again!");
        });
    } else if (event.target.name === "adminLogin") {
      axios
        .post("http://localhost:8000/authenticateAdmin", {
          email: email,
          password: password,
        })
        .then((response) => {
          setAuthenticationMessage(response.data.message);
          if (response.data.status) {
            adminDetails.firstName = response.data.result.firstName;
            adminDetails.lastName = response.data.result.lastName;
            adminDetails.email = response.data.result.email;
            setAdminAuthenticated(true);
          } else {
            setAdminAuthenticated(false);
          }
        })
        .catch((error) => {
          setAdminAuthenticated(false);
          setAuthenticationMessage("Some Error Occurred, Please try again!");
        });
    }
  };

  const toSignUp = () => {
    navigate(`/signup`);
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${loginPic})` }} className={styles.div}>
        <section
          className={`card px-4 py-4 px-md-5 text-cente text-lg-start ${styles.loginform}`}
        >
          {authenticationMessage.length > 0 && (
            <div class="alert alert-warning" role="alert">
              {authenticationMessage}
            </div>
          )}
          <div className="row">
            <img src={logo} alt="Logo" className={styles.loginlogo} />
          </div>
          <div className={`row ${styles.Signin}`}>
            <h2>Sign in</h2>
          </div>
          <form className="mt-4">
            <div class="form-outline mb-4">
              <input
                name="email"
                value={email}
                type="email"
                className="form-control"
                placeholder="Email Address"
                onChange={changeHandler}
              />
            </div>

            <div class="form-outline mb-4">
              <input
                name="password"
                value={password}
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={changeHandler}
              />
            </div>
            <button
              name="userLogin"
              className={`btn btn-outline-success btn-block ${styles.btn}`}
              onClick={loginHandler}
            >
              User Login
            </button>
            <button
              name="adminLogin"
              className={`btn btn-outline-success btn-block ${styles.btn}`}
              onClick={loginHandler}
            >
              Admin Login
            </button>

            <p className="small text-center mt-3">
              <a className={`text-secondary ${styles.fpass}`} href="#!">
                Forgot password?
              </a>
            </p>
            <hr></hr>
            {/* <div className="text-center">
              <p className="text-success">or sign in with:</p>
              <button
                type="button"
                className={`btn btn-link btn-floating mx-1 ${styles.loginicon}`}
              >
                <i className="fab fa-facebook-f"></i>
              </button>

              <button
                type="button"
                className={`btn btn-link btn-floating mx-1 ${styles.loginicon}`}
              >
                <i className="fab fa-google"></i>
              </button>

              <button
                type="button"
                className={`btn btn-link btn-floating mx-1 ${styles.loginicon}`}
              >
                <i className="fab fa-twitter"></i>
              </button>

              <button
                type="button"
                className={`btn btn-link btn-floating mx-1 ${styles.loginicon}`}
              >
                <i className="fab fa-github"></i>
              </button>
            </div> */}
            <div class="text-center mt-5 d-flex justify-content-center">
              <p className="text-secondary m-0">Not Registered?</p>
              <a className={`mx-1 ${styles.signuplink}`} onClick={toSignUp}>
                Sign up
              </a>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
