const initialState = {
  product: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        product: action.payload
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        product: [...state.product, action.payload]
      };
    default:
      return state;
  }
};
