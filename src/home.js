import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'

import Back from './img/back.png'

import Navbar from './Navbar'

import './home.css'

export default function Home() {
  
  const navigate = useNavigate()

  return (
    <div>
        <Navbar where={'Home'} />

        <div className='accountSection'>
            <img id='back' src={Back} />
        </div>

        <button className='visButton' onClick={() => {
          navigate('/data')
        }} ></button>
    </div>
  )
}
