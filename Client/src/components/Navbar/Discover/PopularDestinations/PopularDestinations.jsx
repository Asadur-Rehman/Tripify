import React , {useState} from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styles from './popularDestinations.module.css';
import Carousel from 'react-bootstrap/Carousel';
import { cardInfo } from './PopularDestinationsData';

export default function PopularDestinations() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);}
    let limitedcardInfo = []
      // var data = [0,0,0]
      var data = Array.apply(0, {length: cardInfo.length/3});
      
      
      
      
      var sliceStart = 0;
        var sliceEnd = 3;

      // const renderCards = (card, index) => {
      //   return (
      //       <div className={styles.card}>
      //           <div className={styles.imageContainer}>
      //               <img className={styles.image} src={card.image}  alt="slider image"/>
      //           </div>
      //           <div className={styles.intros}>
            

      //           <h2 className={styles.imageContainer}>{card.title}</h2>
      //           <p className={styles.imageContainer}>{card.desc}</p>
      //           </div>
      //       </div>
      //   );
      // };
      const renderCards = (card, index)=>{
        return <Card className={styles.card}>
        <Card.Img className={styles.image} variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            {card.desc}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>;
      }
  return (
    // <div className={styles.container}>
    //     <div className={styles.cardsContainer}>
    //     {cardInfo.map(renderCards)}
    

    //     </div>
    // </div>
    
   <Carousel className={styles.carousel} interval={4000} activeIndex={index} onSelect={handleSelect} pause='hover'>
    {data.map((slide, i) => {
      
      {
        
        
        limitedcardInfo = cardInfo.slice(i+sliceStart,i+sliceEnd)
        sliceStart = sliceStart+2
        sliceEnd = sliceEnd+2
        
        
        console.log(`${limitedcardInfo}`)
        console.log(i)
      }
        return (
         
          <Carousel.Item>
        <CardGroup className={styles.cards}>
          
      {limitedcardInfo.map(renderCards)}
    
    </CardGroup>
      </Carousel.Item>
        )
      })}
    
   </Carousel>
    
    
  )
}
