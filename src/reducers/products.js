import { FETCH_PRODUCTS } from "../actions/products";

const initialSate = [];

export default function products(state = initialSate, action) {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      return action.payload;
    }
    default:
      return state;
  }
}
