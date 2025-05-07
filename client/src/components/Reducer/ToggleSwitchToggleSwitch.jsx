// ToggleSwitch.jsx
import React, { useReducer } from "react";
import { toggleReducer, initialState } from "./ToggleReducer";

const ToggleSwitch = () => {
  const [state, dispatch] = useReducer(toggleReducer, initialState);

  return (
    <div>
      <p >
        The switch is <span>{state.isOn ? "ON" : "OFF"}</span>
      </p>
      <button
        onClick={() => dispatch({ type: "TOGGLE" })}
      >
        Toggle
      </button>
    </div>
  );
};

export default ToggleSwitch;
