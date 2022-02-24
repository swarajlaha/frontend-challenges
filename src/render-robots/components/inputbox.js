import React from 'react'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'

const Inputbox = ({ input, setInput, robotlist, setRobotlist }) => {

  // Function to handle input changes.
  const inputChangeHandler = (e) => {
    setInput(e.target.value)
  }

  // Function to handle generate button click.
  const generateBtnHandler = () => {
    setInput('')
    let robotArr = [...robotlist];
    robotArr.push(input)
    setRobotlist(robotArr)
  }

  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col></Col>
        <Col>
          <InputGroup>
            <FormControl 
              placeholder='Generate Robot...'
              value={input}
              onChange={inputChangeHandler}
            >
            </FormControl> &nbsp;
            <Button
              variant="outline-success"
              onClick={generateBtnHandler}
            >
              Generate
            </Button>
          </InputGroup>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Inputbox