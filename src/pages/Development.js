import React from 'react'
import { useSelector } from 'react-redux'

function Development () {
  const textData = useSelector((state) => state.changeThetext.text)
  return (
    <div>
      <h1 className="development">{textData}</h1>
    </div>
  )
}

export default Development
