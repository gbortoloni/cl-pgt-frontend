import { toastr } from "react-redux-toastr";
import axios from "axios";

const URL = "http://localhost:3003/api/authServices";

export function login(values) {
  return submit(values, `${URL}/login`);
}

export function signup(values) {
  return submit(values, `${URL}/signup`);
}

function submit(values, url) {
  return dispatch => {
    axios
      .post(url, values)
      .then(resp => {
        dispatch([
          {
            type: "USER_FETCHED",
            payload: resp.data
          }
        ]);
      })
      .catch(e => {
        toastr.error("Erro", "Houve um problema");
      });
  };
}

export function logout() {
  return { type: "TOKEN_VALIDATED", payload: false };
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      axios
        .post(`${URL}/validateToken`, { token })
        .then(resp => {
          dispatch({
            type: "TOKEN_VALIDATED",
            payload: resp.data.valid
          });
        })
        .catch(e => dispatch({ type: "TOKEN_VALIDATED", payload: false }));
    } else {
      dispatch({ type: "TOKEN_VALIDATED", payload: false });
    }
  };
}
