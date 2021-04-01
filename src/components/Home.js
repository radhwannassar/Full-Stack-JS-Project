import { useParams } from "react-router";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div>
      <div>
        <img src="https://cdn.mywardrobehq.com/static/10797/content/images/2021/03/hero-spring-edit.jpg"></img>
        <h5>
          RM-Wardrobe is designed to help you carefully curate your wardrobe so
          you can look effortlessly chic everyday. We want you to get the most
          out of what you already have in your closet and to choose new pieces
          that will integrate well into your wardrobe as a whole. A little
          organization can go a long way when it comes to getting dressed.
          Mixing and matching what you own, comparing new purchases to what you
          have in your closet, planning the outfits you'll wear on vacation, and
          saving all your favorite style inspirations in one place will all help
          you develop your personal style. This was the basic idea behind the
          original version of RM-Wardrobe, which has now evolved to include over
          90 features.
        </h5>
      </div>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="./photo/1.png" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./photo/2.png"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./photo/3.png"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img class="d-block w-100" src="./photo/4.png" alt="4" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./photo/5.png" alt="5" />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./photo/6.png"
                alt="6"
              />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./organize_ipad.webp" alt="7" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./stats_insights.webp" alt="8" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
// const [users, setUsers] = useContext(UserContext);
// console.log(users);
// const {id} =useParams();
// const [name, setName] = useState("aaaa");
// const [type, setType] = useState("bbb");

/* {users &&
        users.map((user) => (
          <div key={user.id}> 
            <p>{user.firstName}</p>
          </div>
        ))}  */
