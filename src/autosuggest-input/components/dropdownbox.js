import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const Dropdownbox = ({ searchRes, typedInput }) => {
  const replacer = (str) => {
    const regex = new RegExp(typedInput, 'g')
    let replaceWith = typedInput
    return (str).replace(regex, replaceWith)
  }
  return (
    <>
      <Card style={{ width: '24rem' }}>
        <ListGroup variant="flush">
          {searchRes.map((sr) => (
            <ListGroup.Item>
              <Card.Title>
                {sr.first_name.toLowerCase().includes(typedInput.toLowerCase()) ? <span style={{color: 'red'}}>{replacer(sr.first_name)}</span> : sr.first_name}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {sr.last_name.toLowerCase().includes(typedInput.toLowerCase()) ? <span style={{color: 'red'}}>{replacer(sr.last_name)}</span> : sr.last_name}
              </Card.Subtitle>
                {sr.email.toLowerCase().includes(typedInput.toLowerCase()) ? <span style={{color: 'red'}}><i>{replacer(sr.email)}</i></span> : sr.email}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </>
  )
}

export default Dropdownbox
