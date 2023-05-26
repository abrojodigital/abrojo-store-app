import { combineReducers, createStore } from "redux";

import { categoriesReducer, productsReducer } from "./reducers/index";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

export default createStore(rootReducer);
