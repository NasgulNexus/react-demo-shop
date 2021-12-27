export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_TO_CART = "DELETE_TO_CART";
export const INCREMENT_CART = "INCREMENT_CART";
export const DECREMENT_CART = "DECREMENT_CART";

export const addToCart = index => {
  return {
    type: ADD_TO_CART,
    payload: index
  };
};

export const deleteToCart = index => {
  return {
    type: DELETE_TO_CART,
    payload: index
  };
};

export const incrementCart = index => {
  return {
    type: INCREMENT_CART,
    payload: index
  };
};

export const decrementCart = index => {
  return {
    type: DECREMENT_CART,
    payload: index
  };
};
