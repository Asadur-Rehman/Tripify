import React from "react";
import styles from "./workForUs.module.css";
import Footer from "../../Footer/Footer";
import NavBar from "../../Navbar/Navbar";
import SuggAndAppForm from "../../../components/SuggAndAppForm/SuggAndAppForm";

export default function workForUs() {
  return (
    <>
      <div className={`${styles.maincontainer}`}>
        <NavBar />
        <div className={styles.mainoption}>
          <h1 className={styles.pagetitle}>Work For Us</h1>
          <button className="btn btn-outline-light">Apply Now!</button>
        </div>
      </div>
      <div className={`${styles.container1}`}>
        <h4>''Be Our Partner'' Business Cooperation</h4>
        <p className={`my-4 w-75`}>
          - Are you an independent travel agency looking for a reliable, honest
          partner in Pakistan? <br /> - Does your club, organization, university
          or company organize group tours to Pakistan? <br /> - Do you have a
          group that has a special interest in some places or activities in
          Pakistan? <br /> - Would you like to provide us your Pakistan tour idea so
          that we can work out a unique tour project for you? <br /> - Why not
          make Pakistan Magic Travel your best travel support in Pakistan? <br /> <br />
          Pakistan is one of the fastest-growing tourism markets in the world. Get
          in front of the wave NOW! We invite you to discuss how we can
          cooperate to take advantage of the opportunities that exist. <br />
          Anyone, individuals, organizations, and in particular travel agencies
          can become our partner. If you can organize people to travel together,
          you can take advantage of our 30+ years of experience in arranging
          travel in Pakistan. Pakistan Magic Travel has been in the travel industry
          in Pakistan for almost 30 years. Our knowledge, together with the many
          relationships that we have developed over that period will ensure that
          Pakistan Magic Travel provides all that you want.
        </p>
        <h4>How does it work?</h4>
        <p className={`my-4 w-75`}>
          There are two ways that we can assist you and your customers. Use
          either or both to maximize the benefits to you. <br /> 1. We act as a
          supplier and a booking office in Pakistan for you and offer you the net
          price for all travel products in Pakistan. You market and sell the
          products and make your own decisions about profit or service charges.
          <br />
          <br />
          2. You market our products only by referring clients to us by either
          web site or E-mail. We will be responsible for client contact for tour
          arrangements, bookings, and payments. We will pay you on a commission
          basis and take all the work and worry away from you.
        </p>
        <h4>What are the benefits for your company?</h4>
        <p className={`my-4 w-75`}>
          English-speaking travel professionals will deal with you and your
          customers, providing the best and most up-to-date information and
          prices. <br />
          We will have a local contact in Pakistan to provide backup in an
          emergency or just a familiar voice at the end of a phone while your
          customers are in Pakistan. <br />
          Don’t just fit into an existing plan design, but also consider an
          itinerary that suits your group’s needs. <br />
          <b>Get value for money while ensuring quality. </b>
        </p>
      </div>
      <div className={`d-flex justify-content-center`}>
        <div className={`${styles.container2}`}>
          <h2 className="text-success text-center  mb-3">
            FOR EXPLORERS EVERYWHERE
          </h2>
          <h5 className="text-secondary text-center">
            Join Tripify as we embark on our greatest journey yet - reimagining
            one of the world's most iconic travel brands.
          </h5>
          <p className={`text-dark text-center mt-4`}>
            For almost 50 amazing years we've been a trusted guide to help you
            explore and understand the world around you, while passionate about
            exploring our planet in a responsible and authentic way. We're
            looking for talented people in content, technology and sales to come
            on this incredible adventure with us. We hope you’ll join us on this
            journey.
          </p>
        </div>
      </div>
      <div className={`my-5 ${styles.openingscontainer}`}>
        <SuggAndAppForm show={true} />
      </div>
      <Footer />
    </>
  );
}
