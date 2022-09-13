import React, { useEffect, useState } from 'react'

import { IoChevronUpCircleOutline, IoChevronDownCircleOutline } from "react-icons/io5"

import axios from 'axios'

import './thirdChart.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

import { Bar } from 'react-chartjs-2'
import { VscDiff } from 'react-icons/vsc'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)


export default function ThirdChart() {

    const [barragesData0Array, setBarragesData0Array] = useState([])
    const [barragesData1Array, setBarragesData1Array] = useState([])

    const year = new Date().getFullYear()
    var day1 = new Date().getDate() - 1
    var day0 = new Date().getDate() - 2
    var month = new Date().getMonth() + 1

    if (day0 < 10) { day0 = '0' + day0 }
    if (day1 < 10) { day1 = '0' + day1 }
    if (month < 10) { month = '0' + month }

    useEffect(() => {
        axios.get(`http://localhost:3020/api/element/visualisationThree?date=${year + '-' + month + '-' + day1}`)
            .then((res) => {
                setBarragesData1Array(res.data.day.elem)
            })

        axios.get(`http://localhost:3020/api/element/visualisationThree?date=${year + '-' + month + '-' + day0}`)
            .then((res) => {
                setBarragesData0Array(res.data.day.elem)
            })

    }, [])

    const data = {
        labels: barragesData1Array.map(val => val.Nom_Fr),
        datasets: [
            {
                data: barragesData1Array.map(val => val.stock),
                backgroundColor: '#7947F7',
            },
        ],
    }

    const average1 = data.datasets[0].data.reduce((sum, val) => sum + Number(val), 0)
    const average0 = barragesData0Array.map(val => val.stock).reduce((sum, val) => sum + Number(val), 0)

    const dif = average1 - average0

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },

        scales: {
            y: {
                display: false
            },
            x: {
                display: false
            }
        },
    }

    return (
        <div>
            <h1 className='chartInfo3'>Stock Des Barrages Quotidien</h1>
            <div className='testi3'>
                <Bar data={data} options={options} />
            </div>
            <h2 className='ADS'>{average1.toFixed(1)}mm</h2>
            {
                dif.toFixed(1) > 0 ?
                    <div>
                        <IoChevronUpCircleOutline id='difUp' size='1.5vw' />
                        <p className='dif' style={{color:'#13CD3C'}}>{dif.toFixed(1)}%</p> 
                    </div>
                    :
                    <div>
                        <IoChevronDownCircleOutline id='difDown' size='1.5vw' />
                        <p className='dif' style={{color:'red'}}>{dif.toFixed(1)}%</p> 
                    </div>
            }

        </div>
    )
}
