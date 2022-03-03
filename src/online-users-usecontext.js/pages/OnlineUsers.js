/**
 * Create a functional component that renders an object of users extracted from context using
 * React’s useContext() hook. The object’s keys are the users' names and the associated values are booleans
 * that indicate whether the users are online or offline.
 * The object should be defined in the parent component’s state and the object, as well as its associated
 * setState() function, should be provided to the aforementioned functional component via context.
 * Again, userState and setUserState() should be passed to the child of their enclosing component via context.
 * The child should extract userState and setUserState() using the useContext() hook.
 * It should display each user’s name alongside an icon indicating if the user is
 * online (🟢) or offline (🔴). Every two seconds, the component should change the status of a random user to the
 * opposite of their current status.
 */

import React, { useState, useEffect, useContext } from 'react'
import AppNavbar from '../commons/appNavbar'
import UserList from '../components/userList'

export const UsersContext = React.createContext()

const OnlineUsers = () => {
  const [userState, setUserState] = useState({
    Bob: true,
    Gary: true,
    Jessica: false,
    Sam: true,
    Eric: false,
  })

  // Function to create new users list.
  const changeRandomUser = () => {
    const keyArr = Object.keys(userState)
    const randomNum = Math.floor(Math.random() * keyArr.length)
    const newUsers = Object.assign({}, userState)
    newUsers[keyArr[randomNum]] = !userState[keyArr[randomNum]]
    setUserState(newUsers)
  }

  useEffect(() => {
    const interval = setInterval(changeRandomUser, 2000)
    return () => clearInterval(interval)
  }, [userState])

  return (
    <>
      <AppNavbar />
      <UsersContext.Provider value={{ userState, setUserState }}> 
        <UserList />
      </UsersContext.Provider>
    </>
  )
}

export default OnlineUsers
