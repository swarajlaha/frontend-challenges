import React, { useState, useEffect } from 'react'
import AppNavbar from '../commons/appNavbar'
import Inputbox from '../components/inputbox'
import UsersList from '../components/usersList'
import axios from 'axios'

const FetchUsers = () => {
  
  const [users, setUsers] = useState([])
  const [typedinput, setTypedinput] = useState('')
  const [criteria, setCriteria] = useState({ startswith: true, includes: true })

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

  const criteriaChangeHandler = (criteriaNum) => {
    if(criteriaNum === 1) {
      setCriteria({...criteria, startswith: !criteria.startswith})
    } else {
      setCriteria({...criteria, includes: !criteria.includes})
    }
  }

  return (
    <>
      <AppNavbar />
      <Inputbox inputChangeHandler={inputChangeHandler} criteria={criteria} criteriaChangeHandler={criteriaChangeHandler} />
      <UsersList users={users} typedinput={typedinput} criteria={criteria} />
    </>
  )
}

export default FetchUsers