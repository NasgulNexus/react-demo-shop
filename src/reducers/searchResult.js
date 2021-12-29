import { FETCH_SEARCH_RESULT } from "../actions/products";

const initialState = [];

export default function searchResult(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_RESULT: {
      return action.payload;
    }
    default:
      return state;
  }
}
