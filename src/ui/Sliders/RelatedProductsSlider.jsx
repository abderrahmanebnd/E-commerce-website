import React, { useEffect } from "react";
import { IoMdStar } from "react-icons/io";
import { useParams } from "react-router-dom";

import productsData from "../../../public/data/productsData";

import "swiper/css";
import "swiper/css/pagination";
import "../../swiperConfig";

import Button from "../common/Button";

function RelatedProducts() {
  const id = useParams().id;
  const relatedProducts = productsData.filter(
    (item) => item.category === productsData[id - 1].category
  );

  useEffect(() => {
    const swiperEl = document.querySelector("swiper-container");
    swiperEl.initialize();
  }, []);

  const breakpoints = {
    562: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  };

  return (
    <section className="container m-auto">
      <h2 className="text-center text-2xl text-text font-bold tracking-wide mt-24 mb-20">
        Related Products
      </h2>
      <swiper-container
        loop="true"
        speed="400"
        space-between="30"
        slides-per-view="auto"
        pagination-clickable="true"
        class="my-swiper-container"
        init="false"
        breakpoints={JSON.stringify(breakpoints)}
      >
        {relatedProducts.map((item) => (
          <swiper-slide key={item.id} class="swiper-slide">
            <li className="border-2 rounded border-thumb pb-4 shadow-xl shadow-gray-900">
              <figure className="bg-bgColor-2 mb-3 py-4">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-2/3 mx-auto"
                />
              </figure>
              <div className="px-5">
                <span className="flex text-main mb-2">
                  {Array.from({ length: item.rateCount }, (_, i) => (
                    <IoMdStar key={i} />
                  ))}
                </span>

                <h1 className="text-text font-bold text-lg">{item.title}</h1>
                <span className="text-text mb-3 inline-block text-sm">
                  {item.info}
                </span>
                <hr className="border-text-muted border" />
                <h2 className="text-xl font-bold text-text my-3">
                  $ {item.finalPrice} &nbsp;
                  <small className="text-text-muted">
                    <del>$ {item.originalPrice}</del>
                  </small>
                </h2>
                <Button customClass="w-full text-center">Add to cart</Button>
              </div>
            </li>
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
}

export default RelatedProducts;
