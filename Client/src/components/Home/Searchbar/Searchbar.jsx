import React, { useState, useEffect } from "react";
import styles from "./searchbar.module.css";
import { countryCityData } from "./SearchBarData";

export default function Searchbar() {
  const [selectedCountry, setselectedCountry] = useState("United States")
  const [selectedCities, setselectedCities] = useState([])
  const [selectedCity, setselectedCity] = useState("New York")

  useEffect(()=>{
    setselectedCities(countryCityData[selectedCountry])
  },[selectedCountry])

  return (
    <section
      className={`search-banner text-white py-3 ${styles.searchform}`}
      id="search-banner"
    >
      <div className="container py-5 my-5">
        <div className={styles.child}>
          <div className="row">
          <h2 className={`text-light text-center mb-5 ${styles.searchbarheading}`}>
            Explore The World With a Smile
          </h2>
          </div>
          <form className={`card row ${styles.searchcard}`}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group ">
                    <label htmlFor="country" className={styles.label}>
                      Country:
                    </label>
                    <select id="country" className="form-select" value={selectedCountry} onChange={(event)=>{
                      setselectedCountry(event.target.value)
                    }}>
                      {
                        Object.keys(countryCityData).map((element, index)=>{
                          
                          return <option value={element}>{element}</option>
                        })    
                      }
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group ">
                    <label htmlFor="city" classNameName={styles.label}>
                      City:
                    </label>
                    <select id="city" className="form-select" value={selectedCity} onChange={(event)=>{
                      setselectedCity(event.target.value)
                    }}>                 
                      {
                      selectedCities.map((city, index)=>{
                        return <option value={city}>{city}</option>
                      })}
                      
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group ">
                    <label htmlFor="hotelstandard" classNameName={styles.label}>
                      Hotel:
                    </label>
                    <select id="hotelstandard" className="form-select">
                      <option selected>5 Star</option>
                      <option>4 Star</option>
                      <option>3 Star</option>
                      <option>Executive</option>
                      <option>Luxurious</option>
                      <option>Standard</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4">
                  <div className="form-group ">
                    <label htmlFor="checkIn" classNameName={styles.label}>
                      Check In:
                    </label>
                    <input
                      className="col-md-12 form-control mb-4"
                      id="checkIn"
                      type="date"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group ">
                    <label htmlFor="checkOut" classNameName={styles.label}>
                      Check Out:
                    </label>
                    <input
                      className="col-md-12 form-control mb-4"
                      id="checkOut"
                      type="date"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <button
                    type="button"
                    className="btn btn-success mt-4 pl-5 pr-5"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
