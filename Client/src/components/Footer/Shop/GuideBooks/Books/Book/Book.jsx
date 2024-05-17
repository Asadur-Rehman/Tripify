import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../../../Navbar/Navbar";
import Footer from "../../../../Footer";
import styles from "./book.module.css";
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"

export default function Book() {
  const params = useParams();
  const imageLink = require("../../../../../../assets/" + params.image);
  const [quantity, setquantity] = useState(1);
  const [price, setprice] = useState(params.price);

  return (
    <>
    <Navbar/>
      <div className={styles.container}>
        <div className={styles.bookContainer}>
          <div className={styles.bookImageContainer}>
            <img src={imageLink}></img>
          </div>
          <div className={styles.bookDescriptionSale}>
            <h2 className={styles.bookname}>{params.name}</h2>
            <h4 className={styles.bookDescription}>{params.description}</h4>
            <div className={styles.addToCart}>
              <button
                className={`btn btn-success rounded-4 ${styles.price}`}
              >{`\$${price}`}</button>

              <div className={styles.changeQuantity}>
                <button
                  onClick={() => {
                    if (quantity > 0) {
                      setquantity(quantity - 1);
                      setprice(params.price * (quantity - 1));
                    } else {
                      setquantity(quantity);
                      setprice(params.price * quantity);
                    }
                  }}
                  className={`btn btn-success p-0 ${styles.subtractbutton}`}
                ><AiOutlineMinus/></button>

                <input
                  value={quantity}
                  className={`form-control  ${styles.inputCount}`}
                ></input>
                <button
                  onClick={() => {
                    if (quantity < 25) {
                      setquantity(quantity + 1);
                      setprice(params.price * (quantity + 1));
                    } else {
                      setquantity(quantity);
                      setprice(params.price * quantity);
                    }
                  }}
                  className={`btn btn-success p-0 ${styles.addbutton}`}
                ><AiOutlinePlus/></button>
              </div>
              <button className={`btn btn-success rounded-4 ${styles.button}`}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
