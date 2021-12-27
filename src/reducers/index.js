import { combineReducers } from "redux";
import products from "./products";
import favorites from "./favorites";
import cart from "./cart";
import tables from "./tables";

export default combineReducers({
  products,
  favorites,
  cart,
  tables
});
