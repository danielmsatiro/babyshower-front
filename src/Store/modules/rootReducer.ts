import { combineReducers } from "redux";

import parents from "./parents/reducer";
import cities from "./cities/reducer";
import token from "./token/reducer";

export default combineReducers({
  parents,
  cities,
  token,
});
