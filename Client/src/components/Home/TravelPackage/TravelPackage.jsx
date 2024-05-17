import React from "react";
import styles from "./travelpkg.module.css";

export default function TravelPackage() {
  const [category, setcategory] = React.useState("Travel Packages");
  const [offer, setoffer] = React.useState("3 days from 218 $ for 2 pers.");
  const [mainheading, setmainheading] = React.useState("City trip incl. Munich Card and Tower Ascent");
  const [details, setdetails] = React.useState(" We look forward to seeing you again in Munich. Our tip: the exclusive travel package with Munich Card and Tower Ascent.");
  return (
    <div className={`float pt-5 ${styles.container}`}>
      <div className={`py-4 ${styles.travelpkgpic}`}>
        <div className={`w-25 ${styles.offer}`}>
          <h5 className={`bg-success p-3 text-light ${styles.offertext}`}>
            {offer}
          </h5>
        </div>
        <div className={styles.floatclear}></div>
        <div className={`w-25 text-light ${styles.heading} my-5`}>
          <p className={`${styles.offername}`}>{category}</p>
          <h1 className={styles.mainheading} >{mainheading}</h1>
          <p className={`w-75 ${styles.offerdetail}`}>
           {details}
          </p>
          <button className={`btn btn-success text-light ${styles.button}`}>
            Book Now
          </button>
        </div>
        <div className={styles.floatclear}></div>
      </div>
    </div>
  );
}
