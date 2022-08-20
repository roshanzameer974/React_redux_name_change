import React from 'react'
import { useSelector } from 'react-redux'

function Contactus () {
  const textData = useSelector((state) => state.changeThetext.text)
  return (
    <div>
      <h1 className="contactus">{textData}</h1>
    </div>
  )
}

export default Contactus
