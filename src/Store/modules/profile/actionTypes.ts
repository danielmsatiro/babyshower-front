import { IUser } from "../../../interfaces/user";

export const PARENT_SUCCESS = "PARENT_SUCCESS";
export const PARENT_LOADING = "PARENT_LOADING";
export const PARENT_FAIL = "PARENT_FAIL";

export interface ParentSuccess {
  type: typeof PARENT_SUCCESS;
  payload: IUser;
}
export interface ParentLoading {
  type: typeof PARENT_LOADING;
}

export interface ParentFail {
  type: typeof PARENT_FAIL;
}

export type ParentDispatchTypes = ParentLoading | ParentSuccess | ParentFail;
