import { ADD_TO_CART, DELETE_FROM_CART, DECREMENT_CART } from "../actions/cart";

const initialState = [];

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newData = false;
      state.forEach(el => {
        if (el.id === action.payload.id) {
          el.count++;
          newData = true;
        }
      });
      if (newData === false) {
        const cartData = { id: action.payload.id, count: 1 };
        return [...state, cartData];
      }
      return [...state];
    }
    case DELETE_FROM_CART: {
      return state.filter(el => el.id !== action.payload.id);
    }
    case DECREMENT_CART: {
      const index = state.findIndex(el => el.id === action.payload.id);
      state[index].count--;
      if (state[index].count < 1) {
        return state.filter(el => el.id !== action.payload.id);
      }
      return [...state];
    }
    default:
      return state;
  }
}
