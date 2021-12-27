import { ADD_TO_TABLES, DELETE_TO_TABLES } from "../actions/tables";

const initialState = [];

export default function tables(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_TABLES: {
      return [...state, action.payload];
    }
    case DELETE_TO_TABLES: {
      const arr = state.splice(state.indexOf(action.payload), 1);
      return [...state, arr];
    }
    default:
      return state;
  }
}
