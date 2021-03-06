/**
  1. Run the json-server: json-server employees.js -> This is will run on PORT:3000.
  2. Then run: npm start and type 'y' when prompted to run on a different port.
*/

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
    return function (...args) {
      const context = this
      if (timer) {
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
    if (value !== '') {
      axios
        .get(`http://localhost:3000/employees?q=${value}`)
        .then((res) => {
          if(res.data.length > 4) {
            let shortArr = res.data
            shortArr.splice(4, (res.data.length - 4))
            setSearchRes(shortArr)
          } else {
            setSearchRes(res.data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      setSearchRes([])
    }
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
              <Dropdownbox searchRes={searchRes} typedInput={typedInput} />
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default AutosuggestInput
