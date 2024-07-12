import { IoMdStar } from "react-icons/io";
import productsData from "../../../public/data/productsData";
import Button from "../../ui/common/Button";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function Products({ category }) {
  const productsList =
    category === "All"
      ? productsData.slice(0, 12)
      : productsData.filter((item) => item.category === category);

  const dispatch = useDispatch();

  function addToCart(id) {
    dispatch(addItem(id));
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-4 sm:px-2 gap-3 mb-4 container m-auto min-h-[480px]">
      {productsList.map((item, index) => (
        <li
          key={item.id}
          className=" w-full border-2 rounded border-thumb pb-4 shadow-xl shadow-gray-900 "
        >
          <figure className="bg-bgColor-2 mb-3 py-4">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-2/3 mx-auto"
            />
          </figure>
          <div className="px-5">
            <span className="flex text-main mb-2">
              {Array.from({ length: item.rateCount }, (_, i) => (
                <IoMdStar key={i} />
              ))}
            </span>

            <h1 className="text-text font-bold text-lg">{item.title}</h1>
            <span className="text-text mb-3 inline-block text-sm">
              {item.info}
            </span>
            <hr className="border-text-muted border" />
            <h2 className="text-xl font-bold text-text my-3">
              $ {item.finalPrice} &nbsp;
              <small className="text-text-muted">
                <del className="">$ {item.originalPrice}</del>
              </small>
            </h2>
            <Button
              customClass="w-full text-center"
              onClick={() => addToCart(item.id)}
            >
              Add to cart
            </Button>
          </div>
        </li>
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
