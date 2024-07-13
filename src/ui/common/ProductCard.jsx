import { IoMdStar } from "react-icons/io";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addItem } from "../../pages/cart/cartSlice";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  const dispatch = useDispatch();
  function addToCart(id) {
    dispatch(addItem(id));
  }

  return (
    <li
      key={item.id}
      className=" w-full border-2 rounded border-thumb pb-4 shadow-xl shadow-gray-900 "
    >
      <figure className="bg-bgColor-2 mb-3 py-4">
        <Link to={`/products/${item.id}`}>
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-2/3 mx-auto hover:scale-110 transition-transform duration-500"
          />
        </Link>
      </figure>
      <div className="px-5">
        <span className="flex text-main mb-2">
          {Array.from({ length: item.rateCount }, (_, i) => (
            <IoMdStar key={i} />
          ))}
        </span>
        <Link to={`/products/${item.id}`}>
          <h1 className="text-text font-bold text-lg">{item.title}</h1>
        </Link>
        <span className="text-text mb-3 inline-block text-sm">{item.info}</span>
        <hr className="border-text-muted border" />
        <h2 className="text-xl font-bold text-text my-3">
          $ {item.finalPrice} &nbsp;
          <small className="text-text-muted">
            <del className="">$ {item.originalPrice}</del>
          </small>
        </h2>
        <Button
          customClass="w-full text-center "
          onClick={() => addToCart(item.id)}
        >
          Add to cart
        </Button>
      </div>
    </li>
  );
}

export default ProductCard;
