import Heading from "./heading"
import { Card, Col, Row } from "react-bootstrap" 
import Subheading from "./subheading"
import Inputbox from "./inputbox"
import Subsbutton from "./subsbutton"
import Checkboxtext from "./checkboxtext"
import React, { useState } from "react"

const Newslettercard = () => {

  const [inputStr, setInputStr] = useState('');
  const [showError, setShowError] = useState(false);

  const validateEmail = () => {
    return String(inputStr)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  const onSubsBtnClick = () => {
    if(inputStr.length && validateEmail()) {
      setShowError(false)
    } else {
      setShowError(true)
    }
  }

  const inputChangeHandler = (e) => {
    let inputStr = e.target.value
    setInputStr(inputStr)
  }

  return (
    <>
      <Card body style={{ width: '50rem', textAlign: 'center' }}>
        <Heading />
        <Subheading />
        <Row style={{ marginLeft: '4rem' }}>
          <Col xs={7} style={{ marginLeft: '4rem', paddingLeft: '0' }}><Inputbox inputChangeHandler={inputChangeHandler} showError={showError} /></Col>
          <Col xs={4} style={{ marginLeft: '-4rem', paddingLeft: '0', marginTop: '1.4rem' }}><Subsbutton onSubsBtnClick={onSubsBtnClick} /></Col>
        </Row>
        <Row style={{ marginLeft: '6.8rem' }}>
          <Col xs={1}><Checkboxtext /></Col>
          <Col xs={11} style={{ marginLeft: '-2rem', marginTop: '0.2rem', fontSize: '0.7rem', textAlign: 'left' }}><span>By checking this box, you agree to receive our weekly newsletter containing coding challenges, tips, and other related content. You may unsubscribe from the newsletter at anytime</span></Col>
        </Row>
      </Card>
    </>
  )
}

export default Newslettercard