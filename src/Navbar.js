import React, { useState, useEffect,useContext } from 'react';
import { useNavigate,createSearchParams } from 'react-router-dom';

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
import { UserContext } from './UserContext';

import './Navbar.css'

export default function Navbar(props) {
  const navigate = useNavigate()
  const {value,setValue}=useContext(UserContext)
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
              <img src={Home2} className='icon' onClick={() => {
                navigate('/')}}  />
              :
              <img src={Home} className='icon' onClick={() => {
                navigate('/')}} />
          }
        </div>

        <div>
          {
            peop ?
              <img src={Peop2} id='peop' onClick={() => {
                if (value)
                { navigate("/account")}
              else {
                navigate('/login')
              } }}/>
              :
              <img src={Peop} id='peop' onClick={() => {
                if (value)
                { navigate("/account")}
              else {
                navigate('/login')
              } }} />
            }
        </div>

        <div>
          {props.user ? 
            edit ?
              <img src={Edit2} id='vis' onClick={() => {
                navigate('/edit')}}  />
              :
              <img src={Edit} id='vis' onClick={() => {
              value ? navigate('/edit') : goLogin(navigate,value) }} /> : null
          }
        </div>

        <div>
          { 
            vis ?
              <img src={Vis2} id='edit' onClick={() => {
                navigate('/data')}} />
              :
              <img src={Vis} id='edit' onClick={() => {
                navigate('/data')}} /> 
          }
        </div>

        <div>
           { props.user ? <img src={logout} id='logout' onClick={() => {
          localStorage.removeItem('username');;localStorage.removeItem('token');;setValue(false);navigate('/')}} /> : null}
        </div>
      </div>
    </div>
  )
}

function goLogin(navigate,value)
{
    navigate({pathname:'/login',search:createSearchParams({ auth : true}).toString()})
}
