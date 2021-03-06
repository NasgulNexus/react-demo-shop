import { ADD_TO_TABLES, DELETE_FROM_TABLES } from "../actions/tables";

const initialState = [];

export default function tables(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_TABLES: {
      return [...state, action.payload.id];
    }
    case DELETE_FROM_TABLES: {
      return state.filter(id => id !== action.payload.id);
    }
    default:
      return state;
  }
}
