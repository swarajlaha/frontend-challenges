/**
 * Write a component that renders five stacked identical images of ladder pieces.
 * When the user hovers over a piece of the ladder, that ladder piece (as well as all the pieces below it)
 * should expand to a larger size.
 * The starting position of the component (when the user’s mouse is not over any of the images),
 * should be all the ladders in their normal form.
 * The component should return to this state when the user is not hovering over any images.
 * 
 * The image can be found at “https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png”.
 */

import React from 'react'
import AppNavbar from "../commons/appNavbar"
import Ladder from '../components/ladder'

const LADDER_IMAGE = "https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png"

const ExpandingLadder = () => {
  return (
    <>
      <AppNavbar />
      <Ladder img={LADDER_IMAGE} />
    </>
  )
}

export default ExpandingLadder