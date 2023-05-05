import { React, useReducer } from "react";

function prem(state, action) {
  console.log(state, action.type);
  if (action.type === "INCREMENT_AGE") {
    return (state = state + 1);
  }
}

const UseReduser = () => {
  const intialState = 10;
  const [state, dispatch] = useReducer(prem, intialState);

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT_AGE" });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state}.</p>
    </>
  );
};

export default UseReduser;
