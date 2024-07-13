import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../../public/data/productsData";

const initialState = {
  sortBy: "",
  filterBy: {
    brands: [],
    categories: [],
    price: Math.max(...productsData.map((product) => product.finalPrice)),
  },
  filteredProducts: productsData,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setFilterBy: (state, action) => {
      const { type, value, checked } = action.payload;
      if (checked) {
        state.filterBy[type].push(value);
      } else {
        state.filterBy[type] = state.filterBy[type].filter(
          (item) => item !== value
        );
      }
    },
    setPriceFilter: (state, action) => {
      state.filterBy.price = action.payload;
    },
    applyFilters: (state) => {
      let filtered = productsData;

      // Filter by brand
      if (state.filterBy.brands.length > 0) {
        filtered = filtered.filter((product) =>
          state.filterBy.brands.includes(product.brand)
        );
      }

      // Filter by category
      if (state.filterBy.categories.length > 0) {
        filtered = filtered.filter((product) =>
          state.filterBy.categories.includes(product.category)
        );
      }

      // Filter by price
      filtered = filtered.filter(
        (product) => product.finalPrice <= state.filterBy.price
      );

      // Sort products
      switch (state.sortBy) {
        case "Latest":
          filtered = filtered.sort((a, b) => b.id - a.id);
          break;
        case "Featured":
          filtered = filtered.filter(
            (product) => product.tag === "featured-product"
          );
          break;
        case "Top Rated":
          filtered = filtered.filter((item) => item.rateCount === 5);
          break;
        case "Price(Lowest First)":
          filtered = filtered.sort((a, b) => a.finalPrice - b.finalPrice);
          break;
        case "Price(Highest First)":
          filtered = filtered.sort((a, b) => b.finalPrice - a.finalPrice);
          break;
        default:
          break;
      }

      state.filteredProducts = filtered;
    },
  },
});

export const { setSortBy, setFilterBy, setPriceFilter, applyFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
