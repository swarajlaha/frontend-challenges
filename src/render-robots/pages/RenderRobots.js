/**
 * Write a functional component that includes a text input field and, below it, a list of images.
 * At the start, the list should be empty.
 * When the user submits some string input-string,
 * the function should append the robot image corresponding to that string to the current list of images.
 * 
 * The source of the image is ‘https://robohash.org/input-string’. Robohash provides unique images for any text.
 * When a user clicks on a robot image, the image should be removed from the list.
 */

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
      <RobotsList robotlist={robotlist} setRobotlist={setRobotlist} />
    </>
  )
}

export default RenderRobots