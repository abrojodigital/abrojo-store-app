import { productsTypes } from "../types";

const { SELECT_PRODUCT } = productsTypes;

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productId: id,
});
