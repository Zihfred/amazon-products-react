import React from "react";
import PropTypes from 'prop-types';

import { Button, FormControl, InputGroup } from "react-bootstrap";

const SearchBar = ({ inputValue, onChange }) => (
  <InputGroup>
    <FormControl
      type="text"
      aria-label="Username"
      placeholder="Search..."
      value={inputValue}
      onChange={onChange}
    />
    <InputGroup.Append>
      <Button type="button" variant="primary">
        Search
      </Button>
    </InputGroup.Append>
  </InputGroup>
);

SearchBar.propTypes = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchBar;
