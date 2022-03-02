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
import { Spinner } from 'react-bootstrap'

const GenerateActivity = () => {

  const [activitylist, setActivitylist] = useState([])
  const [loading, setLoading] = useState(false)
  
  // Function to fetch activities on generate activity button click.
  const generateactivityclickHandler = async () => {
    setLoading(true)
    await axios
      .get('https://www.boredapi.com/api/activity')
      .then((res) => {
        const activity = res.data
        if(res && activity) {
          const activityArr = [...activitylist]
          activityArr.push(activity)
          setActivitylist(activityArr)
          setLoading(false)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  return (
    <>
      <AppNavbar />
      <GenerateactivityBtn generateactivityclickHandler={generateactivityclickHandler} loading={loading} />
      {loading && <div style={{ marginLeft: '46%', marginTop: '2%', marginBottom: '2%' }}><Spinner animation="border" variant="primary" /></div>}
      <ActivitylistCard activitylist={activitylist} />
    </>
  )
}

export default GenerateActivity
