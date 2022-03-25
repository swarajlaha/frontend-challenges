import React, { useState, useEffect } from 'react'
import AppNavbar from '../commons/appNavbar'
import Inputbox from '../components/inputbox'
import UsersList from '../components/usersList'
import axios from 'axios'

const FetchUsers = () => {
  
  const [users, setUsers] = useState([])
  const [typedinput, setTypedinput] = useState('')

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axios
      .get(`https://randomuser.me/api?results=10`)
      .then((res) => {
        setUsers(res?.data?.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const inputChangeHandler = (e) => {
    setTypedinput(e.target.value)
  }

  return (
    <>
      <AppNavbar />
      <Inputbox inputChangeHandler={inputChangeHandler} />
      <UsersList users={users} typedinput={typedinput} />
    </>
  )
}

export default FetchUsers