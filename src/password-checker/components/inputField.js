import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { BiHide, BiShow } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'

const InputField = ({ getLastChar, pswdCheck, pswdLenCheck }) => {
  const [isPswdhidden, setIsPswdhidden] = useState(false)
  const [enteredTxt, setEnteredTxt] = useState('')
  const [enteredStar, setEnteredStar] = useState('')

  const inputchangeHandler = (e) => {
    getLastChar(e.target.value)
    setEnteredTxt(e.target.value)
    let noOfStars = '*'
    for(let i = 0; i < enteredTxt.length; i ++) {
      noOfStars += '*'
    }
    setEnteredStar(noOfStars)
  }

  return (
    <>
      <InputGroup>
        <FormControl
          placeholder="Type Password..."
          aria-label="Type Password"
          aria-describedby="basic-addon2"
          onChange={(e) => inputchangeHandler(e)}
          value={isPswdhidden ? enteredStar : enteredTxt}
        />
        <Button
          variant="outline-dark"
          onClick={() => setIsPswdhidden(!isPswdhidden)}
        >
          {isPswdhidden ? <BiShow /> : <BiHide />}
        </Button>
        <InputGroup.Append>
          <Button
            variant="outline-success"
            disabled={
              !(
                pswdCheck.charCheck &&
                pswdCheck.numCheck &&
                pswdCheck.specialCharCheck &&
                pswdLenCheck
              )
            }
          >
            Save
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  )
}

export default InputField
