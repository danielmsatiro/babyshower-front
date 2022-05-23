import api from "../../../Services/api";
import { deleteParents, registerParents, updateParents } from "./actions";

interface Parents {
  id: number;
  name: String;
  email: String;
  phone: String;
}

export const addParentThunk = (data: Parents) => (dispatch: any) => {
  api
    .post(`/parents`, data)
    .then((response) => {
      dispatch(registerParents(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const UpdateParentThunk = (data: Parents, id: number) => (dispatch: any) => {
  api
    .patch(`/parents/${id}`, data)
    .then((response) => {
      dispatch(updateParents(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const DeleteParentThunk = (idParent: number) => (dispatch: any) => {
  api
    .delete(`/parents/${idParent}`)
    .then((_) => {
      dispatch(deleteParents(idParent));
    })
    .catch((error) => {
      console.log(error);
    });
};