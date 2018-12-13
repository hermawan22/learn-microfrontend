import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const RECEIVE_DATA = "RECEIVE_DATA";

const ROOT_URL =
  "https://www.google.com/url?q=https://jsonplaceholder.typicode.com/posts&sa=D&ust=1544710532126000&usg=AFQjCNEuehlcrnoGqogQJhCGVMTqWqxgQA";

export const fetchData = () => {
  const request = axios.get(`${ROOT_URL}`);

  return function(dispatch) {
    dispatch({
      type: FETCH_DATA_START
    });

    return request
      .then(response => {
        dispatch({
          type: RECEIVE_DATA,
          payload: response
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: err
        });
      });
  };
};
