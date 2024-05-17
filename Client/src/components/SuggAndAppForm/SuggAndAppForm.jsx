import React, { useState, useEffect } from "react";
import { countryCityData } from "../Home/Searchbar/SearchBarData";
import styles from "./suggAndAppForm.module.css"

export default function (props) {
  const [selectedCountry, setselectedCountry] = useState("United States")
  const [selectedCities, setselectedCities] = useState([])
  const [selectedCity, setselectedCity] = useState("New York")


  useEffect(()=>{
    setselectedCities(countryCityData[selectedCountry])
  },[selectedCountry])


  return (
    <div className={`w-50 rounded-4 shadow card bg-light ${styles.formcontainer}`}>
      <h1 className={`text-center my-5 text-success`}>{props.show ?"Application":"Suggestion"} Form</h1>
      <form className={`mx-5 my-4`}>
        <div className="row">
          <select
            className="form-select col mx-2"
            aria-label="Default select example" 
            value={selectedCountry}
            onChange={(event)=>{
              setselectedCountry(event.target.value)
            }}
          >
            <option selected>Select Country</option>
            {
              Object.keys(countryCityData).map((element, index)=>{
                
                return <option value={element}>{element}</option>
              })    
            }
            
          </select>
          <select
            className="form-select col mx-2"
            aria-label="Default select example"
            value={selectedCity}
            onChange={(event)=>{
              setselectedCity(event.target.value)
            }}
          >
            <option selected>Select Location</option>
            {
              selectedCities.map((city, index)=>{
                return <option value={city}>{city}</option>
              })}
          </select>
        </div>
        <div className="row my-4">
          <select
            className="form-select col mx-2"
            aria-label="Default select example"
          >
            <option selected>Select Category</option>
            <option value="1">Hotel</option>
            <option value="2">Resturant</option>
            <option value="3">Shop</option>
          </select>
          <select
            className="form-select col mx-2"
            aria-label="Default select example"
          >
            <option selected>Select Time</option>
            <option value="1">24/7</option>
            <option value="2">09:00 AM - 12:00 PM</option>
            <option value="3">Others</option>
          </select>
        </div>
        <div class="row mt-4">
          <div class="col">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              id="firstname"
            />
          </div>
          <div class="col">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              id="lastname"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter your Email"
              id="firstname"
            />
          </div>
          <div class="col">
            <label htmlFor="cnic">CNIC</label>
            <input
              type="text"
              class="form-control"
              placeholder="34101-1234567-1"
              id="lastname"
              pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div>
            <textarea
              name="objective"
              id="objective"
              className="form-control my-4 w-100"
              cols="30"
              rows="5"
              placeholder={props.show?"Enter Your Objective":"Enter Your Suggestion"}>
              </textarea>
          </div>
        </div>
        <div className="row">
          <div>
            <button className="btn btn-outline-success">
              Submit {props.show ?"Application":"Suggestion"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
