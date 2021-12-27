export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const DELETE_TO_FAVORITES = "DELETE_TO_FAVORITES";

export const addToFavorites = data => {
  return {
    type: ADD_TO_FAVORITES,
    payload: data
  };
};

export const deleteToFavorites = data => {
  return {
    type: DELETE_TO_FAVORITES,
    payload: data
  };
};
