import React, { useState } from 'react'
import AppNavbar from '../commons/appNavbar'
import DisplayList from '../components/displayList'
import InputTextbox from '../components/inputTextbox'

const PopUp = () => {
  
  const [list, setList] = useState([])

  return (
    <>
      <AppNavbar />
      <InputTextbox list={list} setList={setList} />
      <DisplayList list={list} />
    </>
  )
}

export default PopUp