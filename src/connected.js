import React, { useEffect, useState } from 'react'

import Navbar from './Navbar'

import Pw from './img/pw.png'

import './connected.css'

export default function Connected() {
  const [username,setusername]=useState(null);
  useEffect(()=>setusername(localStorage.getItem('username')),[]);
  console.log(username)
  return (
    <div>
        <Navbar where={'Peop'} user={username} />
        <div className='connectedSection'>
            <img className='image-connected' src={Pw} />
            <h1 id='info'>VOUS ÊTES CONNECTÉ EN TANT QUE {username}</h1>
        </div>
        
    </div>
  )
}
