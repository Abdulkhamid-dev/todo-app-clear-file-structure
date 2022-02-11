import { useEffect } from "react";
import axios from "../../utils/axios";
import {GET_DATAS, GET_COMPLETED, GET_IMPORTANTS, DELETE_EACH} from '../actionTypes'


const initialState = []



export default function gettingDatas(state = initialState, action) {
  switch (action.type) {
    case GET_DATAS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case GET_IMPORTANTS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case GET_COMPLETED: {
      return {
        ...state,
      ...action.payload,
      };
    }
    case DELETE_EACH: {
      return {
        ...state,
      ...action.payload,
      };
    }
    default:
      return state;
  }
}
