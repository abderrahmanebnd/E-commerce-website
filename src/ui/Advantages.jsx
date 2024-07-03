import {
  FaCreditCard,
  FaShieldAlt,
  FaShippingFast,
  FaTags,
} from "react-icons/fa";
import Advantage from "./Advantage";

function Advantages() {
  return (
    <section className="container m-auto">
      <h2 className="text-center text-2xl text-text font-bold tracking-wide mt-24 mb-10">
        Our Advantages
      </h2>
      <ul className="grid sm:grid-cols-2 justify-center gap-7 m-auto w-fit sm:gap-x-52 xl:grid-cols-4 xl:gap-20">
        <Advantage title="Express Delivery" info="Ships in 24 Hours">
          <FaShippingFast />
        </Advantage>
        <Advantage title="Brand Warranty" info="100% Original products">
          <FaShieldAlt />
        </Advantage>
        <Advantage title="Exciting Deals" info="On all prepaid orders">
          <FaTags />
        </Advantage>
        <Advantage title="Secure Payments" info="SSL / Secure сertificate">
          <FaCreditCard />
        </Advantage>
      </ul>
    </section>
  );
}

export default Advantages;
