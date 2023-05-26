/* eslint-disable no-case-declarations */
import { PRODUCTS } from "../../constants/data/products";
import { productsTypes } from "../types";

const { SELECT_PRODUCT } = productsTypes;
const initialState = {
  data: PRODUCTS,
  selected: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      const indexProduct = state.data.findIndex((product) => product.id === action.productId);
      if (indexProduct === -1) return state;
      return {
        ...state,
        selected: state.data[indexProduct],
      };
    default:
      return state;
  }
};

export default productsReducer;
