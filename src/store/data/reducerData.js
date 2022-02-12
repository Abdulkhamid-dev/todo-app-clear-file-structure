import { useEffect } from "react";
import axios from "../../utils/axios";
import {
  GET_DATAS,
  GET_SEARCH,
  DELETE_EACH,
} from "../actionTypes";

const initialState = [];

export default function gettingDatas(state = initialState, action) {
  switch (action.type) {
    case GET_DATAS: {
      console.log(action.payload, "payyyyloooood");
      return [...state, ...action.payload];
    }
    case DELETE_EACH: {
      return [...state, ...action.payload];
    }
    case GET_SEARCH: {
      return [...action.payload];
    }
    default:
      return state;
  }
}
