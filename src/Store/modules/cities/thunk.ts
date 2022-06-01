import { Dispatch } from "redux";
import api from "../../../Services/api";
import {
  CITIES_FAIL,
  CITIES_LOADING,
  CITIES_SUCCESS,
  CitiesDispatchTypes,
} from "./actionTypes";

export const getCitiesByStateThunk =
  (state: string): any =>
  async (dispatch: Dispatch<CitiesDispatchTypes>) => {
    try {
      dispatch({
        type: CITIES_LOADING,
      });

      const res: any = await api.get(`/cities?state=${state}&per_page=5000`);

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
