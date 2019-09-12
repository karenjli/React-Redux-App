import React from "react";
import { getAge } from "./actions";

import "./App.css";
import { connect } from "react-redux";

function App({ name, isFetching, error, age }) {
  const onChange = e => {
    name = e.target.value;
  };

  return (
    <div className="App">
      <h2>Let me guess your Age from your Name</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={onChange}
      />
      <button onClick={() => getAge(name)}>Submit</button>
      <div>Your age is {age}</div>
      {console.log(age)}
    </div>
  );
}
const mapStatetoProps = state => {
  return {
    name: state.name,
    isFetching: state.isFetching,
    error: state.error,
    age: state.age,
  };
};

export default connect(
  mapStatetoProps,
  { getAge },
)(App);
