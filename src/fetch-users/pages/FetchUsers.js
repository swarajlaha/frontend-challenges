import React from 'react'
import AppNavbar from '../commons/appNavbar'
import Inputbox from '../components/inputbox'
import UsersList from '../components/usersList'

const FetchUsers = () => {
  return (
    <>
      <AppNavbar />
      <Inputbox />
      <UsersList />
    </>
  )
}

export default FetchUsers