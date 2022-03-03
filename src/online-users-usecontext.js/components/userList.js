import React, { Fragment } from "react";
import { UsersContext } from '../pages/OnlineUsers'

const UserList = () => {
  return (
    <Fragment>
      <UsersContext.Consumer>
        {
          userState => {
            return (
              <ul className='mt-5 pt-5 ml-5 pl-5'>
                {Object.keys(userState.userState).map((us, index) => {
                  return (
                    <li key={index}>{us} {userState.userState[us] ? <span>🟢</span> : <span>🔴</span>}</li>
                  )
                })}
              </ul>
            )
          }
        }
      </UsersContext.Consumer>
    </Fragment>
  )
}

export default UserList