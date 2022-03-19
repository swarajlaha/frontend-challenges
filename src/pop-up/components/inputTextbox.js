import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const InputTextbox = ({ list, setList }) => {

  const [enteredText, setEnteredText] = useState('')

  const inputChangeHandler = (val) => {
    setEnteredText(val)
  }

  const btnClickHandler = () => {
    const tempList = [...list]
    tempList.push(enteredText)
    setList(tempList)
    setEnteredText('')
  }

  return (
    <>
      <Container className='mb-5'>
        <Row>
          <Col></Col>
          <Col>
            <Form className="mt-4 pt-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter something...</Form.Label>
                <Form.Control type="text" value={enteredText} onChange={(e) => inputChangeHandler(e.target.value)} />
              </Form.Group>
            </Form>
            <Button variant="outline-primary" onClick={btnClickHandler}>Add</Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default InputTextbox
