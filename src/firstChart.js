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

    const [apportDataArray, setApportDataArray] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3020/api/element/visualisationTwo?date=${props.date}&Nom_Fr=${props.location}`)
            .then((res) => {setApportDataArray(res.data.data)
            console.log(apportDataArray)}) 
    },[props.location, props.date])

    const data = {
        labels: apportDataArray.map(data => data.Date.substr(5, 5)),
        datasets: [
            {
                data: apportDataArray.map(data => data.stock),
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
            <h1 className='chartInfo'>Apport D'eau Moyen</h1>
            <div className='testi'>
                <Line data={data} options={options} />
                
            </div>
        </div>
    )
}
