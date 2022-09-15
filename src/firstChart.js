import React, { useEffect, useState } from 'react'

import './firstChart.css'

import axios from 'axios'

import { IoChevronUpCircleOutline, IoChevronDownCircleOutline } from "react-icons/io5"

import { Line } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'

import gradient from 'chartjs-plugin-gradient'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    gradient,
    Filler
);

export default function FirstChart(props) {

    const [apportDataArray, setApportDataArray] = useState([])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])

    const [stat, setStat] = useState(14)

    useEffect(() => {

        if (props.date === 14) setStat(28)
        else if (props.date === 30) setStat(60)

        axios.get(`http://localhost:3020/api/element/visualisationOne?Nom_Fr=${props.location}&date=${props.date}`)
            .then((res) => {
                setApportDataArray(res.data.data)
            })
    }, [props.date, props.location])

    useEffect(() => {
        axios.get(`http://localhost:3020/api/element/visualisationOne?Nom_Fr=${props.location}&date=14`)
            .then((res) => {
                setData1(res.data.data.slice(7, 14))
            })

        axios.get(`http://localhost:3020/api/element/visualisationOne?Nom_Fr=${props.location}&date=28`)
            .then((res) => {
                setData2(res.data.data.slice(14, 28)) 
            })

        axios.get(`http://localhost:3020/api/element/visualisationOne?Nom_Fr=${props.location}&date=60`)
            .then((res) => {
                setData3(res.data.data.slice(30, 60))
            })
    }, [])



    const data = {
        labels: apportDataArray.map(data => data.Date.substr(5, 5)),
        datasets: [
            {
                data: apportDataArray.map(data => data.Apports),
                lineTension: .5,
                fill:true,
                borderColor: 'rgb(255, 99, 132)',
                gradient: {
                    backgroundColor: {
                        axis: 'y',
                        colors: {
                            0: 'white',
                            50: 'rgba(255, 47, 94, 0.1)',                  
                        }
                    }
                },

            },
        ],
    }

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
                grid: {
                    display: false
                },
            }
        },   
        maintainAspectRatio: false 
    }

    const average = data.datasets[0].data.reduce((sum, value) => sum + Number(value), 0)
    const averageString1 = String(average.toFixed(1))
    const averageString2 = String(average.toFixed(2))
    const averageString3 = String(average.toFixed(3))
    console.log(averageString1.slice(-1))

    const apports1 = data1.map(val => val.Apports)
    const averagePriorWeek = apports1.reduce((sum, value) => sum + Number(value), 0)
    const dif1 = average - averagePriorWeek

    const apports2 = data2.map(val => val.Apports)
    const averagePrior2Weeks = apports2.reduce((sum, value) => sum + Number(value), 0)
    const dif2 = average - averagePrior2Weeks

    const apports3 = data3.map(val => val.Apports)
    const averagePriorMonth = apports3.reduce((sum, value) => sum + Number(value), 0)
    const dif3 = average - averagePriorMonth

    return (
        <div>
            <h1 className='chartInfo'>Apport D'eau Moyen</h1>
            <div className='testi'>
                <Line data={data} options={options} />
            </div>

            {
                averageString1.slice(-1) == 0 ? 
                <h1 className='ADS1'>{average.toFixed(2)}m³</h1>
                : averageString1.slice(-2) == 0 ? 
                <h1 className='ADS1'>{average.toFixed(3)}m³</h1>
                :<h1 className='ADS1'>{average.toFixed(1)}m³</h1>
            }
            
            {
                stat === 14 ?
                    dif1.toFixed(1) >= 0 ?
                        <div>
                            <IoChevronUpCircleOutline id='dif1Up' size='27px' />
                            <p className='dif1' style={{ color: '#13CD3C' }}>+{dif1.toFixed(1)}%</p>
                        </div>
                        :
                        <div>
                            <IoChevronDownCircleOutline id='dif1Down' size='27px' />
                            <p className='dif1' style={{ color: 'red' }}>{dif1.toFixed(1)}%</p>
                        </div>
                    :
                    stat === 28 ?
                        dif2.toFixed(1) >= 0 ?
                            <div>
                                <IoChevronUpCircleOutline id='dif1Up' size='27px' />
                                <p className='dif1' style={{ color: '#13CD3C' }}>+{dif2.toFixed(1)}%</p>
                            </div>
                            :
                            <div>
                                <IoChevronDownCircleOutline id='dif1Down' size='27px' />
                                <p className='dif1' style={{ color: 'red' }}>{dif2.toFixed(1)}%</p>
                            </div>
                        :
                        stat === 60 ?
                            dif3.toFixed(1) >= 0 ?
                                <div>
                                    <IoChevronUpCircleOutline id='dif1Up' size='27px' />
                                    <p className='dif1' style={{ color: '#13CD3C' }}>+{dif3.toFixed(1)}%</p>
                                </div>
                                :
                                <div>
                                    <IoChevronDownCircleOutline id='dif1Down' size='27px' />
                                    <p className='dif1' style={{ color: 'red' }}>{dif3.toFixed(1)}%</p>
                                </div>
                            : null
            }
        </div>
    )
}
