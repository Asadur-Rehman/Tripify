import React from "react";
import styles from "./piccard.module.css";
import cardImg from "../../../assets/loginpage.jpg";

export default function Piccard() {
  const cardInfo = [
    {
      title: "Makran Coast",
      detail:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date: "Last updated 3 mins ago",
      img: require("../../../assets/makran.jpg"),
    },
    {
      title: "Peshawar",
      detail:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date: "Last updated 3 mins ago",
      img: require("../../../assets/peshawar.jpg"),
    },
    {
      title: "Islamabad",
      detail:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date: "Last updated 3 mins ago",
      img: require("../../../assets/monument.jpg"),
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div
        className={`card text-white p-0 ${styles.innerdiv}`}
        style={{ backgroundImage: `url(${card.img})` }}
        key={index}
      >
        <div className={`card-img-overlay ${styles.imgText}`}>
          <h5 className={`ard-title  ${styles.title}`}>{card.title}</h5>
          <p className={`card-text ${styles.detail}`}>{card.detail}</p>
          <p className={`card-text text-warning ${styles.date}`}>{card.date}</p>
        </div>
      </div>
    );
  };
  const cardInfo2 = [
    {
      title: "Kaghan Valley",
      detail:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date: "Last updated 3 mins ago",
      img: require("../../../assets/hunza.jpg"),
    },
    {
      title: "Fairy Meadows",
      detail:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      date: "Last updated 3 mins ago",
      img: require("../../../assets/fairymeadows.jpg"),
    },
  ];
  const renderCard2 = (card, index) => {
    return (
      <div
        className={`card bg-light text-white ${styles.innerdiv2}`}
        key={index}
        style={{ backgroundImage: `url(${card.img})` }}
      >
        <div className={`card-img-overlay ${styles.imgText2}`}>
          <h5 className={`card-title  ${styles.title}`}>{card.title}</h5>
          <p className={`card-text ${styles.detail}`}>{card.detail}</p>
          <p className={`card-text text-warning ${styles.date}`}>{card.date}</p>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.parent}>
      <h2 className={`pt-2 text-success ${styles.section}`}>
        Explore Pakistan
      </h2>
      <div className={`row m-0 ${styles.container}`}>
        {cardInfo.map(renderCard)}
      </div>
      <div className={styles.container2}>{cardInfo2.map(renderCard2)}</div>
    </div>
  );
}
