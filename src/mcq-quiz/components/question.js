import React from 'react'
import { ButtonGroup, Card, ListGroup, ToggleButton } from 'react-bootstrap'

const Question = () => {
  return (
    <>
      <Card border="secondary" style={{ width: '45rem' }}>
        <Card.Header>This is your first question?</Card.Header>
        <Card.Body>
          <Card.Title>Choose one</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <ButtonGroup>
                <ToggleButton
                  key={'idx'}
                  id={`radio-1`}
                  type="radio"
                  variant="light"
                  name="radio"
                  value={'value'}
                  checked={false}
                  onChange={(e) => console.log(e.currentTarget.value)}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;Option 1
                </ToggleButton>
              </ButtonGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <ButtonGroup>
                <ToggleButton
                  key={'idx'}
                  id={`radio-1`}
                  type="radio"
                  variant="light"
                  name="radio"
                  value={'value'}
                  checked={false}
                  onChange={(e) => console.log(e.currentTarget.value)}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;Option 1
                </ToggleButton>
              </ButtonGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <ButtonGroup>
                <ToggleButton
                  key={'idx'}
                  id={`radio-1`}
                  type="radio"
                  variant="light"
                  name="radio"
                  value={'value'}
                  checked={false}
                  onChange={(e) => console.log(e.currentTarget.value)}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;Option 1
                </ToggleButton>
              </ButtonGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <ButtonGroup>
                <ToggleButton
                  key={'idx'}
                  id={`radio-1`}
                  type="radio"
                  variant="light"
                  name="radio"
                  value={'value'}
                  checked={false}
                  onChange={(e) => console.log(e.currentTarget.value)}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;Option 1
                </ToggleButton>
              </ButtonGroup>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}

export default Question
