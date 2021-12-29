import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "../actions/favorites";

const initialState = [];

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      return [...state, action.payload];
    }
    case DELETE_FROM_FAVORITES: {
      return state.filter(id => id !== action.payload);
    }
    default:
      return state;
  }
}
