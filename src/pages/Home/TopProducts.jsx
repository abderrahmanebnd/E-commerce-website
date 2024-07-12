import { useState } from "react";
import Choices from "../../ui/common/Choices";
import Products from "./Products";

function TopProducts() {
  const [category, setCategorie] = useState("All");
  return (
    <section>
      <h2 className="text-center text-2xl text-text font-bold tracking-wide mb-5">
        Top Products
      </h2>
      <Choices category={category} onClick={setCategorie} />
      <Products category={category} />
    </section>
  );
}

export default TopProducts;
