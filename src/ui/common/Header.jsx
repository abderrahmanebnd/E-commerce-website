import { NavLink } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import ModelUser from "./Model";
import Tooltip from "./Tooltip";
import { IoIosArrowDropupCircle } from "react-icons/io";

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This makes the scrolling smooth
  });
}

function Header() {
  const [showModel, setShowModel] = useState(false);
  const [showSearchTooltip, setShowSearchTooltip] = useState(false);
  const [showCartTooltip, setShowCartTooltip] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [toBottom, setToBottom] = useState(false);
  const hideTimeout = useRef(null);

  const handleMouseEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setShowModel(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setShowModel(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setToBottom(true);
      } else {
        setToBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`min-h-10 fixed z-10 w-full transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-bgColor"
      } text-text`}
    >
      <div className="flex items-center container m-auto p-3">
        <h1>
          <NavLink to="/" className="font-bold text-2xl sm:text-3xl">
            X-SouQ
          </NavLink>
        </h1>
        <ul className="ml-auto flex space-x-8 sm:space-x-14 mr-4">
          <li
            className="cursor-pointer text-2xl sm:text-3xl relative"
            onMouseEnter={() => setShowSearchTooltip(true)}
            onMouseLeave={() => setShowSearchTooltip(false)}
          >
            <AiOutlineSearch />
            {showSearchTooltip && <Tooltip text="Search" />}
          </li>
          <li
            className="cursor-pointer text-2xl sm:text-3xl relative"
            onMouseEnter={() => setShowCartTooltip(true)}
            onMouseLeave={() => setShowCartTooltip(false)}
          >
            <NavLink to="cart">
              <AiOutlineShoppingCart />
            </NavLink>
            {showCartTooltip && <Tooltip text="Cart" />}
          </li>
          <li
            className="cursor-pointer relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AiOutlineUser className="text-2xl sm:text-3xl" />
            {showModel && (
              <div
                className="absolute top-[200%] right-0"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ModelUser />
              </div>
            )}
          </li>
        </ul>
      </div>

      {toBottom && (
        <div
          className="fixed bottom-5 right-4 bg-main text-white w-10 h-10 flex justify-center items-center  font-bold text-3xl rounded cursor-pointer hover:bg-main-2"
          onClick={() => goToTop()}
        >
          <IoIosArrowDropupCircle />
        </div>
      )}
    </header>
  );
}

export default Header;
