import {
  GET_DATAS,
  GET_COMPLETED,
  GET_IMPORTANTS,
  DELETE_EACH,
} from "../actionTypes";

export const getAllData = (payload) => ({
  type: GET_DATAS,
  payload,
});

export const getAllImportant = (payload) => ({
  type: GET_IMPORTANTS,
  payload,
});
export const getAllCompleted = (payload) => ({
  type: GET_COMPLETED,
  payload,
});
export const deleteItem = (payload) => ({
  type: DELETE_EACH,
  payload,
});
