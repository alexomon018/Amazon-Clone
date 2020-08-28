import React from "react";
import "./Home.css";
import Product from "../Product/Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1233231"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="1233231"
          title="AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
          price={10.44}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51GTuVaUpdL._AC_US327_FMwebp_QL65_.jpg"
        />
      </div>
        <div className="home__row">
        <Product
          id="1233231"
          title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Bordeaux/Copper Rose, One Size (S and L Bands Included)"
          price={188.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41tttgs4alL._AC_US327_FMwebp_QL65_.jpg"
        />
        <Product
          id="1233231"
          title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio Sound| Includes Extra Stylus | Turquoise, Model Number: VSC-550BT-TQ"
          price={44.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41yavwjp-8L._AC_US327_FMwebp_QL65_.jpg"
        />
        <Product
          id="1233231"
          title="Nintendo Switch with Gray Joy‑Con - HAC-001(-01)"
          price={297.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41H6-R6ferL._AC_US327_FMwebp_QL65_.jpg"
        />
        </div>
        <div className="home__row">
        <Product
          id="1233231"
          title="LG 38WN75C-B 38-Inch Class 21:9 Curved UltraWide QHD+ (3840 x 1600) IPS Display with HDR 10 and Tilt/Height Adjustable Stand, Black"
          price={896.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81x55WcoReL._AC_UY327_FMwebp_QL65_.jpg"
        />
        </div>
      {/* Product */}
    </div>
  );
}

export default Home;
