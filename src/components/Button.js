// src/components/Button.js

import React from 'react';
import './Button.css';

const Button = ({ type, children, onClick }) => {
  let buttonClass = 'button';

  if (type) {
    buttonClass += ` button-${type}`;
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
