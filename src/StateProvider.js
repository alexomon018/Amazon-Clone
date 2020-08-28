//setup data layer

import React,{ createContext, useContext, useReducer } from "react";

//This is the Data Layer
export const StateContext = createContext();

//Build A Provider

export const StateProvider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);