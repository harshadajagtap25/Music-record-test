import * as types from "./actionTypes";
const initState = {
  musicRecords: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_MUSIC_REDORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_MUSIC_REDORD_SUCCESS:
      return {
        ...state,
        musicRecords: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_MUSIC_REDORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
