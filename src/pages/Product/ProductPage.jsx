import { useParams } from "react-router-dom";
import Pictures from "./Pictures";
import Details from "./Details";
import Advantages from "../../ui/Advantages";
import Footer from "../../ui/Footer";
import Filter from "./Filter";
import { useState } from "react";
import Specifications from "./Specifications";
import Reviews from "./Reviews";
import Overview from "./Overview";
import RelatedProducts from "../../ui/Sliders/RelatedProductsSlider";

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
