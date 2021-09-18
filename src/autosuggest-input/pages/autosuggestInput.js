import React, { useCallback, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AppNavbar from '../commons/appNavbar'
import Dropdownbox from '../components/dropdownbox'
import Inputbox from '../components/inputbox'
import axios from 'axios'

const AutosuggestInput = () => {
  const [typedInput, setTypedInput] = useState('')
  const [searchRes, setSearchRes] = useState([])

  const debounce = (func) => {
    let timer
    return function(...args) {
      const context = this
      if(timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        timer = null
        func.apply(context, args)
      }, 500)
    }
  }

  const inputChangeHandler = (event) => {
    const value = event.target.value
    setTypedInput(event.target.value)
    callApi(value)
  }

  const callApi = (value) => {
    console.log(value)
    axios
      .get(`http://localhost:3000/employees?q=${value}`)
      .then((res) => {
        console.log(res.data)
        setSearchRes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const optimisedRes = useCallback(debounce(inputChangeHandler), [])

  return (
    <>
      <AppNavbar />
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <Row>
              <Inputbox inputChangeHandler={optimisedRes} />
            </Row>
            <Row>
              <Dropdownbox searchRes={searchRes} />
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default AutosuggestInput
