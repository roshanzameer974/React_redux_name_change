import React from 'react'
import { useSelector } from 'react-redux'

function Services () {
  const textData = useSelector((state) => state.changeThetext.text)
  return (
    <div>
      <h1 className="services">{textData}</h1>
    </div>
  )
}

export default Services
