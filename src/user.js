import React, { useRef, useState } from 'react'
import axios from 'axios'

import userimg from './img/user.png'

import Navbar from './Navbar'
import { useFormik } from "formik";
import * as Yup from 'yup';

import './user.css'

export default function User() {
  const initialValues = {
    Email: "",
    Password: "",
  };
  const validationSchema = Yup.object({
    Email: Yup.string()
      .email("invalid email address.")
      .required("required *"),
    Password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });
  const formik = useFormik({
    initialValues, validationSchema, onSubmit: (values) => { console.log(values); login(values,setBool,user,bool) }
  });
  const [bool,setBool]=useState(false)
  const user = useRef({ token: null, username: null, admin: false });
  return (
    <div>
      <Navbar where={'Peop'} user={false}  />


      <div className='userSection'>
        <img id='pic' src={userimg} />
        <form action="#" className="form" onSubmit={formik.handleSubmit}>
          <h1 className="identifier-user">S'identifier</h1>
          <p className='p-user'>Adresse Mail</p>
          <input
            className="input-signup"
            id="Email"
            value={formik.values.Email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            placeholder="Mail Address"
            autoComplete="off"
          />
          <br />
          {formik.touched.Email && formik.errors.Email ? (
            <p className='error-user'>{formik.errors.Email}</p>
          ) : null}
          <p className='p-user'>Mot De Passe</p>
          <input
            className="input-signup"
            id="Password"
            value={formik.values.Password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            placeholder="Password"
            autoComplete="off"
          />
          <br />
          {formik.touched.Password && formik.errors.Password ? (
            <p className='error-user'>{formik.errors.Password}</p>
          ) : null}
          <div>
            <p id='mdp'>Mot De Passe Oublié ? <span id='contactAdmin'>Contactez Votre Administration</span> </p>

          </div>
          <button className='connectButton' type="sumbit" >SE CONNECTER</button>
          { bool ? (<p className='login-error'>Identifiant invalide</p>): null }</form>
          
          

      </div>
    </div>
  )
}

function login(values,setBool,user,bool) {
  axios.post(`http://localhost:3020/api/user/login`,
   { email: values.Email, password: values.Password },)
    .then((res) => {
      user.token=res.data.token;
    user.username=res.data.username;
    user.admin=res.data.admin;
    console.log(user)
    setBool(true)
    })
    .catch(error => setBool(true))
}