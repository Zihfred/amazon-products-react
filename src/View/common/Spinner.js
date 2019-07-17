import React from "react";
import spinnerImg from "./img/spinner.gif";
import PropTypes from "prop-types";

const Spinner = ({ isLoading }) => {
  return isLoading ? (
    <div className="spinnerWrapper">
      <img src={spinnerImg} alt="" />
    </div>
  ) : null;
};

Spinner.propTypes = {
  isLoading: PropTypes.bool
}
export default Spinner;
