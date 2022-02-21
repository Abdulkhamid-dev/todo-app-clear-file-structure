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
