import React, { useEffect } from "react";
import productsData from "../../../public/data/productsData";
import "../../swiperConfig";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "../../styles/featured-slider.css";
import { Link } from "react-router-dom";

const FeaturedSlider = () => {
  const featuredProducts = productsData.filter(
    (item) => item.tag === "featured-product"
  );

  useEffect(() => {
    const swiperEl = document.querySelector("swiper-container");
    swiperEl.initialize();
  }, []);

  return (
    <section className="container m-auto">
      <h2 className="text-center text-2xl text-text font-bold tracking-wide mb-5">
        Featured Products
      </h2>
      <swiper-container
        loop="true"
        speed="400"
        space-between="100"
        slides-per-view="auto"
        pagination-clickable="true"
        effect="coverflow"
        centered-slides="true"
        coverflow-effect-rotate="0"
        coverflow-effect-stretch="0"
        coverflow-effect-depth="50"
        coverflow-effect-modifier="3"
        coverflow-effect-slide-shadows="false"
        autoplay-delay="3500"
        autoplay-disable-on-interaction="false"
        breakpoints='{"768": {"slidesPerView": 2, "spaceBetween": 200}, "992": {"slidesPerView": 3, "spaceBetween": 250}}'
        class="featured-swiper-container"
      >
        {featuredProducts.map((item, i) => {
          const { id, title, images, finalPrice, originalPrice } = item;
          const featuredImage = images[0];
          return (
            <swiper-slide key={id} class="featured-swiper-slide">
              <h1 className="text-text mb-3">{title}</h1>
              <Link to="cart">
                <img src={featuredImage} alt="2" className="w-48 m-auto" />
              </Link>
              <h2 className="text-text font-semibold text-xl mt-3">
                $ {finalPrice} &nbsp;
                <small>
                  <del className="text-text-muted">$ {originalPrice}</del>
                </small>
              </h2>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </section>
  );
};

export default FeaturedSlider;
