import React, { useState, useEffect } from 'react';

import { BsChevronDown } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';

import Navbar from './Navbar'

import Pic1 from './img/back_brg.png'



import './editHome.css'

export default function EditHome() {
    const navigate = useNavigate()
    let barrageList = []
    const username = localStorage.getItem('username');
    if (username !== "admin") {
        barrageList.push(username);
    }
    else {
        barrageList = ['Mellegue', 'Sarrat', 'Benmetir', 'Kasseb', 'Barbara', 'Sidisalem', 'Bouheurtma', 'Joumine', 'Ghezala', 'Melah', 'Tine', 'Siliana', 'Lakhmess', 'Rmil', 'Birmcherga', 'Rmel', 'Nebhana', 'Sidisaad', 'Elhaouareb', 'Sficifa', 'Sidiach', 'Elbrek', 'Bezirk', 'Chiba', 'Masri', 'Lebna', 'Hma', 'Abid'];
    }
    const jourList = [];
    const list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var today = new Date();
    var dd = today.getDate() + 1;
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    for (let i = 0; i < 50; i++) {
        if (dd - 1 === 0) {
            mm--;
            dd = list[mm - 1]
            if (mm < 10) {
                mm = '0' + mm;
            }
        }
        else {
            dd--;
            if (dd < 10) {
                dd = '0' + dd;
            }
        }
        if (mm - 1 === 0) {
            yyyy--;
            mm = 12;
        }
        jourList.push(`${yyyy}-${mm}-${dd}`)
    }
    const initialValues = {
        Email: "",
        Password: "",
    };
    const validationSchema = Yup.object({
        Nom: Yup.string()
            .required("Nom required *"),
        Date: Yup.string()
            .required("Date required *.")
    });
    const formik = useFormik({
        initialValues, validationSchema, onSubmit: (values) => navigate('/')
    });
    return (
        <div className='wrapper'>
            <Navbar where={'Edit'} user={true} />
            
            <div className="lineEdit">
        <div className="lineEdit1"></div>
        <div className="lineEdit2"></div>
      </div>
                 <div className='editSection' > 

                    
                    <form action="#" onSubmit={formik.handleSubmit} >
                    
                    <div className='barrageName'>
                        <HiOutlineChevronDown id='down1' size={25} />
                        <select className='nameSelection' name="Nom"
                            value={formik.values.Nom}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}  >
                            <option className='default-select' value="default" >Nom Barrage</option>
                            {barrageList.map((Nom) => <option key={Nom} value={Nom}>{Nom}</option>)}
                        </select>
                    </div>
                    {formik.errors.Nom ? (<p className='edit-error-nom'>Nom Barrage obligatoire*</p>) : null}
                    <div className='date'>
                        <BsChevronDown id='down2' size={25} />
                        <select className='dateSelection' name="Date"
                            value={formik.values.Date}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} >
                            <option className='default-select' value='default'>Date</option>
                            {jourList.map((date) => <option key={date} value={date}>{date}</option>)}
                        </select>
                    </div>
                    {formik.errors.Date ?(<p className='edit-error-date'>Date obligatoire*</p> ): null}
                <h1 id='info2'>Veuillez insérer les données nécessaires .</h1>
                <button className='validerButton' type="submit" >Valider</button>
                
            </form>
            <img className='pic1' src={Pic1} />
            </div> 
            
        </div>


    );
}

