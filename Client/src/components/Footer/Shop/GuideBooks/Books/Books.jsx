import React from 'react'
import { booksData } from './BooksData'
import styles from './books.module.css'
import Navbar from '../../../../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import Footer from '../../../Footer'
import { useNavigate } from 'react-router-dom'

function Books() {

  const navigate = useNavigate();
  const params = useParams();
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
        <div  className={`${styles.categoryContainer}`} ><h5 className={`${styles.booksCategory}`}>{params.name}</h5></div>
        <div className={styles.booksContainer}>
            {booksData.map((element, index)=>{
              
                return <div className={styles.grid}>
                   
                        <img onClick={()=>{navigate(`/book/${element.name}/${element.imageString}/${element.description}/${element.price}`)}} className={styles.bookImage} src={element["image"]}></img>
                      
                        <p className={styles.bookName}>{element["name"]}</p>
                
                </div>
            })}
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

Books.propTypes = {

}

export default Books

