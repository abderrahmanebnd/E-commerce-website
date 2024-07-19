import { useParams } from "react-router-dom";
import Pictures from "../features/Product/Pictures";
import Details from "../features/Product/Details";
import Footer from "../ui/common/Footer";
import Advantages from "../features/Home/Advantages";
import Filter from "../features/Product/Filter";
import { useState } from "react";
import Specifications from "../features/Product/Specifications";
import Reviews from "../features/Product/Reviews";
import Overview from "../features/Product/Overview";
import RelatedProducts from "../ui/Sliders/RelatedProductsSlider";

function Product() {
  const id = useParams().id;
  const [dataType, setDataType] = useState("specifications");
  return (
    <main className="pt-16  px-3 bg-bgColor min-h-screen">
      <section className="container m-auto flex flex-col gap-10 sm:flex-row ">
        <Pictures id={id} />
        <Details id={id} />
      </section>
      <Filter setDataType={setDataType} dataType={dataType} />
      {dataType === "specifications" && <Specifications />}
      {dataType === "overview" && <Overview />}
      {dataType === "reviews" && <Reviews />}
      <Advantages />
      <RelatedProducts />
      <Footer />
    </main>
  );
}

export default Product;
