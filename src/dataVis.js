import React, { useState } from 'react'

import { VscChevronDown } from "react-icons/vsc";
import { FaCaretDown } from "react-icons/fa"

import Navbar from './Navbar';

import './dataVis.css'

export default function DataVis() {

    const [input, setInput] = useState('Choose a region')
    const [regions, setRegions] = useState(false)
    const [year, setYear] = useState(false)

    const locationStyle = {
        display: 'none'
    }

    const togglRegions = () => {
        setRegions(!regions)
    }

    return (
        <div>
            <Navbar where={'Vis'} />

            <div className='visSection'>
                <div className='dataHeader'>
                    <h1>Statistics</h1>

                    <div className='locationSection'>
                        <p id='mock' onClick={togglRegions}>{input}</p>
                        <FaCaretDown id='selector' size='1.2vw' onClick={togglRegions} />
                    </div>
                    <div className='location'>
                        {
                            regions ?
                                <div>
                                    <li onClick={togglRegions}>TEST3</li>
                                    <li onClick={togglRegions}>TEST2</li>
                                    <li onClick={togglRegions}>TEST3</li>
                                </div>
                                :
                                <div></div>
                        }

                    </div>
                </div>

                <div className='firstChart'>
                    <div className='firstChartHeader'>
                        <div className='yearSection'>
                            <p id='mock2' onClick={togglRegions}>2022</p>
                            <VscChevronDown id='selector2' size='1.2vw' onClick={togglRegions} />
                        </div>
                        <div className='year'>
                            {
                                year ?
                                    <div>
                                        <li onClick={togglRegions}>2021</li>
                                        <li onClick={togglRegions}>2020</li>
                                        <li onClick={togglRegions}>2019</li>
                                    </div>
                                    :
                                    <div></div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
