import { createContext, useContext, useEffect, useReducer } from 'react';

export const UseContext = createContext();

const counter = {
  number: 4,
  text: null,
};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, number: state.number + action.payload };
    case 'dicrement':
      return { ...state, number: state.number - action.payload };
    default:
      return state;
  }
}

export const UseContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, counter);
  return (
    <UseContext.Provider value={{ ...value, dispatch }}>
      {children}
    </UseContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(UseContext);
  if (!context) {
    throw new Error('You must provide');
  }
  return context;
};
