import React from 'react'
import { Button, Card } from 'react-bootstrap'

const DisplaySubtasks = ({ taskHeader, taskHeaderIdx, subTasks, clickTaskHandler }) => {
  return (
    <>
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 50,
          width: 300,
        }}
      >
        <Card.Header><h5>To do</h5></Card.Header>
        {subTasks.map((subTask, index) => {
          const taskText = Object.keys(subTask)[0]
          if (!subTask[taskText])
            return (
              <Button
                variant="outline-danger"
                className="mt-2 ml-2 mr-2 mb-2"
                onClick={(taskText) => clickTaskHandler(taskHeaderIdx, index, taskText)}
              >
                {taskText}
              </Button>
            )
        })}
      </Card>
      <Card style={{ display: 'flex', flexDirection: 'column', width: 300 }}>
        <Card.Header><h5>Completed</h5></Card.Header>
        {subTasks.map((subTask, index) => {
          const taskText = Object.keys(subTask)[0]
          if (subTask[taskText])
            return (
              <Button
                variant="outline-success"
                className="mt-2 ml-2 mr-2 mb-2"
                onClick={(taskText) => clickTaskHandler(taskHeaderIdx, index, taskText)}
              >
                {taskText}
              </Button>
            )
        })}
      </Card>
    </>
  )
}

export default DisplaySubtasks
