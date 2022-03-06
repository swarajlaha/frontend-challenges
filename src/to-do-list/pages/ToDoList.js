/**
 * Create a functional component to render a list of tasks (along with their subtasks) from an object.
 * The subtasks should be organized into two columns, completed and to be completed, based on the boolean value associated with each task.
 * The object will have the following format: any number of keys where each key is the text of the task, an array of any number of objects
 * associated with each key, and finally, an object with one field (the subtask text) and one associated boolean value at every index of the array.
 *
 * When the user clicks on an uncompleted subtask, it should move from the uncompleted list to the completed list.
 * Likewise, when the user clicks on a completed subtask, it should move from the completed list to the uncompleted list.
 */

import React from 'react'
import AppNavbar from '../commons/appNavbar'
import MainContainer from '../components/mainContainer'

const INITIAL_LIST = {
  'Organize closet': [
    { 'Donate old clothes and shoes': false },
    { 'Buy new shelf': false },
    { 'Put in shelf by color': false },
  ],
  'Finish homework': [
    { 'Finish math homework': false },
    { 'Finish science homework': false },
    { 'Finish Reactjs homework': false },
  ],
  'Achieve nirvana': [
    { 'Meditate a little': false },
    { 'Gain some wisdom': false },
  ],
}

const ToDoList = () => {
  return (
    <>
      <AppNavbar />
      <MainContainer />
    </>
  )
}

export default ToDoList
