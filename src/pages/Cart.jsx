import { useSelector } from "react-redux";
import Footer from "../ui/common/Footer";
import CartItems from "../features/cart/CartItems";
import OrderSummary from "../features/cart/OrderSummary";
import EmptyCart from "../features/cart/EmptyCart";
import productsData from "../../public/data/productsData";

function Cart() {
  const cartItemsIds = useSelector((store) => store.cart.cartItems);
  const products = [];
  cartItemsIds?.forEach((item) => {
    products.push(productsData[item.id - 1]);
  });

  const cartItemsNum = cartItemsIds.length;

  const originalPr = products
    .reduce((prev, curr) => {
      return prev + curr?.originalPrice;
    }, 0)
    .toFixed(2);

  const discount = products
    .reduce((prev, curr) => {
      return prev + (curr?.originalPrice - curr?.finalPrice);
    }, 0)
    .toFixed(2);

  return (
    <section className="bg-bgColor">
      {cartItemsNum > 0 ? (
        <div className="pt-28 bg-bgColor container m-auto px-3 gap-20 flex flex-col md:flex-row mb-24">
          <CartItems products={products} />
          <OrderSummary originalPr={originalPr} discount={discount} />
        </div>
      ) : (
        <EmptyCart />
      )}
      <Footer />
    </section>
  );
}

export default Cart;
