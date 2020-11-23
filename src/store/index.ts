import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import * as actionCreators from "./actions";
import reducer from "./reducer";

const enhanceWithDevTools = composeWithDevTools({
  actionCreators,
});

const store = createStore(reducer, enhanceWithDevTools());

export default store;
