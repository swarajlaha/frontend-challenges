import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'

const PswdStrength = ({ now }) => {
  const [label, setLabel] = useState('')
  const [variant, setVariant] = useState('')

  useEffect(() => {
    if (now === 25) {
      setLabel('weak')
      setVariant('danger')
    } else if (now === 50) {
      setLabel('medium')
      setVariant('warning')
    } else if (now === 100) {
      setLabel('strong')
      setVariant('success')
    }
  })

  return (
    <>
      <p>
        <ProgressBar
          animated={now !== 100}
          variant={variant}
          now={now}
          label={label}
        />
      </p>
    </>
  )
}

export default PswdStrength
