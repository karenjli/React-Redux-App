import { FETCHING_AGE_START, FETCHING_AGE_SUCCESS } from "../actions";

const initialState = {
  name: "",
  isFetching: false,
  error: "",
  age: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_AGE_START:
      return { ...state, isFetching: true, error: "" };
    case FETCHING_AGE_SUCCESS:
      return { ...state, isFetching: false, age: action.payload };
    default:
      return state;
  }
};
