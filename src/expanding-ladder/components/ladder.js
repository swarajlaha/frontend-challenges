import React from 'react'

const Ladder = ({ img }) => {
  const ladderIds = [5, 4, 3, 2, 1];

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 20,
          marginTop: '5%'
        }}
      >
        {ladderIds.map((id) => (
          <img
            src={img}
            height={100}
            width={100}
          />
        ))}
      </div>
    </>
  )
}

export default Ladder
