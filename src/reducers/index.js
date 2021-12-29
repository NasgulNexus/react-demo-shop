import { combineReducers } from "redux";
import products from "./products";
import favorites from "./favorites";
import cart from "./cart";
import tables from "./tables";
import searchResult from "./searchResult";

export default combineReducers({
  products,
  favorites,
  cart,
  tables,
  searchResult
});
