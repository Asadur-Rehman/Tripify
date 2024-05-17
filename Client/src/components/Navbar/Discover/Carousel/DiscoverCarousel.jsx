import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./carousel.module.css";

const data = [
  {
    image: require("../../../../assets/discover.jpg"),
    caption: "Pakistan",
    description:
      "Pakistan is A Beautiful country with rich tradition and mind freshning sights. Islamabad is the capital city of Pakistan. Pakistan is home to some of the greatest historical monuments of all time  ",
  },
  {
    image: require("../../../../assets/discover1.jpg"),
    caption: "The Netherlands",
    description:
      "We were once the global superpower. We are currently on a break to give the U.S. a chance, but some people are getting restless here and already dusting off their bicycles. Just saying.We are on average the tallest people in the world. You’d almost think that would be related to us being below sea level. At least our heads will stick out.",
  },
  {
    image: require("../../../../assets/discover2.jpg"),
    caption: "Australia",
    description:
      "200 Australians angry with the government moved to Paraguay and declared a colony of “New Australia”. The two richest women in Australia are also the two richest people in Australia. Our coat of arms features the Emu and Kangaroo not just because they are national animals, but because they cannot walk backwards, being a symbol that Australia cannot go backwards.",
  },
];
export default function DiscoverCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      interval={4000}
      fade={true}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className={`d-block ${styles.discoverImages}`}
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
