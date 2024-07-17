import React, { useEffect } from "react";
import productsData from "../../../public/data/productsData";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "../../swiperConfig";

import "../../styles/hero-slider.css";
import Button from "../common/Button";

const HeroSlider = () => {
  const heroProducts = productsData.filter(
    (item) => item.tag === "hero-product"
  );

  useEffect(() => {
    const swiperEl = document.querySelector("swiper-container");
    swiperEl.initialize();
  }, []);

  return (
    <swiper-container
      loop="true"
      speed="400"
      space-between="100"
      slides-per-view="1"
      pagination-clickable="true"
      autoplay-delay="4000"
      autoplay-disable-on-interaction="false"
      class="my-swiper"
    >
      {heroProducts.map((item, i) => {
        const {
          id,
          title,
          tagline,
          heroImage,
          finalPrice,
          originalPrice,
          type,
        } = item;

        return (
          <swiper-slide key={id} class="swiper-slide">
            <div className="text-center sm:text-left">
              <h2 className="text-text font-semibold sm:text-2xl text-lg mb-3">
                {title}
              </h2>
              <h3 className="capitalize text-text font-bold sm:text-4xl mb-2 tracking-wide sm:mb-6 text-2xl">
                {tagline}
              </h3>
              <h4 className="text-text font-semibold sm:text-2xl text-xl sm:mb-10 mb-5">
                $ {finalPrice} &nbsp;
                <small>
                  <del className="text-text-muted">$ {originalPrice}</del>
                </small>
              </h4>
              <Button type="link" to={`products/${id}`} customClass="m-auto">
                Shop now
              </Button>
            </div>
            <figure>
              <img
                src={heroImage}
                alt={`img of ${title}`}
                className="w-[27rem]"
              />
              <figcaption className="text-bgColor-3 text-[11rem] font-bold absolute -z-10 text-nowrap top-1/2 left-10 -translate-y-1/2 hidden md:block">
                {type}
              </figcaption>
            </figure>
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};

export default HeroSlider;
