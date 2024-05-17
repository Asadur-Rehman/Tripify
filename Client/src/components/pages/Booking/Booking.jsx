import { React, useState, useEffect } from "react";
import styles from "./booking.module.css";
import Footer from "../../Footer/Footer";
import NavBar from "../../Navbar/Navbar";
import { FaFilter } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import Hotelcard from "../../Hotelcard/Hotelcard";
import { countryCityData } from '../../Home/Searchbar/SearchBarData';

export default function Booking() {
  const [selectedCountry, setselectedCountry] = useState("United States")
  const [selectedCities, setselectedCities] = useState([])
  const [selectedCity, setselectedCity] = useState("New York")

  useEffect(() => {
    setselectedCities(countryCityData[selectedCountry])
  }, [selectedCountry])

  return (
    <>
      <div className={`${styles.maincontainer}`}>
        <NavBar />
        <div className={styles.mainoption}>
          <h1 className={styles.pagetitle}>Book Hotel</h1>
          <input
            type="text"
            className="form-control rounded-5"
            placeholder="Search Hotel"
          />
        </div>
      </div>
      <div className={`my-5 row mx-4 ${styles.lowercontainer}`}>
        <div className={`col-3 ${styles.left}`}>
          <div className="d-flex align-items-center">
            <FaFilter className="display-6 text-success" />
            <h2 className="ms-4 text-success">Filter</h2>
          </div>
          <div className={`${styles.categorydiv} mt-5`}>
            {/* <h3 className="text-success">Country</h3> */}
            <label htmlFor="country" className={styles.label}>
              Country:
            </label>
            <select id="country" className="form-select" value={selectedCountry} onChange={(event) => {
              setselectedCountry(event.target.value)
            }}>
              {/* {console.log(countryCityData[selectedCountry])} */}
              {
                Object.keys(countryCityData).map((element, index) => {

                  return <option value={element}>{element}</option>
                })
              }
            </select>
          </div>
          <div className={`${styles.countrydiv} mt-5`}>
            <label htmlFor="city" classNameName={styles.label}>
              City:
            </label>
            <select id="city" className="form-select" value={selectedCity} onChange={(event) => {
              setselectedCity(event.target.value)
            }}>
              {
                selectedCities.map((city, index) => {
                  return <option value={city}>{city}</option>
                })}

            </select>
          </div>
          <div className={`${styles.ratingdiv} mt-5`}>
            <h3 className="text-success">Rating</h3>
            <div className="d-flex my-2">
              <BsStar className="me-2" />
              <BsStar className="me-2" />
              <BsStar className="me-2" />
              <BsStar className="me-2" />
              <BsFillStarFill className="me-2" />
            </div>
            <div className="d-flex my-2">
              <BsStar className="me-2" />
              <BsStar className="me-2" />
              <BsStar className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
            </div>
            <div className="d-flex my-2">
              <BsStar className="me-2" />
              <BsStar className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
            </div>
            <div className="d-flex my-2">
              <BsStar className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
            </div>
            <div className="d-flex my-2">
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
              <BsFillStarFill className="me-2" />
            </div>
          </div>
        </div>
        <div className={`col-9 ${styles.right}`}>
          <Hotelcard country={selectedCountry} city={selectedCity}/>
        </div>
      </div>
      <Footer />
    </>
  );
}
