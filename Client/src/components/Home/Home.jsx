import React from "react";
import landingPic from "../../assets/landing.jpg";
import styles from "./home.module.css";
import Searchbar from "./Searchbar/Searchbar";
import Navbar from "./../Navbar/Navbar";
import Card from "./Card/Card";
import Footer from "../Footer/Footer";
import TravelPackage from "./TravelPackage/TravelPackage";
import Piccard from "./Card/Piccard";
import Subscribe from "../Subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={`${styles.main}`}>
        <h1 className={`text-light ${styles.maintitle}`}>
          EXPLORE THE WORLD WITH A SMILE
        </h1>
      </div>
      <div className={`${styles.outter}`}>
        <div className={`row ${styles.oheading}`}>
          <div className="col">
            <p className="mb-1">PLAN YOUR TRIP</p>
            <h2>Where to next?</h2>
          </div>

          <div className={`col ${styles.viewbtn}`}>
            <button
              className={`btn btn-outline-success rounded-5 ${styles.viewdest}`}
            >
              View All Destination
            </button>
          </div>
        </div>
        <div>
          <Card />
        </div>
      </div>
      <TravelPackage />
      <Piccard />
      <Subscribe />
      <div className={`row ${styles.partnersrow}`}>
        <h2 className="text-center text-success mb-5">OUR PARTNERS</h2>
        <div className={`col ${styles.plogoDiv}`}>
          <img src={require("../../assets/bookme.png")} alt="" />
        </div>
        <div className={`col ${styles.plogoDiv}`}>
          <img src={require("../../assets/delta.png")} alt="" />
        </div>
        <div className={`col ${styles.plogoDiv}`}>
          <img src={require("../../assets/emirates.png")} alt="" />
        </div>
        <div className={`col ${styles.plogoDiv}`}>
          <img src={require("../../assets/malaysia.png")} alt="" />
        </div>
        <div className={`col ${styles.plogoDiv}`}>
          <img src={require("../../assets/qatar.png")} alt="" />
        </div>
        <div className={`col ${styles.plogoDiv}`}>
          <img src={require("../../assets/singapore.png")} alt="" />
        </div>
        <div className={`col ${styles.plogoDiv}`}>
          <img src={require("../../assets/turkish.png")} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}
