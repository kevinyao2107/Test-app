import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import React from 'react';
import { useMyContext } from './useContext';

function App() {
  const { number, dispatch } = useMyContext();
  return (
    <div
      style={{
        width: '60%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
      }}
    >
      <button
        onClick={() => dispatch({ type: 'dicrement', payload: 1 })}
        style={{
          background: '#e03574',
          width: '100px',
          fontSize: '1.8rem',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          borderRadius: '5px',
          marginRight: '10px',
        }}
      >
        -
      </button>
      <div>
        <h1>{number}</h1>
      </div>
      <button
        onClick={() => dispatch({ type: 'increment', payload: 5 })}
        style={{
          background: '#e03574',
          width: '100px',
          fontSize: '1.8rem',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          borderRadius: '5px',
          marginLeft: '10px',
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
