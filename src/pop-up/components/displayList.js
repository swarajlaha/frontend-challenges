import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import FullTextPopUp from './fullTextPopUp'

const DisplayList = ({ list }) => {
  const [show, setShow] = useState(false)

  const shortened = (str) => {
    const strArr = str.split('')
    const returnStrArr = []
    for (let i = 0; i < 6; i++) {
      returnStrArr.push(strArr[i])
    }
    return returnStrArr.join('') + '...'
  }

  const showPopup = (str) => {
    str.length > 6 ? setShow(true) : setShow(false)
  }

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card>
              <Card.Body>
                <ul>
                  {list.map((l) => (
                    <>
                      <li onClick={() => showPopup(l)}>
                        {l.length > 6 ? shortened(l) : l}
                      </li>
                      <FullTextPopUp show={show} setShow={setShow} text={l} />
                    </>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default DisplayList
