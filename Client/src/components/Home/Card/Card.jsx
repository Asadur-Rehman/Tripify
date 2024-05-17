import React from "react";
import styles from "./card.module.css";
import cardPic from "../../../assets/login.jpg";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const navigate = useNavigate();


  const cardInfo = [
    {
      title: "Dubai",
      btntext: "Explore",
      desc: "UAE",
      img: require("../../../assets/dubai.jpg"),
    },
    {
      title: "Shinghai",
      desc: "China",
      btntext: "Explore",
      img: require("../../../assets/shinghai.jpg"),
    },
    {
      title: "Islamabad",
      desc: "Pakistan",
      btntext: "Explore",
      img: require("../../../assets/islamabad.jpg"),
    },
    {
      title: "New York",
      desc: "USA",
      btntext: "Explore",
      img: require("../../../assets/newyork.jpg"),
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div className={`${styles.parent} p-0`} key={index}>
        <div className={`col-md-4 card ${styles.piccard}`}>
          <img src={card.img} alt="" />
        </div>
        <div className={`${styles.cardcontent}`}>
          <h2 className={`card-title mx-4 text-light ${styles.cardtitle}`}>
            {card.title}
          </h2>
          <button
            className={`btn btn-outline-light mx-4 mt-2 text-center ${styles.cardbtn}`}
            // navigator={"/destination"}
            onClick={() => {
              navigate(`/destination/${card.title}/${card.desc}`);
            }}
          >
            {card.btntext}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`row ${styles.cardsrow}`} href="#">
        {cardInfo.map(renderCard)}
      </div>
    </>
  );
}
