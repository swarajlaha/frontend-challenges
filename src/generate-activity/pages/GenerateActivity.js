/**
 * Write a functional component to render a button and a list of activities.
 * The list of activities should start out with one activity.
 * When the user clicks the button, an additional activity should be fetched and appended to the list.
 * To generate a random activity, issue a get request to
 * “https://www.boredapi.com/api/activity” — an API for development that does not require authentication.
 * Each request will return a new, random object containing the following fields:
 * activity, type, participants, price, link, key, and accessibility.
 * The values associated with these fields are either strings or numbers.
 */

import React, { useState } from 'react'
import AppNavbar from '../commons/appNavbar'
import ActivitylistCard from '../components/activitylistCard'
import GenerateactivityBtn from '../components/generateactivityBtn'
import axios from 'axios'

const GenerateActivity = () => {

  const [activitylist, setActivitylist] = useState([])
  const [showdetails, setShowdetails] = useState(false)
  
  // Function to fetch activities on generate activity button click.
  const generateactivityclickHandler = async () => {
    await axios
      .get('https://www.boredapi.com/api/activity')
      .then((res) => {
        if(res && res.data) {
          const activity = res.data
          const activityArr = [...activitylist]
          activityArr.push(activity)
          setActivitylist(activityArr)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  return (
    <>
      <AppNavbar />
      <GenerateactivityBtn generateactivityclickHandler={generateactivityclickHandler} />
      <ActivitylistCard activitylist={activitylist} showdetails={showdetails} setShowdetails={setShowdetails} />
    </>
  )
}

export default GenerateActivity
