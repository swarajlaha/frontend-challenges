import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const InputField = ({ getLastChar }) => {
  return (
    <>
      <InputGroup>
        <FormControl
          placeholder="Type Password..."
          aria-label="Type Password"
          aria-describedby="basic-addon2"
          onChange={(e) => getLastChar(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-success">Save</Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
}

export default InputField;
