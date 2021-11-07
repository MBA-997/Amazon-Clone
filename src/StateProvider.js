import React, { createContext, useContext, useReducer } from "react";

//Prepares the Data Layer
export const StateContext = createContext();

//Wrap our App and provides it to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);
