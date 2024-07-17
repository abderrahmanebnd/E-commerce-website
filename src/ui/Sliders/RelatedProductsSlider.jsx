import { useEffect } from "react";
import { useParams } from "react-router-dom";

import productsData from "../../../public/data/productsData";

import "swiper/css";
import "swiper/css/pagination";
import "../../swiperConfig";

import ProductCard from "../common/ProductCard";

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
            <ProductCard item={item} />
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
}

export default RelatedProducts;
