import axios from "axios";
import * as types from "./actionTypes";

const loginUser = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
console.log(payload)
  return axios
    .post("https://reqres.in/api/login",payload)
    .then((r) => {
     return dispatch({
        type: types.LOGIN_SUCCESS,
        payload: r.data.token,
      });
    })
    .catch((e) => {
        dispatch({ type: types.LOGIN_FAILURE, payload: e })});
};

export { loginUser };
