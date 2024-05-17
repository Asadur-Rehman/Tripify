import React from 'react'
import Footer from '../../Footer/Footer.jsx'
import DiscoverCarousel from './Carousel/DiscoverCarousel.jsx'
import PopularDestinations from './PopularDestinations/PopularDestinations'
import Navbar from '../Navbar.jsx'
import Shashka from './Shashka/Shashka.jsx'

export default function Discover() {
  return (
    <>
    <Navbar/>
    <DiscoverCarousel/>
    <div className="mt-5" style={{marginLeft:"80px"}}>
      <h1 className="text-success">
        Popular Destinations
      </h1>
    </div>
    <Shashka/>
    <PopularDestinations/>
    <Footer/>
    </>
  )
}
