import React, { useState, useRef } from 'react';

import { BsChevronDown } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import { createSearchParams, useNavigate } from 'react-router-dom';

import Navbar from './Navbar'

import Pic1 from './img/pic1.png'

import Pic2 from './img/pic2.png'

import './editHome.css'

export default function EditHome() {
    const click = useRef(false);
    console.log(click)
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
    for (let i = 0; dd !== 13 || mm !== "07"; i++) {
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
    console.log(jourList)
    return (
        <div>
            <Navbar where={'Edit'} user={true} />
            <form
                action="#"
                id="form"
            >
                <div className='editSection'>
                    <img id='pic1' src={Pic1} />
                    <img id='pic2' src={Pic2} />
                    <div className='barrageName'>
                        <HiOutlineChevronDown id='down1' size={25} />
                        <select className='nameSelection' onChange={(e) => setNom(e.target.value)} >
                            <option className='default-select' value="default" >Nom Barrage</option>
                            {barrageList.map((Nom) => <option key={Nom} value={Nom}>{Nom}</option>)}
                        </select>
                    </div>
                    <div className='date'>
                        <BsChevronDown id='down2' size={25} />
                        <select className='dateSelection' onChange={(e) => setDate(e.target.value)} >
                            <option className='default-select' value='default'>Date</option>
                            {jourList.map((date) => <option key={date} value={date}>{date}</option>)}
                        </select>
                    </div>
                </div>
                <h1 id='info2'>Veuillez insérer les données nécessaires .</h1>
                <button className='validerButton' onClick={() => { click.current = true; }} >Valider</button>
                {click.current ? Test(nom, date, click, navigate) : null}
            </form>
        </div>


    )
}

function Test(nom, date, click, navigate) {
    if (nom === 'default') {
        click.current = false;
        return (<p className='edit-error-nom'>Merci de selectionner le nom du barrage</p>)
    }
    if (date === 'default') {
        click.current = false;
        return (<p className='edit-error-date'>Merci de selectionner la date</p>)
    }
    click.current = false;
}

