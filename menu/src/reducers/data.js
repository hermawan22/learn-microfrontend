import {
  FETCH_DATA_START,
  RECEIVE_DATA_REPOS,
  RECEIVE_DATA,
  FETCH_DATA_ERROR
} from "../actions/userDetails";
const INTIAL_STATE = {
  data: [],
  fetching: false,
  fetched: false,
  error: null
};

export default function(state = INTIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        fetching: true
      };
    case RECEIVE_DATA:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
