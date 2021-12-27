import { ADD_TO_FAVORITES, DELETE_TO_FAVORITES } from "../actions/favorites";

const initialState = [];

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      return [...state, action.payload];
    }
    case DELETE_TO_FAVORITES: {
      const arr = state.splice(state.indexOf(action.payload), 1);
      return [...state, arr];
    }
    default:
      return state;
  }
}
