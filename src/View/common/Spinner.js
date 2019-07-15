import React from 'react';
import spinnerImg from "../../img/spinner.gif";

const Spinner= ({isLoading}) => {
  if (isLoading) return (
    <div className="spinnerWrapper">
      <img src={spinnerImg} alt="" />
    </div>
  );

  return null;
};

export default Spinner;
