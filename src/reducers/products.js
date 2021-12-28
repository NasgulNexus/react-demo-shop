import { FETCH_PRODUCTS } from "../actions/products";

const initialState = [];

export default function products(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return action.payload;
    }
    default:
      return state;
  }
}
