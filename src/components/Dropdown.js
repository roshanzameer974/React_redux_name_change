import React, { useState } from 'react'
import { serviceDropdown, productDropdown } from './NavItems'
import { Link } from 'react-router-dom'
import './Dropdown.css'

function Dropdown () {
  const [dropdown, setDropdown] = useState(false)
  const [productdown, setProductdown] = useState(false)

  return (
    <>
      <ul
        className={dropdown ? 'services-submenu clicked' : 'services-submenu'}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>

      <ul
        className={productdown ? 'Products-submenu1 clicked' : 'Products-submenu1'}
        onClick={() => setProductdown(!productdown)}
      >
        {productDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setProductdown(false)}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>

    </>
  )
}

export default Dropdown
