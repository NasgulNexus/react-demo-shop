import axios from "axios";
import { domain, productUrl, limit } from "./config";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_SEARCH_RESULT = "FETCH_SEARCH_RESULT";

export const fetchGetProducts = () => async dispatch => {
  const response = await axios.get(`${domain}${productUrl}?limit=${limit}`);
  const products = {};
  const searchResult = [];
  response.data.forEach(data => {
    products[data.id] = data;
    searchResult.push(data.id);
  });
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products
  });
  dispatch({
    type: FETCH_SEARCH_RESULT,
    payload: searchResult
  });
};
