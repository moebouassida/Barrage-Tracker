import React, { useState, useRef } from 'react';

import { BsChevronDown } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';

import Navbar from './Navbar'

import Pic1 from './img/pic1.png'

import Pic2 from './img/pic2.png'

import './editHome.css'

export default function EditHome() {
    const [click, setClick] = useState(false)
    const [date, setDate] = useState('default');
    const [nom, setNom] = useState('default');
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
            .required("Date isprovided.")
    });
    const formik = useFormik({
        initialValues, validationSchema, onSubmit: (values) => navigate('/')
    });
    return (
        <div>
            <Navbar where={'Edit'} user={true} />
            <form action="#" onSubmit={formik.handleSubmit}>
                <div className='editSection'>
                    <img id='pic1' src={Pic1} />
                    <img id='pic2' src={Pic2} />

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
                    {formik.touched.Nom && formik.errors.Nom ? (<p className='edit-error-nom'>Merci de selectionner le nom du barrage</p>) : null}
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
                    {formik.touched.Date && formik.errors.Date ?(<p className='edit-error-date'>Merci de selectionner la date</p> ): null}
                </div>
                <h1 id='info2'>Veuillez insérer les données nécessaires .</h1>
                <button className='validerButton' type="submit" >Valider</button>
            </form>
        </div>


    )
}

