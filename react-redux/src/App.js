import React, { useState } from "react";
import { getAge } from "./actions";

import "./App.css";
import { connect } from "react-redux";

function App(props) {
  const [name, setName] = useState();
  const onChange = e => {
    setName(e.target.value);
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
      <button onClick={() => console.log(props)}>Submit</button>
      <div>Your age is </div>
    </div>
  );
}
const mapStatetoProps = state => {
  return {
    isFetching: state.state.isFetching,
  };
};
export default connect(
  mapStatetoProps,
  { getAge },
)(App);
