import React, { useEffect } from "react";
import "./Home.css";

import iphone12 from "./pictures/apple-iphone-12-pro-2.jpg";
import ps5 from "./pictures/playstation5.jpg";
import hydro from "./pictures/hydro.jpg";
import dell_xps_13 from "./pictures/dell_xps.webp";
import ipad_pro from "./pictures/iPad_pro.jpg";
import amazon_echo from "./pictures/amazon_echo.jpg";
import apple_watch from "./pictures/apple_watch.jpg";
import samsung_monitor from "./pictures/samsung_monitor.jpg";
import ipods from "./pictures/iPods.jpg";

import Product from "./Product";
import CarouselSlider from "./Carousel";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    document.title = "Amazon.com. Spend less. Smile more.";
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        {/* <img className="home__image" src={carousel1} alt="" /> */}
        <CarouselSlider className="home__carousel" />
      </div>

      <div className="home__row">
        {/* product */}
        {/* <Product
          id="88699547"
          title="The Lean Startup | Create Radically Successful Businesses"
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          price={19.99}
          rating={5}
        /> */}

        {/* <Product
          id="56981346"
          title="Surface Pro 7 Ultra"
          image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4tjV5?ver=eab4"
          price={1099.99}
          rating={5}
        /> */}

        <Product
          id="56945346"
          title="iPhone 12 Pro"
          image={iphone12}
          price={1399.99}
          rating={5}
        />

        <Product
          id="56983346"
          title="Dell New XPS 13"
          image={dell_xps_13}
          price={1319.99}
          rating={5}
        />

        {/* product */}
      </div>

      <div data-aos="fade-up" className="home__row">
        {/* product */}
        <Product
          id="51234862"
          title="12.9-inch iPad Pro Wi-Fi 128GB - Space Gray"
          image={ipad_pro}
          price={1099.99}
          rating={5}
        />
        <Product
          id="56135482"
          title="Amazon - Echo Dot (4th Gen) Smart Speaker with Alexa | Nardo Fabric"
          image={amazon_echo}
          price={44.99}
          rating={4}
        />
        <Product
          id="23588131"
          title="Apple Watch SE Series 6 40mm | Space Grey"
          image={apple_watch}
          price={499.99}
          rating={5}
        />
        {/* product */}
        {/* product */}
      </div>

      <div className="home__row" data-aos="fade-out-up">
        {/* product */}
        <Product
          id="67768323"
          title='49" Odyssey NEO G9 Gaming Monitor'
          image={samsung_monitor}
          price={1499.99}
          rating={4}
        />
      </div>

      <div className="home__row" data-aos="fade-up">
        <Product
          id="56981356"
          title="AirPods (2nd Generation)"
          image={ipods}
          price={129.99}
          rating={5}
        />
        <Product
          id="56231346"
          title="PlayStation 5 with accessories"
          image={ps5}
          price={598.95}
          rating={5}
        />
        <Product
          id="56581346"
          title="Hydro Flask"
          image={hydro}
          price={49.95}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
