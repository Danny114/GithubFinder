import React, { useReducer } from "react";
import AlertReducer from "./AlertReducer";
import AlertContext from "./AlertContext";
import { SET_ALERT, CLEAR_ALERT } from "../types";

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //popup when input field is empty and search button is pressed
  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg: msg, type: type } });

    setTimeout(() => dispatch({ type: CLEAR_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
