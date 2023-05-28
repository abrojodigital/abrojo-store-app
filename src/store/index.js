import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { cartReducer, categoriesReducer, productsReducer } from "./reducers/index";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
