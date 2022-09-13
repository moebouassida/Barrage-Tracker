import React from 'react'

import { BsChevronDown } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";

import Navbar from './Navbar'

import Pic1 from './img/pic1.png'

import Pic2 from './img/pic2.png'

import './editHome.css'

export default function editHome() {
    return (
        <div>
            <Navbar where={'Edit'} user={true} />
            <div className='editSection'>
                <img id='pic1' src={Pic1} />
                <img id='pic2' src={Pic2} />
                <div className='barrageName'>
                    <HiOutlineChevronDown id='down1' size={25} />
                    <select className='nameSelection'>
                        <option className='default'>Nom Barrage</option>
                        <option>test1</option>
                        <option>test2</option>
                        <option>test3</option>
                    </select>
                </div>

                <div className='date'>
                    <BsChevronDown id='down2' size={25} />
                    <select className='dateSelection'>
                        <option className='default'>Date</option>
                        <option>date1</option>
                        <option>date2</option>
                        <option>date3</option>
                    </select>
                </div>

            </div>
            <h1 id='info2'>Veuillez insérer les données nécessaires .</h1>
            <button className='validerButton' onClick={() =>
                {window.location.reload()}
            }>Valider</button>
        </div>
    )
}
