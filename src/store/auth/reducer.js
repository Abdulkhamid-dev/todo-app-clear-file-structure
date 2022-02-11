import { useEffect } from "react";
import axios from "../../utils/axios";
import {SIGN_OUT, SIGN_IN, SIGN_UP} from '../actionTypes'


const initialAuthState = localStorage.getItem('token') 
                       ?  {
                         token: localStorage.token,
                         user: {...JSON.parse(localStorage.user)}
                       }
                       : {
                        token: "",
                        user: {
                          id: null,
                          name: "",
                          email: "",
                        },
                       }



console.log(initialAuthState);
// const getAllData = async () => {
//   const {id} = initialAuthState.user
//   try {
//     const { data } = await axios.get(`/todos/?filters[ownerID]=${initialAuthState.user.id}`);
//     let todos = data.data;
//     console.log(todos);
//     initialState.tasks = todos
//     console.log(initialState);
//   } catch (error) {
//     console.log(error); 
//   }
// };
// getAllData();
// const getAllCompleted = async () => {
//   const {id} = initialAuthState.user
//   try {
//     const { data } = await axios.get(`/todos/?filters[ownerID]=${initialAuthState.user.id}&filters[is_completed]=true`);
//     let allCompleted = data.data;
//     console.log(allCompleted);
//     initialState.completed = allCompleted
//     console.log(initialState);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getAllCompleted();
// const getAllImportant = async () => {
//   const {id} = initialAuthState.user
//   try {
//     const { data } = await axios.get( `/todos/?filters[ownerID]=${initialAuthState.user.id}&filters[is_important]=true`);
//     let allImportant = data.data;
//     console.log(allImportant);
//     initialState.importants = allImportant
//     console.log(initialState);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getAllImportant();

export default function authentication(state = initialAuthState, action) {
  switch (action.type) {
    case SIGN_OUT: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SIGN_IN: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
      ...action.payload,
      };
    }
    default:
      return state;
  }
}
