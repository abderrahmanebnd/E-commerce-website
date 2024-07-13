import ProductCard from "./ProductCard";

function Products({ productsList }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  px-4 sm:px-2 gap-3 mb-4 container m-auto min-h-[480px]">
      {productsList.map((item, index) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default Products;
