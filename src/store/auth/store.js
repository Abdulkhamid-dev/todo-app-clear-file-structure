import { useEffect } from "react";
import axios from "../../utils/axios";


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


const initialState = {
  tasks: [],
  importants: [],
  completed: [],
  initialAuthState,
};

console.log(initialAuthState);
const getAllData = async () => {
  const {id} = initialAuthState.user
  try {
    const { data } = await axios.get("/todos");
    let todos = data.data;
    console.log(todos);
    initialState.tasks = todos
    let importantItems =  todos.filter((item) => item.attributes.is_important === true)
    initialState.importants = importantItems
    let completedItems =  todos.filter((item) => item.attributes.is_completed === true)
    initialState.completed = completedItems
    console.log(initialState);
  } catch (error) {
    console.log(error);
  }
};
getAllData();

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case "SIGN_OUT": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
