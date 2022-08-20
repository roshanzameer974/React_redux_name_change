import React from 'react'
import { useSelector } from 'react-redux'

function Marketing () {
  const textData = useSelector((state) => state.changeThetext.text)
  return (
    <div>
      <h1 className="marketing">{textData}</h1>
    </div>
  )
}

export default Marketing
