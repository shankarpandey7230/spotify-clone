import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token:
    "BQA35vbCUxITQg0rDcneqSC5NlcZ2fKPvDvSutnTRYWVG03WaXNm0IdXLdSHRypliycaXhqnRJ5-bms6dtplXbMJOvsLG0hXj3k4cvKFyB1DJMV2117WVt5exX92sW0iANVKuqGxDvWIAQDbN2NuxMmH8_4hrRkbelEmpx8GEZErm7AIoNMWNBX3NhrOkVmx8vjN46F5BX1CN4EXFM9i",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
