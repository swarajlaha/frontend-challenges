import React, { useState, useEffect } from 'react'
import AppNavbar from '../commons/appNavbar'
import Inputbox from '../components/inputbox'
import UsersList from '../components/usersList'
import axios from 'axios'

const FetchUsers = () => {
  
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axios
      .get(`https://randomuser.me/api?results=2`)
      .then((res) => {
        setUsers(res?.data?.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }
console.log(users)
  return (
    <>
      <AppNavbar />
      <Inputbox />
      <UsersList users={users} />
    </>
  )
}

export default FetchUsers