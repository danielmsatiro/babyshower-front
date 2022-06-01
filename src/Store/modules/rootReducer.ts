import { combineReducers } from "redux";

import parents from "./parents/reducer";
import cities from "./cities/reducer";

export default combineReducers({
  parents,
  cities,
});
