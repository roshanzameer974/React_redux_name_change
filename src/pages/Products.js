import React from 'react'
import { useSelector } from 'react-redux'

function Products (props) {
  const textData = useSelector((state) => state.changeThetext.text)
  return (
    <div>
      <h1 className="products">{textData}</h1>
    </div>
  )
}

export default Products
