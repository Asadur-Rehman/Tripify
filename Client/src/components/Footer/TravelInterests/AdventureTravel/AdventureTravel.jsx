import React, {useState} from 'react'
import styles from './adventureTravel.module.css'
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../../Footer';
import Navbar from '../../../Navbar/Navbar';
import Cards from './Cards/Cards';
import { dataforAdventureTravels } from './AdventureTravelData';

export default function AdventureTravel() {
    
      const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);}
  return (
    <>
    <Navbar/>
    <Carousel className={styles.carousel} interval={4000} fade={true} activeIndex={index} onSelect={handleSelect}>
       {dataforAdventureTravels.map((slide, i) => {
        return (
          <Carousel.Item>
        <div>        
        <img
          className={`d-block ${styles.discoverImages}`}  
          src={slide.image}
          alt="slider image"
          
        />
        <div className={styles.flex}>
            <div className={`${styles.caption}`}>
                <h1 className={styles.heading}>{slide.caption}</h1>
                <h5 className={styles.description}>{slide.description}</h5>
            </div>
            </div>
        </div>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
      <Cards/>
      <Footer/>
    </>
  )
}
