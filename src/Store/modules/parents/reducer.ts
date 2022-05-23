import { ADD_PARENT, DELETE_PARENT, UPDATE_PARENT } from "./actionTypes"

const parentsReducer = (state = [], action: any) => {
    const { data } = action;
    switch (action.type) {
        case ADD_PARENT:
            return data
        case UPDATE_PARENT:
            return data
        case DELETE_PARENT:
            return data
        default:
            return state;
  }
};

export default parentsReducer;
