import { useParams } from "react-router";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../UserContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Home = () => {
  const [users, setUsers] = useContext(UserContext);
  console.log(users);
  const {id} =useParams();
  const [name, setName] = useState("aaaa");
  const [type, setType] = useState("bbb");


  
  useEffect(() => {
  const categories = { name, type };
  fetch("http://localhost:3001/users/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categories),
  }).then((response) => {
    console.log(response.status);
  });
}, [])

  return (
    <div>
      <div>
      <img src="https://cdn.mywardrobehq.com/static/10797/content/images/2021/03/hero-spring-edit.jpg"></img>
      <h3>RM-Wardrobe is designed to help you carefully curate your wardrobe so you can look effortlessly chic everyday. We want you to get the most out of what you already have in your closet and to choose new pieces that will integrate well into your wardrobe as a whole.

A little organization can go a long way when it comes to getting dressed. Mixing and matching what you own, comparing new purchases to what you have in your closet, planning the outfits you'll wear on vacation, and saving all your favorite style inspirations in one place will all help you develop your personal style. This was the basic idea behind the original version of RM-Wardrobe, which has now evolved to include over 90 features.</h3>
</div>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./book.webp" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./calendar_bench.webp" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./change_how_you_dress.webp" alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./create_outfits.webp" alt="4" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./featured_users.webp" alt="5" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./more_out_of_closet.webp" alt="6" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./organize_ipad.webp" alt="7" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./stats_insights.webp" alt="8" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
         
    </div>
    
    
  );
};

export default Home;
