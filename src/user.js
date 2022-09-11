import React from 'react'

import User from './img/user.png'

import Navbar from './Navbar'

import './user.css'

export default function user() {
  return (
    <div>
      <Navbar where={'Peop'} />

      <div className='userSection'>
        <img id='pic' src={User} />
        <div className='form'>
          <h1>S'identifer</h1>
          <p>Adresse Mail</p>
          <input type='email'/>
          <p>Mot De Passe</p>
          <input type='password'/>
          <div>
            <p id='mdp'>Mot De Passe Oublié ? <span id='contactAdmin'>Contactez Votre Administration</span> </p>
            
          </div>
          <button className='connectButton' onClick={() => {
            window.location.reload()
          }}>SE CONNECTER</button></div>

      </div>
    </div>
  )
}
