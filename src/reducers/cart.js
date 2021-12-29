import { ADD_TO_CART, DELETE_FROM_CART, DECREMENT_CART } from "../actions/cart";

const initialState = [];

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      if (state[action.payload] === undefined) {
        const cartData = { id: action.payload, count: 1 };
        return [...state, cartData];
      }
      state[action.payload].count++;
      return [...state];
    }
    case DELETE_FROM_CART: {
      return state.filter(el => el.id !== action.payload);
    }
    case DECREMENT_CART: {
      state[action.payload].count--;
      if (state[action.payload].count <= 0) {
        return state.filter(el => el.id !== state[action.payload].id);
      } else {
        return [...state];
      }
    }
    default:
      return state;
  }
}
