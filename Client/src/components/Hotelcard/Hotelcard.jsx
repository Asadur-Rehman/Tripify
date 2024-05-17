import { React, useState, useEffect } from "react";
import styles from "./hotelcard.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Hotelcard(props) {
  const [hotels, setHotels] = useState([]);
  const [hotelsFiltered, setHotelsFiltered] = useState([]);
  const country = props.country;
  const city = props.city;

  console.log(country, city);
  console.log(hotels);

  useEffect(() => {
    axios.get('http://localhost:8000/getAllHotels').then((response) => {
      if (response.data.status) {
        setHotels(response.data.result);
      }
    })
  }, [])
  
  useEffect(() => {
    // console.log(hotels);
    setHotelsFiltered((prev)=> {
      const array = hotels.filter(prevItem => prevItem.country === country)
      return array;
    })
  }, [country])

  useEffect(() => {
    // console.log(hotels);
    setHotelsFiltered((prev)=> {
      const array = hotels.filter(prevItem => prevItem.city === city)
      return array;
    })
  }, [city])

  const renderCard = (card, index) => {

    // const base64String = btoa(String.fromCharCode(...new Uint8Array((card.image.data.data))))
    return (
      <div className={` card ${styles.hotelcard}`} key={index}>
        <img
          class="card-img-top"
          src={card.image}
          // src={`data:image/png;base64,${base64String}`}
          alt="Card image cap"
          height='150'
          width='100'
        />
        <div class="card-body">
          <h4 class="card-title">{card.name}</h4>
          <p class="card-text">
            {card.text}
          </p>
          <div class="d-flex">
            <p>
              <b>Country:</b>
            </p>
            &nbsp;<p>{card.country}</p>
          </div>
          <div class="d-flex">
            <p>
              <b>Location:</b>
            </p>
            &nbsp;<p>{card.city}</p>
          </div>
          <Link to={`/bookingform/${card.id}`} class="btn btn-success">
            Explore
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`${styles.cardsRow}`}>{hotelsFiltered.map(renderCard)}</div>
    </>
  );
}
