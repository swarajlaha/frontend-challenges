import React, { useState } from 'react'
import AppNavbar from '../commons/appNavbar'
import Inputbox from '../components/inputbox'
import RobotsList from '../components/robotsList'

const RenderRobots = () => {
  const [input, setInput] = useState('')
  const [robotlist, setRobotlist] = useState([]);

  return (
    <>
      <AppNavbar />
      <Inputbox input={input} setInput={setInput} robotlist={robotlist} setRobotlist={setRobotlist} />
      <RobotsList robotlist={robotlist} />
    </>
  )
}

export default RenderRobots