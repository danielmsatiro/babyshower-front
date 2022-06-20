import toast from "react-hot-toast";
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
        payload: {}
      });
      if((e as any).response.status===409){
        toast.error("Já tem algum com este cpf")
      }
      if((e as any).response.status===401){
        localStorage.removeItem("@Babyshower: token");
        localStorage.removeItem("@Babyshower: tokenNode");
        window.location.reload()
      }
    }
  };

export const updateParentById = (data: Partial<IUser>, token: string): any => 
  async (dispatch: Dispatch<ParentDispatchTypes>) => {
    try{
      dispatch({
        type: PARENT_LOADING,
      });
      
      const res: any = await api.patch(`/parents`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(res=> console.log(res.data));

      dispatch({
        type: PARENT_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: PARENT_FAIL,
      });
      console.log(e)
      /* if((e as any).response.status===401){
        localStorage.removeItem("@Babyshower: token");
        localStorage.removeItem("@Babyshower: tokenNode");
        window.location.reload()
      } */
    }
  }

