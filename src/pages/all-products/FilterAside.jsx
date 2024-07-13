import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSortBy,
  setFilterBy,
  setPriceFilter,
  applyFilters,
} from "./filterSlice";
import productsData from "../../../public/data/productsData";

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
  const dispatch = useDispatch();
  const filterBy = useSelector((store) => store.filter.filterBy);
  const price = filterBy.price;
  const maxPrice = Math.max(
    ...productsData.map((product) => product.finalPrice)
  );

  const handleSortChange = (sortOption) => {
    dispatch(setSortBy(sortOption));
    dispatch(applyFilters());
  };

  const handleFilterChange = (filterType, item, checked) => {
    dispatch(setFilterBy({ type: filterType, value: item, checked }));
    dispatch(applyFilters());
  };

  const handlePriceChange = (e) => {
    dispatch(setPriceFilter(Number(e.target.value)));
    dispatch(applyFilters());
  };

  return (
    <aside className="bg-bgColor-2 p-4 pb-24 overflow-y-auto h-fit w-60">
      <ul>
        <li className="mb-7">
          <h2 className="border-b border-text-muted pb-3 text-text text-lg font-bold">
            Sort By
          </h2>
          <ul className="pt-3">
            {sortByOptions.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSortChange(item)}
                className="cursor-pointer hover:text-main text-text text-sm mb-2 "
              >
                {item}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h2 className="border-b border-text-muted pb-3 text-text text-lg font-bold">
            Filter By
          </h2>
          {Object.keys(filterOptions).map((filterType) => (
            <div key={filterType} className="mt-7">
              <h3 className="text-text capitalize font-semibold mb-3 text-sm">
                {filterType}
              </h3>
              <ul>
                {filterOptions[filterType].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 mb-2">
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
                      className="text-text text-sm "
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <h3 className="text-text capitalize font-semibold mb-3 mt-7 text-sm">
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
            className="w-full h-2 bg-main rounded-lg  cursor-pointer appea"
          />
        </li>
      </ul>
    </aside>
  );
}

export default FilterAside;
