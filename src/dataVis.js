import React, { useState,useContext } from 'react'

import axios from 'axios'

import Navbar from './Navbar'
import FirstChart from './firstChart'
import SecChart from './secChart'
import ThirdChart from './thirdChart'
import { UserContext } from './UserContext'

import './dataVis.css'

export default function DataVis() {
    const {value,setValue}=useContext(UserContext)
    const [firstChartTime, setFirstChartTime] = useState(7)
    const [secChartTime, setSecChartTime] = useState(7)
    const [location, setLocation] = useState("mellegue")

    const changeLocation = (event) => {
        switch (event.target.value) {

            case "M ellegue":
                setLocation('mellegue')
                break;
            case "Sarrat":
                setLocation('sarrat')
                break;
            case "Benmetir":
                setLocation('benmetir')
                break;
            case "Kasseb":
                setLocation('kasseb')
                break;
            case "Sidisalem":
                setLocation('sidisalem')
                break;
            case "Bouheurtma":
                setLocation('bouheurtma')
                break;
            case "Joumine":
                setLocation('joumine')
                break;
            case "Ghezala":
                setLocation('ghezala')
                break;
            case "Melah":
                setLocation('melah')
                break;
            case "Tine":
                setLocation('tine')
                break;
            case "Siliana":
                setLocation('siliana')
                break;
            case "Lakhmess":
                setLocation('lakhmess')
                break;
            case "Rmil":
                setLocation('rmil')
                break;
            case "Birmcherga":
                setLocation('birmcherga')
                break;
            case "Rmel":
                setLocation('rmel')
                break;
            case "Nebhana":
                setLocation('nebhana')
                break;
            case "Sidisaad":
                setLocation('sidisaad')
                break;
            case "Elhaouareb":
                setLocation('elhaouareb')
                break;
            case "Sficifa":
                setLocation('sficifa')
                break;
            case "Sidiach":
                setLocation('sidiach')
                break;
            case "Elbrek":
                setLocation('elbrek')
                break;
            case "Bezirk":
                setLocation('bezirk')
                break;
            case "Chiba":
                setLocation('chiba')
                break;
            case "Bezirk":
                setLocation('bezirk')
                break;
            case "Masri":
                setLocation('masri')
                break;
            case "Lebna":
                setLocation('lebna')
                break;
            case "Hma":
                setLocation('hma')
                break;
            case "Abid":
                setLocation('abid')
                break;
        }
    }

    const changeFirstTime = (event) => {
        if (event.target.value == 'Une semaine')
            setFirstChartTime(7)
        else if (event.target.value == 'Deux semaines')
            setFirstChartTime(14)
        else
            setFirstChartTime(30)
    }

    const changeSecTime = (event) => {
        if (event.target.value == 'Une semaine')
            setSecChartTime(7)
        else if (event.target.value == 'Deux semaines')
            setSecChartTime(14)
        else
            setSecChartTime(30)
    }

    return (
        <div>
            <Navbar where={'Vis'} user={value} />

            <div className='visSection'>
                <div className='dataHeader'>
                    <h1>Statistics</h1>

                    <div className='locationSection'>
                        <select className='location' onChange={changeLocation}>
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
                        <select className='time' onChange={changeFirstTime}>
                            <option>Une semaine</option>
                            <option>Deux semaines</option>
                            <option>30 jours</option>
                        </select>
                    </div>
                    <FirstChart date={firstChartTime} location={location} />
                </div>
                <div className='secChart'>
                    <div className='timeSection' id='time2'>
                        <select className='time' onChange={changeSecTime}>
                            <option>Une semaine</option>
                            <option>Deux semaines</option>
                            <option>30 jours</option>
                        </select>
                    </div>
                    <SecChart date={secChartTime} location={location} />
                </div>
                <div className='thirdChart'>
                    <ThirdChart />
                </div>
            </div>
        </div>

    )
}
