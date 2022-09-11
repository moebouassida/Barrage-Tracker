import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { VscChevronDown } from "react-icons/vsc"
import { FaCaretDown } from "react-icons/fa"

import Navbar from './Navbar'
import FirstChart from './firstChart'

import './dataVis.css'

export default function DataVis() {

    const [firstChartTime, setFirstChartTime] = useState(7)
    const [secChartTime, setSecChartTime] = useState(14)
    const [location, setLocation] = useState('mellegue')

    const change = (event) => {
        setLocation(event.target.value)
    }

    return (
        <div>
            <Navbar where={'Vis'} />

            <div className='visSection'>
                <div className='dataHeader'>
                    <h1>Statistics</h1>

                    <div className='locationSection'>
                        <select className='location' onChange={change}>
                            <option>Mellegue</option>
                            <option>Sarrat</option>
                            <option>Benmetir</option>
                            <option>Kasseb</option>
                            <option>Barbara</option>
                            <option>Sidisalem</option>
                            <option>Bouheurtma</option>
                            <option>Joumine</option>
                            <option>Ghezala</option> 
                            <option>Melah</option>
                            <option>Tine</option>
                            <option>Siliana</option>
                            <option>Lakhmess</option>
                            <option>Rmil</option>
                            <option>Birmcherga</option>
                            <option>Rmel</option>
                            <option>Nebhana</option>
                            <option>Sidisaad</option>
                            <option>Elhaouareb</option>
                            <option>Sficifa</option>
                            <option>Sidiach</option>
                            <option>Elbrek</option>
                            <option>Bezirk</option>
                            <option>Chiba</option>
                            <option>Masri</option>
                            <option>Lebna</option>
                            <option>Hma</option>
                            <option>Abid</option>
                        </select>
                    </div>
                </div>

                <div className='firstChart'>
                    <div className='timeSection' id='time1'>
                        <select className='time'>
                            <option>une semaine</option>
                            <option onClick={() => {setFirstChartTime(14)}}>deux semaines</option>
                            <option onClick={() => {setFirstChartTime(30)}}>30 jours</option>
                        </select>
                    </div>
                    <FirstChart date={firstChartTime} location={location} />
                </div>
                <div className='secChart'>
                    <div className='timeSection' id='time2'>
                        <select className='time'>
                            <option>une semaine</option>
                            <option onClick={() => {setFirstChartTime(14)}}>deux semaines</option>
                            <option onClick={() => {setFirstChartTime(30)}}>30 jours</option>
                        </select>
                    </div>
                </div>
                <div className='thirdChart'>
                    {console.log(location)}
                </div>
            </div>
        </div>

    )
}
