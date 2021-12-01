import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

<<<<<<< HEAD
<<<<<<< HEAD
//import home_img from "./pictures/image (1).jpeg";
import carousel1 from "./pictures/carousel_1.jpg";
import carousel01 from "./pictures/carousel_01.jpg";
import carousel2 from "./pictures/carousel_2.jpg";
import carousel3 from "./pictures/carousel_7.jpg";
=======
import home_img from "./pictures/image (1).jpeg";
=======
//import home_img from "./pictures/image (1).jpeg";
>>>>>>> 49122ef (Integrated Stripe and Cloud functions)
import carousel1 from "./pictures/carousel_1.jpg";
import carousel01 from "./pictures/carousel_01.jpg";
import carousel2 from "./pictures/carousel_2.jpg";
<<<<<<< HEAD
import carousel3 from "./pictures/carousel_3.jpg";
>>>>>>> 846a96c (First commit of Amazon-Clone)
=======
import carousel3 from "./pictures/carousel_7.jpg";
>>>>>>> 49122ef (Integrated Stripe and Cloud functions)
import carousel4 from "./pictures/carousel_4.jpg";
import carousel5 from "./pictures/carousel_5.jpg";

class CarouselSlider extends Component {
  render() {
    return (
      <Carousel
        className="carousel"
        autoPlay={true}
        dynamicHeight={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
      >
<<<<<<< HEAD
<<<<<<< HEAD
        {/* <div>
          <img src={home_img} className="carousel__image" alt="" />
        </div> */}
        <div>
          <img src={carousel1} className="carousel__image" alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={carousel01} className="carousel__image" alt="" />
=======
        <div>
=======
        {/* <div>
>>>>>>> 49122ef (Integrated Stripe and Cloud functions)
          <img src={home_img} className="carousel__image" alt="" />
        </div> */}
        <div>
          <img src={carousel1} className="carousel__image" alt="" />
>>>>>>> 846a96c (First commit of Amazon-Clone)
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={carousel01} className="carousel__image" alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={carousel2} className="carousel__image" alt="" />
        </div>
        <div>
          <img src={carousel3} className="carousel__image" alt="" />
        </div>
        <div>
          <img src={carousel4} className="carousel__image" alt="" />
        </div>
        <div>
          <img src={carousel5} className="carousel__image" alt="" />
        </div>
      </Carousel>
    );
  }
}

export default CarouselSlider;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
