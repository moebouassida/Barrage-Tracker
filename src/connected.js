import React from 'react'

import Navbar from './Navbar'

import Pw from './img/pw.png'

import './connected.css'

export default function connected() {
  return (
    <div>
        <Navbar where={'Peop'} user={true} />
        <div className='connectedSection'>
            <img className='image-connected' src={Pw} />
            <h1 id='info'>VOUS ÊTES CONNECTÉ EN TANT QUE  __USERNAME__</h1>
        </div>
        
    </div>
  )
}
