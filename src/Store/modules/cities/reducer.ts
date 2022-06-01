import { Reducer } from "redux";
import {
  CITIES_FAIL,
  CITIES_LOADING,
  CITIES_SUCCESS,
  CitiesDispatchTypes,
  CityType,
} from "./actionTypes";

interface DefaultStateI {
  loading: boolean;
  cities?: CityType[];
}

const defaultState: DefaultStateI = {
  loading: false,
  cities: [],
};

const citiesReducer = (state = defaultState, action: CitiesDispatchTypes) => {
  switch (action.type) {
    case CITIES_FAIL:
      return { ...defaultState, loading: false };
    case CITIES_LOADING:
      return { ...defaultState, loading: true };
    case CITIES_SUCCESS:
      return {
        loading: false,
        cities: action.payload,
      };
    default:
      return state;
  }
};

export default citiesReducer;
