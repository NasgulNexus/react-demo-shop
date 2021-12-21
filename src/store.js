import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const create = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};

export default create;
