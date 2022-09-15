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
)

export default function SecChart(props) {

    const [stockDataArray, setStockDataArray] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:3020/api/element/visualisationTwo?date=${props.date}&Nom_Fr=${props.location}`)
            .then((res) => setStockDataArray(res.data.data))
    }, [props.date, props.location])

    const data = {
        labels: stockDataArray.map(data => data.Date.substr(5, 5)),
        datasets: [
            {
                data: stockDataArray.map(data => data.stock),
                lineTension: 0,
                fill:true,
                borderColor: '#4CDFE8',
                gradient: {
                    backgroundColor: {
                        axis: 'y',
                        colors: {
                            0: 'white',
                            50: 'rgba(76, 223, 232, .01)',                  
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


    return (
        <div>
            <h1 className='chartInfo2'>Stock D'eau Moyen</h1>
            <div className='testi2'>
                <Line data={data} options={options} />
            </div>
        </div>
    )
}
