import { React } from "react";
import styles from "./specialdeals.module.css";
import Footer from "../Footer/Footer";
import mainpic from "../../assets/special-deals.jpg";
import Navbar from './../Navbar/Navbar';

export default function SpecialDeals() {
  const cardInfo = [
    {
      img: "https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      title: "Sunset",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!",
    },
    {
      img: "https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      title: "Sunset",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!",
    },
    {
      img: "https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      title: "Sunset",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!",
    },
    {
      img: "https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      title: "Sunset",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!",
    },
    {
      img: "https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      title: "Sunset",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!",
    },
    {
      img: "https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      title: "Sunset",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div className={`col-lg-4 mt-4 ${styles.card}`} key={index}>
        <div className="card">
          <img
            src={card.img}
            alt=""
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">
              {card.text}
            </p>
            <a href="" className="btn btn-outline-success btn-sm">
              Read More
            </a>
            <a href="" className="btn btn-outline-danger btn-sm mx-2">
              <i className="far fa-heart"></i>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar/>
      <div className={`card rounded-4 jumbotron my-5 ${styles.maincard}`}>
        <div className={`${styles.details} w-50 text-light`}>
          <h1 className="">Special Deals!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a className={`btn btn-success`} href="#" role="button">
            Learn more
          </a>
        </div>
      </div>
      <div className={`row my-5 ${styles.smallcards}`}>
        <h1 className="p-0 ml-4">Explore Deals</h1>
        <div className={`${styles.smallcardsrow} p-0`}>
          {cardInfo.map(renderCard)}
        </div>
      </div>
      <Footer />
    </>
  );
}
