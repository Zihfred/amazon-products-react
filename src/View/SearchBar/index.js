import React from 'react'
import {Button, FormControl, InputGroup } from 'react-bootstrap';

const SearchBar = ({inputValue,onChange}) => {

    return (
            <InputGroup >
                <FormControl
                    type="text"
                    aria-label='Username'
                    placeholder='Search...'
                    value={inputValue}
                    onChange={onChange}
                />
                <InputGroup.Append>
                    <Button type='button' onClick={onChange} variant="primary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
    )
};

export default SearchBar;
