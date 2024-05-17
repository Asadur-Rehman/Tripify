import React from "react";
import styles from "./aboutus.module.css";
import logo from "../../assets/logo.png";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import Navbar from "../Navbar/Navbar";

export default function Aboutus() {
  const cardInfo = [
    {
      title:
        "We pursue a vision of the world in which all are welcome. We believe travel can help foster the connection and understanding that makes meaningful moments possible.",
    },
    {
      title:
        "We think everyone deserves to experience the joy of travel. Whatever your background or needs and no matter where you want to go: we are here to empower your journey.",
    },
    {
      title:
        "We know travel has a social, economic and environmental consequences. We must equip travelers with the knowledge to make informed choices about their impact, and inspire them to travel with generosity.",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div className={`mx-4 p-4 w-50 text-light rounded-5 text-center ${styles.c4card}`} key={index}>
        <p className={`p-0`}>{card.title}</p>
      </div>
    );
  };
  return (
    <>
      <Navbar />
      <div className={`${styles.container1}`}>
        <div className={`row ${styles.abouttext}`}>
          <h1 className={`text-center text-light ${styles.heading}`}>
            About Us
          </h1>
          <p className={`text-center mb-0 text-light ${styles.subheading}`}>
            For explorers everywhere.
          </p>
        </div>
      </div>
      <div className={`my-5 ${styles.container2}`}>
        <p className={`text-center ${styles.aboutdetail}`}>
          We believe that travel is for everyone. It helps us learn about
          ourselves and the world around us. <br />
          <br />
          Our goal is to help more people from more backgrounds experience the
          joy of exploration. Because we believe this builds a kinder, more
          inclusive, more open-minded world.
          <br />
          <br />
          Like you, travel is in our DNA. At Lonely Planet, we believe travel
          opens the door to the greatest, most unforgettable experiences life
          can offer. And we have learned that the best travel is about putting
          yourself out there, about leaving behind the everyday, about immersing
          yourself, rather than just seeing the sights. <br />
          <br />
          As travelers, you're on a journey, and at Lonely Planet, we're on one,
          too. Over the last two years, travel has transformed. We're thinking
          deeply not just about how we travel but why we travel and how to best
          serve travelers on their journey – and we approach our 50th year with
          a passion and commitment to helping others do it, too.
        </p>
      </div>
      <Subscribe/>
      <div className={`${styles.container4}`}>
        <h1 className={`mx-4 ${styles.c4heading}`}>
          At Tripify, our core values guide our evolution:
        </h1>
        <div className={`mt-4 d-flex justify-content-space-between ${styles.cardsrow}`}>{cardInfo.map(renderCard)}</div>
      </div>
      <Footer/>
    </>
  );
}
