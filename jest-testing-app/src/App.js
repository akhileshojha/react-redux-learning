// Button.js
import React from 'react';

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    Click Me
  </button>
);

export default Button;