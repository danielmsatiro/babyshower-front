import { ADD_PARENT, DELETE_PARENT, UPDATE_PARENT } from "./actionTypes"

interface Parents {
    id: number
    name: string
    email: string
    phone: string
  }

export const registerParents = (data: Parents) => ({
    type: ADD_PARENT,
    data,
});

export const updateParents = (data: Parents) => ({
  type: UPDATE_PARENT,
  data,
});

export const deleteParents = (data: number) => ({
  type: DELETE_PARENT,
  data,
});