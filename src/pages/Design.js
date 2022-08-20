import React from 'react'
import { useSelector } from 'react-redux'

function Design () {
  const textData = useSelector((state) => state.changeThetext.text)
  return (
    <div>
      <h1 className="design">{textData}</h1>
    </div>
  )
}

export default Design
