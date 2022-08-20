import React from 'react'
import { useSelector } from 'react-redux'

function Signup () {
  const textData = useSelector((state) => state.changeThetext.text)
  return (
    <div>
      <h1 className="signup">{textData}</h1>
    </div>
  )
}

export default Signup
