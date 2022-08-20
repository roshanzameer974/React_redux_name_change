import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeName } from '../store/action'
import './Home.css'

function Home () {
  const [name, setName] = useState(' ')
  const dispatch = useDispatch()
  // const InputBox = ({ onParamInput, param, val }) => (' ')

  function nameHandler (e) {
    dispatch(changeName(e.target.value))
    setName(e.target.value)
  }
  return (

    <div className='home' >

      <input type="text" value={name} onChange={nameHandler} name="name"/>{' '}
         <br />
         {/* <input
      param={param}
      val={val}
      placeholder={val}
      onKeyUp={e => (val = e.target.value, onParamInput(param, val))}
    ></input> */}
    <p>Typing the name: {name}</p>
         </div>

  )
}

export default Home
