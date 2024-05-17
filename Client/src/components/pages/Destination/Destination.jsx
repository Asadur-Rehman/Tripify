import React from "react";
import styles from "./destination.module.css";
import Carousel from "react-bootstrap/Carousel";
import NavBar from "../../Navbar/Navbar";
import Card from "../../Home/Card/Card";
import Footer from "../../Footer/Footer";
import { useParams } from "react-router-dom";

export default function Destination() {
  const {name} = useParams();
  const {city} = useParams();

  return (
    <>
      <div className={`${styles.maincontainer}`}>
        <NavBar />
        <Carousel fade className={styles.carousaldiv}>
          <Carousel.Item className={styles.carousaldiv}>
            <img
              className={`d-block ${styles.carousalimg}`}
              src={require("../../../assets/chitral1.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.carousaldiv}>
            <img
              className={`d-block ${styles.carousalimg}`}
              src={require("../../../assets/chitral2.jpg")}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.carousaldiv}>
            <img
              className={`d-block ${styles.carousalimg}`}
              src={require("../../../assets/chitral3.jpg")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={`row m-0 ${styles.lowercontainer}`}>
        <div className={`col-7 ${styles.left}`}>
          <h1 className="p-0 m-0 text-success">{name}</h1>{" "}
          <span className="text-muted">{city}</span>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            aperiam. Fugiat consectetur ducimus ullam commodi libero vel quis?
            Et, rerum perspiciatis! Magni nostrum, delectus dolorem dolorum ad
            quo ratione illum iusto, qui repellat sunt quod labore, debitis
            autem deserunt facilis. Numquam quas asperiores et rerum voluptatem
            ducimus, eveniet aspernatur, sequi, ab est perferendis ea nihil eum
            laudantium expedita! Accusamus, similique harum magnam sequi in
            dolor beatae officiis totam nesciunt voluptatem aperiam accusantium
            perspiciatis vel maxime atque architecto quasi ipsum, sed dolores
            molestiae natus? Itaque reiciendis minima ea quidem maiores,
            repudiandae libero rerum error sit fugit officiis nemo laboriosam
            quisquam recusandae eaque nulla esse distinctio assumenda laudantium
            vitae. Necessitatibus quibusdam ut fugiat aliquid hic recusandae vel
            dolore cum laboriosam. Praesentium ut, possimus sapiente dignissimos
            dolorem pariatur nihil molestias accusamus itaque, laudantium odit,
            nisi provident non. Modi magnam sit facilis vitae ipsa ullam omnis
            ab! Dolor incidunt quaerat facilis, tempora officia laborum, sunt
            est dicta delectus nihil laudantium commodi repellendus obcaecati
            labore eaque tenetur voluptatum perspiciatis similique. Vitae porro
            saepe veniam dicta ut dignissimos soluta aperiam laudantium tempora
            incidunt nobis eos accusantium optio, sunt officiis esse aut non
            earum. Officia doloribus voluptatem, eius architecto, quaerat
            perspiciatis necessitatibus cum fuga nemo, ex ab doloremque aut quo
            voluptas sed repudiandae eos rerum modi vitae vero dolorem nobis.
            Repellat aperiam, nesciunt sapiente, pariatur magni quos magnam quia
            eius aut suscipit nihil non praesentium fugiat dolores quibusdam at
            maiores maxime laborum. Eligendi voluptatibus mollitia blanditiis
            dolores! Dignissimos quo delectus voluptates velit, nam, officiis,
            molestiae quos non nostrum hic cum ad? Beatae nisi sed quaerat
            architecto? Maxime quidem omnis magnam, fugiat amet similique minima
            aperiam voluptatibus. Accusantium commodi, nemo sit ipsam odio,
            laboriosam fugiat ex, optio doloribus distinctio eius dolor!
            Incidunt dolorem iste error quod odit expedita aut vero fugiat
            debitis laudantium consectetur similique, consequatur nesciunt sed!
          </p>
          <h3 className="text-success">Culture</h3>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            fugiat nemo placeat nostrum suscipit ut, itaque provident eum sequi
            voluptatibus molestias dignissimos consectetur vitae? Explicabo amet
            maxime quas dolor, commodi, eius quos sapiente quidem eligendi
            minima repellendus quam ipsa rem ipsam aperiam fugit assumenda
            quisquam omnis corrupti aspernatur porro, unde perspiciatis.
            Perferendis sit praesentium possimus nulla quis similique animi
            exercitationem corporis, vitae nostrum, officiis quaerat totam
            delectus rerum illo commodi facere enim provident. Qui reprehenderit
            omnis totam ea cumque neque consectetur perspiciatis hic possimus
            error facere ut molestias quam a enim accusantium aliquid.
          </p>
          <h3 className="text-success">Main Points</h3>
          <p className="my-4 w-75">
            Kalash Valley, Chitral Fort, Bumburet, Chitral Museum, Ayun, Rumber,
            Garam Chashma, Chitral Gol National Park
          </p>
        </div>
        <div className={`col-5 ${styles.right}`}>
          <div className="row rounded-4">
            <img
              src={require("../../../assets/chitral1.jpg")}
              alt=""
              className="rounded-4 p-1"
            />
          </div>

          <div className={`row d-flex ${styles.imgrow}`}>
            <img
              src={require("../../../assets/chitral1.jpg")}
              alt=""
              className="col-5 rounded-4 p-1"
            />
            <img
              src={require("../../../assets/chitral1.jpg")}
              alt=""
              className="col-7 rounded-4 p-1"
            />
          </div>
          <div className={`row d-flex ${styles.imgrow}`}>
            <img
              src={require("../../../assets/chitral1.jpg")}
              alt=""
              className="col-7 rounded-4 p-1"
            />
            <img
              src={require("../../../assets/chitral1.jpg")}
              alt=""
              className="col-5 rounded-4 p-1"
            />
          </div>
        </div>
      </div>

      <div className={`row ${styles.destinationcards}`}>
        <h3 className="mt-3">Explore More</h3>
        <Card/>
      </div>
      <Footer/>
    </>
  );
}
