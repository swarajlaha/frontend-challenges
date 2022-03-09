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
  // Function to handle user clicks on a task item.
  const clickTaskHandler = (headerIdx, subIdx) => {
    console.log(headerIdx, subIdx)
    let dupList = {...list}
    let selectedHeader = Object.values(dupList)[headerIdx]
    console.log(selectedHeader)
    console.log(dupList)
    dupList = {...dupList, selectedHeader}
    console.log(dupList)
    /* selectedHeader[subIdx] = !selectedHeader[subIdx] */
  }

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
      {Object.entries(list).map(([taskHeader, subTasks], index) => {
        return (
          <>
            <h4 className='ml-2 mt-3'>{taskHeader}{index}</h4>
            <div style={{ display: 'flex' }} key={index}>
              <DisplaySubtasks
                taskHeader={taskHeader}
                taskHeaderIdx={index}
                subTasks={subTasks}
                clickTaskHandler={clickTaskHandler}
              />
            </div>
          </>
        )
      })}
    </div>
  )
}

export default MainContainer
