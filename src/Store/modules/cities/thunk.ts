import api from "../../../Services/api";
import { getCitiesByState } from "./actions";

export const getCitiesByStateThunk = (state: string) => (dispatch: any) => {
  api
    .get(`/cities?state=${state}`)
    .then((response) => {
      dispatch(getCitiesByState(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
