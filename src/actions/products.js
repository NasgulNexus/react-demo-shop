import axios from "axios";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchGetProducts = () => async dispatch => {
  const response = await axios.get(
    "https://fakestoreapi.com/products?limit=20"
  );
  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data
  });
};
