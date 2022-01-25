export const ADD_TO_TABLES = "ADD_TO_TABLES";
export const DELETE_FROM_TABLES = "DELETE_FROM_TABLES";

export const addToTables = id => {
  return {
    type: ADD_TO_TABLES,
    payload: { id }
  };
};

export const deleteFromTables = id => {
  return {
    type: DELETE_FROM_TABLES,
    payload: { id }
  };
};
