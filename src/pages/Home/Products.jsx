import productsData from "../../../public/data/productsData";
import { NavLink } from "react-router-dom";

import ProductCard from "../../ui/common/ProductCard";

function Products({ category }) {
  const productsList =
    category === "All"
      ? productsData.slice(0, 12)
      : productsData.filter((item) => item.category === category);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-4 sm:px-2 gap-3 mb-4 container m-auto min-h-[480px]">
      {productsList.map((item, index) => (
        <ProductCard item={item} key={item.id} />
      ))}
      <li className="w-full border-2 border-text-muted flex justify-center items-center rounded px-3 py-5  ">
        <NavLink
          to="products"
          className="text-text hover:text-white transition-colors duration-200 text-xl"
        >
          Browse All <br />
          Product ➡
        </NavLink>
      </li>
    </ul>
  );
}

export default Products;
