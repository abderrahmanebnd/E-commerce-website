import Advantages from "../features/Home/Advantages";
import Footer from "../ui/common/Footer";
import FilterAside from "../features/all-products/FilterAside";
import Products from "../ui/common/Products";
import { useSelector } from "react-redux";
function AllProducts() {
  const productsList = useSelector((store) => store.filter.filteredProducts);
  return (
    <section className="bg-bgColor min-h-screen pt-20">
      <div className="mt-10 flex gap-2">
        <FilterAside />
        <Products productsList={productsList} />
      </div>
      <Advantages />
      <Footer />
    </section>
  );
}

export default AllProducts;
