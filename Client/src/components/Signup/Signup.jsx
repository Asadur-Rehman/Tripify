import React, { useState } from "react";
import styles from "./signup.module.css";
import loginPic from "../../assets/loginpage.jpg";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [warningMessage, setWarningMessage] = useState('');

  const navigate = useNavigate();

  const changeHandler = (event) => {
    if(event.target.name === 'firstName') {
      setFirstName(event.target.value);
    }
    else if(event.target.name === 'lastName') {
      setLastName(event.target.value);
    }
    else if(event.target.name === 'email') {
      setEmail(event.target.value);
    }
    else if(event.target.name === 'password') {
      setPassword(event.target.value);
    }
    else if(event.target.name === 'confirmPassword') {
      setConfirmPassword(event.target.value);
    }
  }

  const signUpHandler = (event) => {
    event.preventDefault();

    if(!(firstName && lastName && email && password && confirmPassword)) {
      setWarningMessage("Please Fill All Fields!");
    }
    else {
      if(password !== confirmPassword) {
        setWarningMessage('Password and Confirm Password must be the same!');
      }
      else {
        axios.post('http://localhost:8000/addUser', {
          firstName,
          lastName,
          email,
          password
        }).then((response) => {
          setWarningMessage(response.data.message);
        }).catch((error) => {
          setWarningMessage(error);
        })
      }
    }
  }

  return (
    <>
      <div className={styles.main}>
      <section
        className={`card px-4 py-4 px-md-5 text-center text-lg-start ${styles.signupform}`}
      >
        {warningMessage.length > 0 &&
          <div class="alert alert-warning" role="alert">
            {warningMessage}
          </div>
        }
        <div className="row">
          <img src={logo} alt="Logo" className={styles.signuplogo} />
        </div>
        <div className={`row ${styles.Signin}`}>
          <h3>Sign up</h3>
        </div>
        <form>
          <div class={`row my-4 ${styles.namesrow}`}>
            <div class={`col-md-6 ${styles.namescol}`}>
              <div class="form-outline">
                <input type="text" class="form-control" placeholder="First name" onChange = {changeHandler} name = "firstName" value={firstName} required />
              </div>
            </div>
            <div class={`col-md-6  ${styles.namescol}`}>
              <div class="form-outline">
                <input type="text" class="form-control" placeholder="Last name" onChange = {changeHandler} name = "lastName" value={lastName} required />
              </div>
            </div>
          </div>

          <div class="form-outline mb-4">
            <input type="email" class="form-control" placeholder="Email Address" onChange = {changeHandler} name = "email"  value={email} required />

          </div>

          <div class="form-outline mb-4">
            <input type="password" class="form-control" placeholder="Password" onChange = {changeHandler} name = "password" value={password} required />
          </div>
          <div class="form-outline mb-4">
            <input type="password" class="form-control" placeholder="Confirm Password" onChange = {changeHandler} name = "confirmPassword" value={confirmPassword} required />
          </div>

          <button type="submit" onClick={signUpHandler} class={`btn btn-outline-success btn-block ${styles.btn}`}>
            Sign up
          </button>
          <div className="text-center mt-2 d-flex justify-content-center">
            <p className="text-secondary m-0">Already Registered?</p><Link className={`mx-1 ${styles.loginlink}`} to='/'>Login</Link>
          </div>
        </form>
      </section>
      </div>

      <div>
        {/* <img src={loginPic} alt="loginPic" className={styles.signupbgpic} /> */}
      </div>
    </>
  );
}
