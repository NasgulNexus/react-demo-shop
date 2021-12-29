export const ADD_TO_TABLES = "ADD_TO_TABLES";
export const DELETE_FROM_TABLES = "DELETE_FROM_TABLES";

export const addToTables = index => {
  return {
    type: ADD_TO_TABLES,
    payload: index
  };
};

export const deleteFromTables = index => {
  return {
    type: DELETE_FROM_TABLES,
    payload: index
  };
};
