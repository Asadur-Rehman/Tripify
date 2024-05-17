import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={`fluid px-5 bg-dark ${styles.footer}`}>
      <footer className="pt-5 text-light">
        <div className={`row ${styles.row}`}>
          <div className={`col-2  ${styles.columns}`}>
            <h5 className={`text-success ${styles.footerheading}`}>
              TOP DESTINATIONS
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                to='/destination/Feary Meadows/Pakistan'
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Feary Meadows
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                to='/destination/Azad Jamu & Kashmir/Pakistan'
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Azad Jamu & Kashmir
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                to='/destination/Naran Kaghan/Pakistan'
                  // href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Naran Kaghan
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  // href="#"
                  to='/destination/Swat Valley/Pakistan'
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Swat Valley
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                to='/destination/Hunza Valley/Pakistan'
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Hunza Valley
                </Link>
              </li>
              {/* <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Chitral Valley
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Gilgit Baltistan
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Skardu
                </a>
              </li> */}
            </ul>
          </div>

          <div className={`col-2 ${styles.columns}`}>
            <h5 className={`text-success ${styles.footerheading}`}>
              TRAVEL INTERESTS
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Adventure Travel
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Travel on Budget
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Honeymoon
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Holidays
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Festivals
                </a>
              </li>
            </ul>
          </div>

          <div className={`col-2 ${styles.columns}`}>
            <h5 className={`text-success ${styles.footerheading}`}>SHOP</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/guidebooks"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Destination Guides
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/englishguides"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  English Guides
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/urduguides"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Urdu Guides
                </Link>
              </li>
            </ul>
          </div>
          <div className={`col-2 ${styles.columns}`}>
            <h5 className={`text-success ${styles.footerheading}`}>ABOUT US</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/Aboutus"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  About Tripify
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/privacy"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/terms"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Terms and Conditions
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/suggestion"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Suggestions
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/workForUs"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Work with Us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/Contactus"
                  className={`nav-link p-0 text-secondary ${styles.footerlink}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className={`col-4 ${styles.subscribe}`}>
            <form>
              <h2 className={`text-success`}>Subscribe to our newsletter</h2>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-4">
                <input
                  id="newsletterEmail"
                  type="text"
                  className="form-control w-75"
                  placeholder="Email address"
                />
                <button className="btn btn-success" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-between pt-4 mt-4 border-top">
          <p className="text-muted">
            © 2021 Company, Inc. All rights reserved.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-success" href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-success" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-success" href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
