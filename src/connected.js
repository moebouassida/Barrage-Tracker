import React, { useEffect, useState,useContext} from 'react'

import Navbar from './Navbar'

import Pw from './img/pw.png'

import './connected.css'
import { UserContext } from './UserContext'
import { useNavigate } from 'react-router-dom'

export default function Connected() {
  const navigate=useNavigate()
  const [username,setusername]=useState(null);
  const {value,setValue}=useContext(UserContext)
  useEffect(()=>setusername(localStorage.getItem('username')),[]);
  useEffect(()=>{
    if (!value)
    {
      navigate('/login')
    }
  })
  return (
    <div>
        <Navbar where={'Peop'} user={value} />
        <div className='connectedSection'>
            <img className='image-connected' src={Pw} />
            <h1 id='info'>VOUS ÊTES CONNECTÉ EN TANT QUE {username}</h1>
        </div>
        
    </div>
  )
}
