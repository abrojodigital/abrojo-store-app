import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  authReducer,
  cartReducer,
  categoriesReducer,
  ordersReducer,
  productsReducer,
} from "./reducers/index";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
