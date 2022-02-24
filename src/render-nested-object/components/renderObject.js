import React from 'react'

const RenderObject = ({ obj }) => {
  return (
    <>
      {Object.entries(obj).map(([key, value]) => {
        if(typeof value === "object") {
          return (
            <>
              <p><u>{`${key}: `}</u></p>
              <div className='pl-3'>
                <RenderObject obj={value} />
              </div>
            </>
          )
        } else {
          return (
            <>
              <p><u>{`${key}`}</u>: {`${value}`}</p>
            </>
          )
        } 
      })}
    </>
  )
}

export default RenderObject
