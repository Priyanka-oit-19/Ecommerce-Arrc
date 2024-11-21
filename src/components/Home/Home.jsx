import React from "react";
import './Home.css'
import Shopping from "../Assets/shopping.png";
import books from "../Assets/booksjpg.jpg";
import Electronics from "../Assets/electronicpng.png";
import toys from "../Assets/jwellerypng.png";
import jwellery from "../Assets/toysjpg.jpg";
import automobiles from "../Assets/automobilesjpg.jpg";
import fashion from "../Assets/fashion jpg.jpg";
import sport from "../Assets/sportpng.png";
import camera from "../Assets/camera png.png";
import phone from "../Assets/phonepng.png"
import Health from "../Assets/health jpg.jpg"
import cosmetic from "../Assets/cosmeticpng.png"
// import { FcElectronics } from "react-icons/fc";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";


const Home = () => {
  const products = [
    { img: books, title: "Books & Office", count: 3 },
    { img: Electronics, title: "Electronic", count: 3 },
    { img: toys, title: "Toys & Hobbies", count: 2 },
    { img: jwellery, title: "Jewellery & Watches", count: 3 },
    { img: automobiles, title: "Automobiles", count: 0 },
    { img: fashion, title: "Fashion & Beauty", count: 8 },
    { img: sport, title: "Sport & Outdoor", count: 2 },
    { img: camera, title: "Camera & Photo", count: 4 },
    { img: Health, title: "Health & Beauty", count: 3 },
    { img: phone, title: "Smartphone & Tablet", count: 4 },
  ];

  return (
    <>
      <div className="home1">
        {/* left box */}
        <div className="leftBox">
          <p className="leftBoxHeading">Fresh Foods</p>
          <h1>Get upto 40% off </h1>
          <p>Buy the best organic food for your healthy future and family.</p>
        </div>

        {/* right box */}
        <div id="shopping">
          <img src={Shopping} alt="" />
        </div>
      </div>

      <div className="home2">
        <div className="products">

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="products-slider"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="product text-center p-4 rounded-lg ">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-32 h-32 mx-auto mb-2"
                  />
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-600">{product.count}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>



    </>
  )
}

export default Home;
