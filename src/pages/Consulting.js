import React from 'react'
import { useSelector } from 'react-redux'

function Consulting () {
  const textData = useSelector((state) => state.changeThetext.text)
  return (
    <div>
      <h1 className="consulting">{textData}</h1>
    </div>
  )
}

export default Consulting
