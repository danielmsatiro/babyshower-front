import { Dispatch } from "redux";
import api from "../../../Services/api";
import {
  PARENT_FAIL,
  PARENT_LOADING,
  PARENT_SUCCESS,
  ParentDispatchTypes,
} from "./actionTypes";

export const getParentByIdThunk =
  (id: number, token: string): any =>
  async (dispatch: Dispatch<ParentDispatchTypes>) => {
    try {
      dispatch({
        type: PARENT_LOADING,
      });

      const res: any = await api.get(`/parents/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        type: PARENT_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: PARENT_FAIL,
      });
    }
  };

/* export const clearProfileThunk =  */
