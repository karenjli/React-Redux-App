import React, { useState } from "react";
import { getAge } from "./actions";

import "./App.css";
import { connect } from "react-redux";

const App = ({ getAge, name, isFetching, error, age }) => {
  const [username, setUsername] = useState("");
  const onChange = e => {
    setUsername(e.target.value);
    console.log(name);
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
      <button onClick={() => getAge(username)}>Submit</button>
      <div>
        <p>Your age is {age} </p>
      </div>
    </div>
  );
};
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
