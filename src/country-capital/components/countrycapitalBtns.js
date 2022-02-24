import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import CountryCapitalList from "../countryCapitalList"

const CountrycapitalBtns = () => {

  const [selected, setSelected] = useState({})
  const [clickcount, setClickcount] = useState(1)
  const [renderBtns, setRenderBtns] = useState([])

  const countrycapitalObj = CountryCapitalList()

  useEffect(() => {
    const btnsArr = [];
    for(const key in countrycapitalObj) {
      btnsArr.push(key, countrycapitalObj[key]);
    }
    setRenderBtns(btnsArr)
  }, [setRenderBtns])

  const btnClickHandler = (e) => {
    if(clickcount % 2 !== 0) {
      // country
      selected.country = e.target.innerText
    } else {
      selected.capital = e.target.innerText
      checkSelection(e.target.innerText)
    }
    setClickcount((prevCount) => prevCount + 1)
  }

  const checkSelection = (capital) => {
    const renderbtnsArr = [...renderBtns]
    if(countrycapitalObj[selected.country] === capital) {
      renderbtnsArr.splice(renderbtnsArr.indexOf(selected.country), 1)
      renderbtnsArr.splice(renderbtnsArr.indexOf(capital), 1)
      setRenderBtns(renderbtnsArr)
    }
  }

  return (
    <>
      {renderBtns.length > 0 ? (renderBtns.map((btn) => (
        <Button 
          onClick={(e) => btnClickHandler(e)}
          className="mr-2 mb-2"
        >
            {btn}
        </Button>
      ))) : "Congratulations"}
    </>
  )
}

export default CountrycapitalBtns