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

export const getCitiesByState = (data: ICities) => ({
  type: GET_CITIES,
  data,
});
