import React from "react";
import styles from "./cookies.module.css";
import CookieConsent from "react-cookie-consent";

export default function Cookies() {
  return (
    <>
      {/* <div
        className={`alert alert-light card mt-4 mx-5 p-4 shadow-sm bg-white rounded-4 ${styles.ccontainer}`}
        role="alert"
      >
        <div className="row">
          <div className={`col-md-7 ${styles.cheadingcontainer}`}>
            <div>
              <h3 className={`alert-heading text-success ${styles.cheading}`}>
                Discover the full Lonely Planet experience.
              </h3>
            </div>
            <div className={`${styles.cdetailtext}`}>
              <p className="m-0">
                Cookies help us enhance our site, provide social media features,
                allow us to analyze our traffic, and deliver personalized travel
                content guaranteed to inspire you to grab your passport.{" "}
                <a href="#" className="text-dark">
                  Find out more
                </a>
              </p>
            </div>
          </div>
          <div className={`col-md-5 ${styles.callowdiv}`}>
            <a href="#" className={`mx-4 text-secondary ${styles.clink}`}>
              Review Cookie Settings
            </a>
            <button className="btn btn-success">Accept</button>
          </div>
        </div>
      </div> */}
      <CookieConsent
        location="bottom"
        cookieName="TripifyCookieConsent"
        style={{ background: "white", display:"flex",padding:"1% 3%",justifyContent: "center", alignItems: "center" }}
        buttonStyle={{ background: "#2B7A78", color: "white", fontSize: "1rem", borderRadius:"5px",width:"100px",height:"40px" }}
        buttonText="Accept"
        expires={375}
        overlay
      >
        <div className="row">
          <div className={`col-md-6 ${styles.cheadingcontainer}`}>
            <div>
              <h3 className={`alert-heading text-success ${styles.cheading}`}>
                Discover the full Lonely Planet experience.
              </h3>
            </div>
            <div className={`${styles.cdetailtext}`}>
              <p className="m-0 text-dark">
                Cookies help us enhance our site, provide social media features,
                allow us to analyze our traffic, and deliver personalized travel
                content guaranteed to inspire you to grab your passport.{" "}
                <a href="#" className={`text-dark ${styles.fmore}`}>
                  Find out more
                </a>
              </p>
            </div>
          </div>
          <div className={`col-md-6 ${styles.callowdiv}`}>
            <a href="#" className={`mx-4 text-secondary ${styles.clink}`}>
              Review Cookie Settings
            </a>
            {/* <button className="btn btn-success">Accept</button> */}
          </div>
        </div>
      </CookieConsent>
    </>
  );
}
