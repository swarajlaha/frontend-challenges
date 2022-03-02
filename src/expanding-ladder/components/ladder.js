import React, { useState } from 'react'

const Ladder = ({ img }) => {
  const [id, setId] = useState()
  const ladderIds = [5, 4, 3, 2, 1]

  // Function to handle mouse movements by setting ladder id.
  const setIdHandler = (id) => {
    setId(id)
  }

  // Function to return size of respective ladder, based on ladder id.
  const getSize = (idx) => {
    return idx <= id ? 120 : 100
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 20,
          marginTop: '5%',
        }}
      >
        {ladderIds.map((id) => (
          <>
            <img
              key={id}
              src={img}
              height={getSize(id)}
              width={getSize(id)}
              onMouseEnter={() => setIdHandler(id)}
              onMouseOut={() => setId(null)}
            />
            <span style={{marginRight: '10%'}}>{id}</span>
          </>
        ))}
      </div>
    </>
  )
}

export default Ladder
