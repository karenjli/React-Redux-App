import axios from "axios";

export const FETCHING_AGE_START = "FETCHING_AGE_START";
export const FETCHING_AGE_SUCCESS = "FETCHING_AGE_SUCCESS";
export const FETCHING_AGE_FAILURE = "FETCHING_AGE_FAILURE";

export const getAge = name => dispatch => {
  dispatch({ type: FETCHING_AGE_START });
  axios
    .get(`https://api.agify.io?name=${name}`)
    .then(res => {
      dispatch({ type: FETCHING_AGE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_AGE_FAILURE,
        payload: err,
      });
    });
};
