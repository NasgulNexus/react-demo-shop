export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const DELETE_FROM_FAVORITES = "DELETE_FROM_FAVORITES";

export const addToFavorites = id => {
  return {
    type: ADD_TO_FAVORITES,
    payload: id
  };
};

export const deleteFromFavorites = id => {
  return {
    type: DELETE_FROM_FAVORITES,
    payload: id
  };
};
