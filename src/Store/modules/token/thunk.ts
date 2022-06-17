import { Dispatch } from "redux";
import api from "../../../Services/api";
import { getParentByIdThunk } from "../profile/thunk";
import {
  TOKEN_FAIL,
  TOKEN_LOADING,
  TOKEN_SUCCESS,
  TokenDispatchTypes,
} from "./actionTypes";

interface ICredentials {
  username?: string;
  email?: string;
  cpf?: string;
  password: string;
}

export const getTokenThunk =
  (credentials: ICredentials): any =>
  async (dispatch: Dispatch<TokenDispatchTypes>) => {
    try {
      dispatch({
        type: TOKEN_LOADING,
      });

      const res: any = await api.post(`/parents/login`, credentials);
      localStorage.setItem("@Babyshower: token", res.data.access_token);

      dispatch({
        type: TOKEN_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: TOKEN_FAIL,
      });
    }
  };

export const logoutThunk =
  (): any => async (dispatch: Dispatch<TokenDispatchTypes>) => {
    localStorage.removeItem("@Babyshower: token");

    dispatch({
      type: TOKEN_SUCCESS,
      payload: { access_token: undefined, id: undefined, access_token_node: undefined },
    });
  };
