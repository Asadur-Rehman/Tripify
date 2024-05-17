import React from 'react'
import styles from "./topEnglishBooks.module.css"
import { useNavigate } from 'react-router-dom'

export default function TopEnglishBooks(props) {
    const navigate = useNavigate();
  return (
    <>
        <div className={styles.container}>
            <h1 className={styles.heading}>{props.heading}</h1>
            <div className={styles.topFlex}>
                <div className={styles.topImageContainer}>
                    <img src={props.topImage1} className={styles.topImage}></img></div>
                <div className={styles.topCaptionHeading}>
                    <div className={styles.captionContainer}>
                    <h1 className={styles.captionHeading}>{props.captionHeading}</h1>
                    <h3 className={styles.captionDescription}>{props.captionDescription}</h3>
                    <button className={`btn btn-primary ${styles.captionButton}`}>Take Me There</button>
                    </div>
                </div>
            </div>
            <div className={styles.continentsContainer}>
                <h3 className={styles.continentHeading}>
                    {props.continentHeading}
                </h3>
                
                <div className={styles.continentFlex}>
                    {props.continentsImages.map((element,index)=>{
                         {console.log(element["name"])}
                        return <div className={styles.continentImageContainer} onClick={()=>{navigate(`/englishbooks/${element["name"]}`)}}>
                        <img className={styles.continentImage} src={props.continentsImages[index]["image"]}></img>
                        <h5 className={styles.continentName}>{props.continentsImages[index]["name"]}</h5>
                        
                    </div>
                    })}
              </div>
            </div>
        </div>
    </>
  )
}
