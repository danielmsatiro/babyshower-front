import { Dispatch } from "redux";
import api from "../../../Services/api";
import {
  CITIES_FAIL,
  CITIES_LOADING,
  CITIES_SUCCESS,
  CitiesDispatchTypes,
} from "./actionTypes";

export const getCitiesByStateThunk =
  (state: string) => async (dispatch: Dispatch<CitiesDispatchTypes>) => {
    try {
      dispatch({
        type: CITIES_LOADING,
      });

      const res = await api.get(`/cities?state=${state}`);

      dispatch({
        type: CITIES_SUCCESS,
        payload: res.data.cities,
      });
    } catch (e) {
      dispatch({
        type: CITIES_FAIL,
      });
    }
  };
