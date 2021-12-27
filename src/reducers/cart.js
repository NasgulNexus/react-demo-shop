import {
  ADD_TO_CART,
  DELETE_TO_CART,
  INCREMENT_CART,
  DECREMENT_CART
} from "../actions/cart";

const initialState = [];

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const cartData = { id: action.payload, count: 1 };
      return [...state, cartData];
    }
    case DELETE_TO_CART: {
      return state.filter(el => el.id !== action.payload);
    }
    case INCREMENT_CART: {
      state[action.payload].count++;
      return [...state];
    }
    case DECREMENT_CART: {
      state[action.payload].count--;
      return [...state];
    }
    default:
      return state;
  }
}
