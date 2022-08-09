import * as types from "./actionTypes";
import { saveData,loadData } from "../../utils/accessLocalStorage";
const initState = {
  isAuth:  false,
  token: "",
  isError: false,
  isAuthLoading: false,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
      };

    case types.LOGIN_SUCCESS:
      // let newToken = payload
      // console.log(payload)
      // saveData("token", newToken)
      // saveData("authState", true)
      return {
        ...state,
        isAuth: true,
        token: payload,
        isAuthLoading: false,
      };
    case types.LOGIN_FAILURE:
      
      return {
        ...state,
        isAuth: false,
        token: "",
        isAuthLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export { reducer };
