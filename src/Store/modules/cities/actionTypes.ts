export const CITIES_SUCCESS = "CITIES_SUCCESS";
export const CITIES_LOADING = "CITIES_LOADING";
export const CITIES_FAIL = "CITIES_FAIL";

export type CityType = {
  capital: string;
  point_id: number;
  uf: string;
  longitude: number;
  code_ibge: number;
  city: string;
  code_uf: 42;
  state: string;
  latitude: number;
};

export interface CitiesSuccess {
  type: typeof CITIES_SUCCESS;
  payload: CityType[];
}
export interface CitiesLoading {
  type: typeof CITIES_LOADING;
}

export interface CitiesFail {
  type: typeof CITIES_FAIL;
}

export type CitiesDispatchTypes = CitiesLoading | CitiesSuccess | CitiesFail;
