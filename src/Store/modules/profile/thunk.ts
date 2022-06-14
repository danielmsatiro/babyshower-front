import { Dispatch } from "redux";
import { IUser } from "../../../interfaces/user";
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
      if((e as any).response.status===401){
        localStorage.removeItem("@Babyshower: token");
        window.location.reload()
      }
    }
  };

export const updateParentById = (data: IUser, id: number, token: string) => 
  async (dispatch: Dispatch<ParentDispatchTypes>) => {
    try{
      dispatch({
        type: PARENT_LOADING,
      });

      const res: any = await api.patch(`/parents/${id}`, {
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
      if((e as any).response.status===401){
        localStorage.removeItem("@Babyshower: token");
        window.location.reload()
      }
    }
  }

