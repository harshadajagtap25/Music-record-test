import * as types from "./actionTypes";
import axios from "axios";

const getMusicRecords = (params) => (dispatch) => {
  dispatch({ type: types.GET_MUSIC_REDORD_REQUEST });

  return axios
    .get("http://localhost:8080/albums", params)
    .then((r) =>
      dispatch({ type: types.GET_MUSIC_REDORD_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: types.GET_MUSIC_REDORD_FAILURE }));
};
const updateMusicRecords = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_MUSIC_REDORD_REQUEST });

  return axios
    .patch(`http://localhost:8080/albums/${id}`, payload)
    .then((r) =>
      dispatch({ type: types.UPDATE_MUSIC_REDORD_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: types.UPDATE_MUSIC_REDORD_FAILURE }));
};

export { getMusicRecords, updateMusicRecords };
