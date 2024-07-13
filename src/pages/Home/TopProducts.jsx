import { useState } from "react";
import Choices from "../../ui/common/Choices";
import Products from "../../ui/common/Products";
import productsData from "../../../public/data/productsData";
import { NavLink } from "react-router-dom";

function TopProducts() {
  const [category, setCategorie] = useState("All");
  const productsList =
    category === "All"
      ? productsData.slice(0, 12)
      : productsData.filter((item) => item.category === category);
  return (
    <section>
      <h2 className="text-center text-2xl text-text font-bold tracking-wide mb-5">
        Top Products
      </h2>
      <Choices category={category} onClick={setCategorie} />
      <Products productsList={productsList} />
      <li className="container m-auto border-2 border-text-muted flex justify-center items-center rounded px-3 py-5 my-5 ">
        <NavLink
          to="products"
          className="text-text hover:text-white transition-colors duration-200 text-xl"
        >
          Browse All <br />
          Product ➡
        </NavLink>
      </li>
    </section>
  );
}

export default TopProducts;
