import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "../actions/favorites";

const initialState = [];

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      return [...state, action.payload];
    }
    case DELETE_FROM_FAVORITES: {
      state.splice(state.indexOf(action.payload), 1);
      return [...state];
    }
    default:
      return state;
  }
}
