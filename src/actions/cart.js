export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DECREMENT_CART = "DECREMENT_CART";

export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    payload: { id }
  };
};

export const deleteFromCart = id => {
  return {
    type: DELETE_FROM_CART,
    payload: { id }
  };
};

export const decrementCart = id => {
  return {
    type: DECREMENT_CART,
    payload: { id }
  };
};
