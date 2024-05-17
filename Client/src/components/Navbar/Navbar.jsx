import React, { useState, useContext } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import userContext from "../../store/userContext/userContext";

export default function Navbar() {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const navigate = useNavigate();
  const userDetails = useContext(userContext);

  return (
    <div className={`d-flex bg-light align-items-center`}>
      <nav className={`navbar navbar-expand-lg bg-light ${styles.navbar}`}>
        <div className="container-fluid">
          <a className={`navbar-brand ${styles.logodiv}`} href="#">
            <img className={styles.logowidth} src={logo} alt="Tripify Logo" onClick={() => {
              navigate('/home')
            }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link text-dark ${styles.navbartext} ${styles.active} mx-4`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-dark ${styles.navbartext} mx-4`}
                  to="/discover"
                >
                  Discover
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-dark ${styles.navbartext} mx-4`}
                  to="/specialDeals"
                >
                  Special Deals
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-dark ${styles.navbartext} mx-4`}
                  to="/booking"
                >
                  Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className={`nav-link text-dark ${styles.navbartext} mx-4`}>
                  About Us
                </Link>
              </li>
            </ul>
            <div className={`${styles.profile}`}>
              {/* <Link className="btn btn-success me-2" to="/">
                Login
              </Link> */}
              <a
                type="button"
                onClick={() => {
                  setShowUserDetails(!showUserDetails);
                }}
              >
                <BsFillPersonFill className="display-5" />
              </a>
            </div>
          </div>
        </div>
        {showUserDetails && (
          <div className={`${styles.userDetails}`}>
            <div className={`${styles.flex}`}>
              <h6>Name: </h6>
              <h6>{userDetails.firstName} {userDetails.lastName}</h6>
            </div>
            <div className={`${styles.flex}`}>
              <h6>Email: </h6>
              <h6>{userDetails.email}</h6>
            </div>
            <div className={`${styles.flex}`}>
              {/* <h6>Contact: </h6>
              <h6>03430810984</h6> */}
            </div>
            <button className="btn btn-danger" onClick={() => {
              navigate('/');
            }}>Logout</button>
          </div>
        )}
      </nav>
      <div className={`${styles.profile}`}>
        {/* <button className="btn btn-success me-2">Login</button> */}
        <a type="button" onClick={() => { setShowUserDetails(!showUserDetails) }}>
          <BsFillPersonFill />
        </a>
      </div>

    </div>
  );
}
