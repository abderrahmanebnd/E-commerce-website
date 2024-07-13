import React, { useEffect, useState } from "react";
import productsData from "../../../public/data/productsData";
import { NavLink } from "react-router-dom";

function SearchBar({ onClose }) {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleInputChange = (e) => {
    const userInput = e.target.value.toLowerCase();
    setInput(userInput);

    if (userInput === "") {
      setFiltered([]);
    } else {
      const filtered = productsData
        .filter((product) => product.title.toLowerCase().includes(userInput))
        .map((product) => [product.id, product.title]);
      setFiltered(filtered);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center p-4 pt-14 "
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()} className=" w-full max-w-xl">
        <input
          type="text"
          placeholder="Search for product..."
          className="p-2 border-2 bg-bgColor border-text-muted rounded w-full mx-auto  outline-none focus:border-text mb-5"
          value={input}
          onChange={handleInputChange}
        />
        <div className=" w-full ">
          {filtered.length > 0 && (
            <ul
              className="bg-bgColor border  border-text-muted shadow-lg p-3 
            max-h-64 overflow-y-auto"
            >
              {filtered.map((item, index) => (
                <li key={index} className=" py-2">
                  <NavLink
                    to={`products/${item[0]}`}
                    className="hover:text-main-2"
                    onClick={onClose}
                  >
                    {item[1]}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
