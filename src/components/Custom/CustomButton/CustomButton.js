// src\components\Custom\CustomButton\CustomButton.js

import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ text, handelClick }) => {
  return (
    <>
      <button className="custom-button" onClick={handelClick}>
        {text}
      </button>
    </>
  );
};

export default CustomButton;
