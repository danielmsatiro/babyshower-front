import { AnyAction, Reducer } from "redux";
import { GET_CITIES } from "./actionTypes";

interface ICity {
  capital: string;
  point_id: number;
  uf: string;
  longitude: number;
  code_ibge: number;
  city: string;
  code_uf: 42;
  state: string;
  latitude: number;
}

interface ICities {
  cities: ICity[];
}

const citiesReducer: Reducer<ICities> = (state = {} as ICities, action) => {
  const { data } = action;
  switch (action.type) {
    case GET_CITIES:
      return data;
    default:
      return state;
  }
};

export default citiesReducer;
