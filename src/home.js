import React, { useState, useEffect, useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import Back from './img/back.png'

import Navbar from './Navbar'

import './home.css'
import { UserContext } from './UserContext'

export default function Home() {
  const {value,setValue}=useContext(UserContext)

  const navigate = useNavigate()
  const myStyle = {
    backgroundImage: `url(${Back})`,
    position: 'center',
    top: '-9vw',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div>
      <Navbar where={'Home'} user={value} />

      <div className='accountSection'>
        <div style={myStyle} >
          <h1 className='status-home'>SUIVEZ  LE  STATUS DE TON BARRAGE !</h1>
          <h1 className='stock-home'>STOCK &<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  APPORT</h1>
          <button className='button-home' onClick={() => {
            navigate('/data')
          }}>VISUALISER</button>
        </div>
      </div>
    </div>
  )
}
