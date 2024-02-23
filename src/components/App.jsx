/* eslint-disable react/prop-types */

import React from 'react';
import NavBar from './ui/NavBar';

export default function App({ children }) {
  return (
    <div>
      <NavBar />
      <div className="row text-center m-5">
        <h1>Викторина</h1>
      </div>
      {children}
    </div>
  );
}
