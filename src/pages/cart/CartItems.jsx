import CartItem from "./CartItem";
function CartItems({ products }) {
  return (
    <ul className="bg-bgColor-2  px-5 py-10 overflow-y-auto flex-grow ">
      {products.map((product) => {
        return <CartItem product={product} key={product.id} />;
      })}
    </ul>
  );
}

export default CartItems;
