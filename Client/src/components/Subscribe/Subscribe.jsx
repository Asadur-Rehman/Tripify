import React from "react";
import styles from "./subscribe.module.css"

export default function Subscribe() {
  return (
    <div className={`bg-success p-5 ${styles.container3}`}>
      <div className={`mx-5 p-5 row card rounded-5 bg-light ${styles.c3card}`}>
        <div className={`col-md-5 mx-0 ${styles.colum}`}>
          <h1>Subscribe & Get 20% off</h1>
          <p>
            Join our newsletter and discover new destinations to inspire the
            traveler within. Plus, get 20% off at our online shop. Every week
            you'll receive expert advice, tips, exclusive offers, and much more.
          </p>
        </div>
        <div className={`col-md-4 ${styles.colum}`}>
          <div className={`row`}>
            <div className={`col-md-5 ${styles.subscribe}`}>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="form-control"
              />
            </div>
            <div className="col-md-1">
              <button className="btn btn-success">Subscribe</button>
            </div>
          </div>
          <div className={`row mt-4 p-0`}>
            <p className={`text-dark`}>
              Subscribe to Tripify newsletters and promotions. <br /> Read our{" "}
              <a href="#"> Privacy Policy.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
