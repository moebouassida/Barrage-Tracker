import React, { useEffect, useState } from 'react'

import './secChart.css'

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

    const [stockDataArray, setStockDataArray] = useState([])

    useEffect(() => {
        console.log(props.date + '---' + props.location)
        axios.get(`http://localhost:3020/api/element/visualisationTwo?date=${props.date}&Nom_Fr=${props.location}`)
            .then((res) => {setStockDataArray(res.data.data)}) 
    }, [])

    const data = {
        labels: stockDataArray.map(data => data.Date.substr(5, 5)),
        datasets: [
            {
                data: stockDataArray.map(data => data.stock),
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
            <h1 className='chartInfo2'>Stock D'eau Moyen</h1>
            <div className='testi2'>
                <Line data={data} options={options} />        
            </div>
        </div>
    )
}
