import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const InputField = ({ getLastChar, pswdCheck, pswdLenCheck }) => {
  console.log(pswdCheck, pswdLenCheck)
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
          <Button variant="outline-success" disabled={!(pswdCheck.charCheck && pswdCheck.numCheck && pswdCheck.specialCharCheck && pswdLenCheck)}>Save</Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
}

export default InputField;
