import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import CompletedCard from './completedCard'
import TodoCard from './todoCard'
import DisplaySubtasks from './displaySubtasks'

const MainContainer = () => {
  const [list, setList] = useState({
    'Organize closet': [
      { 'Donate old clothes and shoes': false },
      { 'Buy new shelf': true },
      { 'Put in shelf by color': true },
    ],
    'Finish homework': [
      { 'Finish math homework': false },
      { 'Finish science homework': false },
      { 'Finish Reactjs homework': true },
    ],
    'Achieve nirvana': [
      { 'Meditate a little': true },
      { 'Gain some wisdom': false },
    ],
  })

  return (
    <div
      style={{
        diplay: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 100,
        paddingLeft: '28%'
      }}
    >
      {Object.entries(list).map(([taskHeader, subTasks]) => {
        return (
          <>
            <h4 className='ml-2 mt-3'>{taskHeader}</h4>
            <div style={{ display: 'flex' }}>
              <DisplaySubtasks
                taskHeader={taskHeader}
                subTasks={subTasks}
              />
            </div>
          </>
        )
      })}
    </div>
  )
}

export default MainContainer
