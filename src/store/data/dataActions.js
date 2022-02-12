import {
  GET_DATAS,
  GET_SEARCH,
  DELETE_EACH,
} from "../actionTypes";

export const getAllData = (payload) => ({
  type: GET_DATAS,
  payload,
});


export const deleteItem = (payload) => ({
  type: DELETE_EACH,
  payload,
});

export const searchTask = (payload) => ({
  type: GET_SEARCH,
  payload,
});
