import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSortBy,
  setFilterBy,
  setPriceFilter,
  applyFilters,
} from "./filterSlice";
import productsData from "../../../public/data/productsData";
import { BiFilterAlt, BiSort } from "react-icons/bi";

const sortByOptions = [
  "Latest",
  "Featured",
  "Top Rated",
  "Price(Lowest First)",
  "Price(Highest First)",
];

const filterOptions = {
  brands: ["JBL", "boAt", "Sony"],
  categories: ["Headphones", "Earbuds", "Earphones", "Neckbands"],
};

function FilterAside() {
  const [opt, setOpt] = useState(null);
  return (
    <aside className="lg:w-60 lg:bg-bgColor-2 lg:p-4 lg:shadow-lg">
      <div className="hidden lg:block">
        <SortOpts setOpt={setOpt} opt={opt} />
        <FilterOpts setOpt={setOpt} opt={opt} />
      </div>
      <div className="lg:hidden fixed z-10 bottom-0 w-full bg-bgColor shadow-[-6px_-6px_16px_rgba(0,0,0,0.6)]">
        <div className="flex text-text justify-between items-center sm:px-32 px-10 py-3">
          <h3
            className="flex items-center text-xl font-semibold gap-2 cursor-pointer"
            onClick={() => setOpt("sort")}
          >
            <BiSort />
            <span>Sort</span>
          </h3>
          <span>|</span>
          <h3
            className="flex items-center text-xl font-semibold gap-2 cursor-pointer"
            onClick={() => setOpt("filter")}
          >
            <BiFilterAlt />
            <span>Filter</span>
          </h3>
        </div>
        {opt === "sort" && <SortOpts setOpt={setOpt} opt={opt} />}
        {opt === "filter" && <FilterOpts setOpt={setOpt} opt={opt} />}
      </div>
    </aside>
  );
}

export default FilterAside;

export function SortOpts({ setOpt, opt }) {
  const dispatch = useDispatch();
  const handleSortChange = (sortOption) => {
    dispatch(setSortBy(sortOption));
    dispatch(applyFilters());
  };

  return (
    <div
      className={`${
        opt === "sort" ? "scale-100" : "scale-0"
      } lg:scale-100 fixed lg:relative bottom-0 w-full lg:w-auto p-8 lg:p-0 bg-bgColor-2 transition-transform duration-300`}
    >
      <h2 className="border-b border-text-muted pb-3 text-text flex justify-between items-center">
        <span className="text-xl font-bold lg:text-lg">Sort By</span>
        <span
          className="text-4xl cursor-pointer lg:hidden"
          onClick={() => setOpt(null)}
        >
          &times;
        </span>
      </h2>
      <ul className="pt-3">
        {sortByOptions.map((item, index) => (
          <li
            key={index}
            onClick={() => handleSortChange(item)}
            className="cursor-pointer hover:text-main text-text lg:text-sm mb-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FilterOpts({ setOpt, opt }) {
  const dispatch = useDispatch();
  const filterBy = useSelector((store) => store.filter.filterBy);

  const price = filterBy.price;
  const maxPrice = Math.max(
    ...productsData.map((product) => product.finalPrice)
  );

  const handleFilterChange = (filterType, item, checked) => {
    dispatch(setFilterBy({ type: filterType, value: item, checked }));
    dispatch(applyFilters());
  };

  const handlePriceChange = (e) => {
    dispatch(setPriceFilter(Number(e.target.value)));
    dispatch(applyFilters());
  };

  return (
    <div
      className={`${
        opt === "filter" ? "scale-100" : "scale-0"
      } lg:scale-100 fixed lg:relative bottom-0 w-full lg:w-auto p-8 lg:p-0 bg-bgColor-2 transition-transform duration-300 overflow-y-auto h-screen`}
    >
      <h2 className="border-b border-text-muted pb-3 text-text flex justify-between items-center">
        <span className="text-xl font-bold lg:text-lg">Filter By</span>
        <span
          className="text-4xl lg:hidden cursor-pointer"
          onClick={() => setOpt(null)}
        >
          &times;
        </span>
      </h2>
      {Object.keys(filterOptions).map((filterType) => (
        <div key={filterType} className="mt-7">
          <h3 className="text-text capitalize font-semibold mb-3 text-lg lg:text-sm">
            {filterType}
          </h3>
          <ul>
            {filterOptions[filterType].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 mb-3 lg:gap-2 lg:mb-2"
              >
                <input
                  className="custom-checkbox"
                  type="checkbox"
                  id={`${filterType}-${item}`}
                  onChange={(e) =>
                    handleFilterChange(filterType, item, e.target.checked)
                  }
                />
                <label
                  htmlFor={`${filterType}-${item}`}
                  className="text-text lg:text-sm"
                >
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <h3 className="text-text capitalize font-semibold mb-3 mt-7 text-lg lg:text-sm">
        Price
      </h3>
      <label htmlFor="price" className="text-text font-semibold">
        ${price}
      </label>
      <input
        type="range"
        max={maxPrice}
        min="0"
        id="price"
        value={price}
        onChange={handlePriceChange}
        className="w-full max-w-40 h-2 bg-main rounded-lg cursor-pointer block mt-2"
      />
    </div>
  );
}
