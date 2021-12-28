import axios from "axios";
import { domain, productUrl, limit } from "../config";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchGetProducts = () => async dispatch => {
  const response = await axios.get(`${domain}${productUrl}?limit=${limit}`);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data
  });
};
