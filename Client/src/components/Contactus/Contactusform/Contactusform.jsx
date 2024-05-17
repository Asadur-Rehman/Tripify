import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import styles from "./contactusform.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Contactusform() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [problem, setProblem] = useState('');
  const [description, setDescription] = useState('');

  const changeHandler = (event) => {
    if (event.target.name === 'firstName') {
      setFirstName(event.target.value);
    }
    else if (event.target.name === 'lastName') {
      setLastName(event.target.value);
    }
    else if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
    else if (event.target.name === 'problem') {
      setProblem(event.target.value);
    }
    else if (event.target.name === 'description') {
      setDescription(event.target.value);
    }
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    axios.post("http://localhost:8000/addNewComplaint", {
      firstName,
      lastName,
      email,
      problem,
      description
    }).then((response) => {
      alert(response.data.message);
    })

    setFirstName('');
    setLastName('');
    setEmail('');
    setProblem('');
    setDescription('');
  }

  return (
    <>
      <div className={`${styles.container1}`}>
        <div className={`row ${styles.upperrow}`}>
          <div className={`col-md-6 pt-4 px-5 ${styles.logo}`}>
            <Link to="/home">
              <img src={logo} className={styles.logowidth} alt="" />
            </Link>
          </div>
          <div className={`col-md-6 px-5 m-0 w-25 ${styles.goback}`}>
            <Link
              to="/home"
              className={`btn btn-success px-4 rounded-5 ${styles.gobacklink}`}
            >
              <i
                className={`fas fa-external-link-alt ${styles.gobackicon}`}
              ></i>
              <p className={`p-0 m-0 text-light ${styles.gobacktext}`}>
                Return to Tripify.com
              </p>
            </Link>
          </div>
        </div>
        <div className={`row ${styles.abouttext}`}>
          <h1 className={`text-center text-dark ${styles.heading}`}>
            Contact Us
          </h1>
        </div>
      </div>

      <div className={`${styles.container2} mt-5`}>
        <form className={`w-25 ${styles.form}`}>
          <div className={`${styles.namescontainer}`}>
            <div className={`form-group ${styles.namewidth}`}>
              <label for="firstname">First Name</label>
              <input
              value={firstName}
                onChange={changeHandler}
                name="firstName"
                type="text"
                className="form-control"
                id="firstname"
                aria-describedby="emailHelp"
                placeholder="Enter First name"
              />
            </div>
            <div className={`form-group ${styles.namewidth}`}>
              <label for="lastname">Last Name</label>
              <input
              value={lastName}
                onChange={changeHandler}
                name="lastName"
                type="text"
                className="form-control"
                id="lastname"
                aria-describedby="emailHelp"
                placeholder="Enter Last name"
              />
            </div>
          </div>
          <div className={`form-group mt-4 ${styles.emailpasswidth}`}>
            <label for="email">Email address</label>
            <input
            value={email}
              onChange={changeHandler}
              name="email"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          {/* <div className={`form-group mt-4 ${styles.emailpasswidth}`}>
            <label for="password">Password</label>
            <input
              onChange={changeHandler}
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div> */}
          <div className={`form-group mt-4 ${styles.probdiscwidth}`}>
            <label for="problem">Problem</label>
            <input
            value={problem}
              onChange={changeHandler}
              name="problem"
              type="text"
              className="form-control"
              id="problem"
              placeholder="Enter Your Problem"
            />
          </div>
          <div className={`form-group mt-4 ${styles.probdiscwidth}`}>
            <textarea
            value={description}
              onChange={changeHandler}
              name="description"
              id="problemdiscription"
              cols="45"
              rows="5"
              className="form-control"
              placeholder="Problem description"
            ></textarea>
          </div>
          <button onClick={submitHandler} type="submit" className="btn btn-success mt-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
