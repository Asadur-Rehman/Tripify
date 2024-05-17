import React from "react";
import styles from "./suggestion.module.css";
import Footer from "../../Footer/Footer";
import NavBar from "../../Navbar/Navbar";
import SuggAndAppForm from "../../../components/SuggAndAppForm/SuggAndAppForm";

export default function Suggestion() {
  return (
    <>
      <NavBar />
      <div className={`${styles.maincontainer}`}>
        <div className={styles.maintext}>
          <h1 className={`${styles.pagetitle} text-success`}>SUGGESTION</h1>
          <h3 className="text-center text-light">Your Suggestion Matters</h3>
        </div>
      </div>
      <div className={`w-75 ${styles.text}`}>
        <p>
          Tripify was started for YOU, so if you have suggestions or feedback on
          how we can improve, please let us know. If you want to see a specific
          country added, culture of any region covered, or anything else of this
          sort, don’t hesitate to ask just let us know. We do our best to keep
          up!
        </p>
        <h4 className="my-4">For Questions</h4>
        <p>
          For questions please be as detailed and thorough as you can, so we can
          do a write up on our site, and answer your question completely. Not
          all questions will be answered on this site. If the question is more
          personal, then we will deal with it through email.
        </p>
        <h4 className="my-4">Specific Topic Covered</h4>
        <p>
          If you want to see a specific topic covered please let us know and
          also let us know why you want to see it covered, and how it will help
          the audience. We appreciate all your ideas, so keep them up.
        </p>
      </div>
      <div className={`my-5 ${styles.openingscontainer}`}>
        <SuggAndAppForm show={false} />
      </div>
      <Footer />
    </>
  );
}
