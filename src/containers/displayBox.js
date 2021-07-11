import React, { useEffect, useState } from 'react'
import InputField from '../components/inputField'
import MsgField from '../components/msgField'
import { Container, Row, Col } from 'react-bootstrap'

const DisplayBox = () => {
  const [lastChar, setLastChar] = useState('')
  const [pswdCheck, setPswdCheck] = useState({
    charCheck: false,
    numCheck: false,
    specialCharCheck: false,
  })
  const [pswdLenCheck, setPswdLenCheck] = useState(false)

  // Function returns last character of string
  const getLastChar = (str) => {
    console.log('glc')
    if (str.length >= 8) {
      setPswdLenCheck(true)
    }
    setLastChar(str.slice(-1))
  }
  useEffect(() => {
    charChecker(lastChar)
  }, [lastChar])

  // Check the 'lastChar' to meet conditions
  const charChecker = (lastChar) => {
    console.log('cc')
    if (
      (lastChar?.charCodeAt(0) > 64 && lastChar?.charCodeAt(0) < 91) ||
      (lastChar?.charCodeAt(0) > 96 && lastChar?.charCodeAt(0) < 123)
    ) {
      // A - Z (65 - 90), a - z (97 - 122)
      setPswdCheck({ ...pswdCheck, charCheck: true })
    } else if (lastChar?.charCodeAt(0) > 47 && lastChar?.charCodeAt(0) < 58) {
      // 0 - 9 (48 - 58)
      setPswdCheck({ ...pswdCheck, numCheck: true })
    } else if (
      (lastChar?.charCodeAt(0) > 31 && lastChar?.charCodeAt(0) < 48) ||
      (lastChar?.charCodeAt(0) > 57 && lastChar?.charCodeAt(0) < 65) ||
      (lastChar?.charCodeAt(0) > 90 && lastChar?.charCodeAt(0) < 97) ||
      (lastChar?.charCodeAt(0) > 122 && lastChar?.charCodeAt(0) < 128)
    ) {
      // special character
      setPswdCheck({ ...pswdCheck, specialCharCheck: true })
    }
  }

  console.log('obj>>', pswdCheck)
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col></Col>
          <Col>
            <InputField getLastChar={getLastChar} />
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-3">
          <Col xs={3}></Col>
          <Col xs={6}>
            <MsgField pswdCheck={pswdCheck} pswdLenCheck={pswdLenCheck} />
          </Col>
          <Col xs={3}></Col>
        </Row>
      </Container>
    </>
  )
}

export default DisplayBox
