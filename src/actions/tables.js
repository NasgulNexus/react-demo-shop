export const ADD_TO_TABLES = "ADD_TO_TABLES";
export const DELETE_TO_TABLES = "DELETE_TO_TABLES";

export const addToTables = index => {
  return {
    type: ADD_TO_TABLES,
    payload: index
  };
};

export const deleteToTables = index => {
  return {
    type: DELETE_TO_TABLES,
    payload: index
  };
};
