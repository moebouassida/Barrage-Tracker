import React, { useState, useEffect } from 'react'

import logout from './img/logout.png'

import Home from './img/Home.png'
import Home2 from './img/Home2.png'

import Edit from './img/Edit.png'
import Edit2 from './img/Edit2.png'

import Peop from './img/Peop.png'
import Peop2 from './img/Peop2.png'

import Vis from './img/Vis.png'
import Vis2 from './img/Vis2.png'

import logo from './img/Logo.png'

import './Navbar.css'

export default function Navbar(props) {

  const [home, setHome] = useState(false)
  const [edit, setEdit] = useState(false)
  const [peop, setPeop] = useState(false)
  const [vis, setVis] = useState(false)


  useEffect(() => {
    if ((props.where) === 'Home') {
      setHome(true)
    }
    else if ((props.where) === 'Edit') {
      setEdit(true)
    }
    else if ((props.where) === 'Peop') {
      setPeop(true)

    }
    else if ((props.where) === 'Vis') {
      setVis(true)
    }
  })

  return (
    <div>
      <div className='widgets'>

        <div>
          <img src={logo} id='userLogo' />
        </div>

        <div>
          {
            home ?
              <img src={Home2} className='icon' />
              :
              <img src={Home} className='icon' />
          }
        </div>

        <div>
          {
            peop ?
              <img src={Peop2} className='icon' id='peop2' />
              :
              <img src={Peop} className='icon' id='peop' />
          }
        </div>

        <div>
          {
            edit ?
              <img src={Edit2} className='icon' id='edit2' />
              :
              <img src={Edit} className='icon' id='edit' />
          }
        </div>

        <div>
          {
            vis ?
              <img src={Vis2} className='icon' id='vis' />
              :
              <img src={Vis} className='icon' id='vis' />
          }
        </div>

        <div>
          <img src={logout} id='logout' />
        </div>
      </div>
    </div>
  )
}
