import { IoMdStar } from "react-icons/io";
import productsData from "../../../public/data/productsData";
import Button from "../../ui/common/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function Details({ id }) {
  const product = productsData[id - 1];
  const percentageSavings =
    ((product.originalPrice - product.finalPrice) / product.originalPrice) *
    100;

  const dispatch = useDispatch();
  function addToCart(id) {
    dispatch(addItem(id));
  }
  return (
    <ul className="flex-grow ">
      <li className="pb-7 border-b border-thumb">
        <h1 className="text-text font-bold text-2xl">{product.title}</h1>
        <p className="text-text font-semibold mb-3 mt-1 text-lg">
          {product.info}
        </p>
        <span className="inline-flex text-main mb-2">
          {Array.from({ length: product.rateCount }, (_, i) => (
            <IoMdStar key={i} />
          ))}
        </span>
        <span className="text-text text-xl"> | {product.ratings} ratings</span>
      </li>
      <li className="py-7 border-b border-thumb space-y-1">
        <h2 className="text-3xl font-bold text-text ">
          ${product.finalPrice} &nbsp;
          <small className="text-text-muted">
            <del className="">${product.originalPrice}</del>
          </small>
        </h2>
        <div className="flex justify-between items-center gap-3 ">
          <p>
            <span className="text-green-600 block">
              You Save: ({Math.floor(percentageSavings)}%)
            </span>
            <span className="text-text-muted">(Inclusive of all taxes)</span>
          </p>
          <span className="text-white font-semibold  bg-green-700 px-3 py-2 rounded">
            In Stock
          </span>
        </div>
      </li>
      <li className="py-7 border-b border-thumb mb-10">
        <h3 className="text-text font-semibold mb-4 mt-1 text-lg">
          Offers and Discounts
        </h3>
        <div className="flex gap-3">
          <span className="text-text bg-bgColor-2 p-3 border border-text-muted ">
            No Cost EMI on Credit Card
          </span>
          <span className="text-text bg-bgColor-2 p-3 border border-text-muted ">
            {" "}
            Pay Later & Avail Cashback
          </span>
        </div>
      </li>
      <Button customClass="w-52" onClick={() => addToCart(product.id)}>
        Add to cart
      </Button>
    </ul>
  );
}

export default Details;
