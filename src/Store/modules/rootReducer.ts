import { combineReducers } from "redux";

import parents from "./parents/reducer";
import cities from "./cities/reducer";
import token from "./token/reducer";
import user from "./profile/reducer";

export default combineReducers({
  user,
  parents,
  cities,
  token,
});
