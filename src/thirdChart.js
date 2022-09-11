import React, { useEffect, useState } from 'react'

import './firstChart.css'

import axios from 'axios'

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
    DatasetController,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);



export default function FirstChart(props) {

    const [barragesDataArray, setBarragesDataArray] = useState([])

    const year = new Date().getFullYear
    const day = new Date().getDate() - 1
    const month = new Date().getMonth() + 1
    useEffect(() => {
        axios.get(`http://localhost:3020/api/element/visualisationThree?date=${year + '-' + month + '-' + day}`)
            .then((res) => {setBarragesDataArray(res.data.data)
            console.log(barragesDataArray)}) 
    },[props.location, props.date])

    const data = {
        labels: barragesDataArray.map(data => data.Date.substr(5, 5)),
        datasets: [
            {
                data: barragesDataArray.map(data => data.stock),
                lineTension: .5,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
    }

    const average = data.labels.reduce((sum, value) => sum + value, 0)

    return (
        <div>
            <h1 className='chartInfo3'>Apport D'eau Moyen</h1>
            <div className='testi3'>
                <Bar data={data} options={options} />
                
            </div>
        </div>
    )
}
