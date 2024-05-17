import React from 'react'
import styles from "./cards.module.css"

export default function Cards() {
    const data = [
        {
         image: require('../../../../../assets/travelCards.webp'), 
         type: "WILDLIFE AND NATURE",
         caption:"Lonely Plan-it: How to plan a trip to see the northern lights in Europe",
         timendate: "7 min read • Dec 10, 2022",
         description:"Seeing the northern lights in on many travelers' bucket list. But how do you plan a trip to see a natural phenomenon? Egill Bjarnason shares his tips."
        },
        {
            image: require('../../../../../assets/travelCards1.webp'), 
            type: "WILDLIFE AND NATURE",
            caption:"The top 14 things to do with kids in Canada",
            timendate: "10 min read • Dec 7, 2022",
            description:"Canada offers an abundance of wide open spaces and bustling metropolitan areas that are sure to surprise and delight the kids who visit - and their parents."
           },
           {
            image: require('../../../../../assets/travelCards2.webp'), 
            type: "HIKING",
            caption:"12 unforgettable hikes around the world",
            timendate: "10 min read • Dec 6, 2022",
            description:"Hiking creates a connection to a place and its landscapes. Here are 12 incredible walks from around the world to inspire you."
           },
        
      ];
  return (
    <div className={styles.container}>
    {data.map((card) => {
        return(
            <div className={styles.cardContainer}>
                <img src={card.image} className={styles.image}></img>
                <div className={styles.infoContainer}>
                    <h7 className={styles.type}>{card.type}</h7>
                    <h5 className={styles.caption}>{card.caption}</h5>
                    <p className={styles.timendate}>{card.timendate}</p>
                    <p className={styles.description}>{card.description}</p>
                </div>

            </div>
        )
        
    })}
    </div>
  )
}
