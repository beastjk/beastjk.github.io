import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import '../static/css/DisplayChartAssets.css'

import { Line } from "react-chartjs-2";


function DisplayChartAssets(props) {
    
    const series = [{
        name: props.assetSymbol,
        data: props.chartData
    }]

    const [chart, setchart] = useState(props.chartType==="line-chart" ? "area" : "candlestick")
    

    const data = {
        labels : props.chartData.map(chunk => new Date(chunk[0]).toLocaleString()),
        datasets: [
            {
                label: props.assetSymbol.toUpperCase() + ' Chart',
                data: props.chartData.map(chunk => chunk[1]),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
        

    }
    
    const options = {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Price(USD)'
                }
            }]
        }     
    }
    const optionsCandle = {
        chart: {
            type: 'candlestick',
            height: 350,
             animations: {
                enabled: true,
             }
        },
        theme: {
            mode: 'dark'
        },
        plotOptions: {
           
            candlestick: {
                useFillColor: false
            }
        },
        title: {
            text: props.assetSymbol.toUpperCase() + ' Price Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime',
            // range: new Date().getTime() - (new Date().getTime() - 518400000)
        },
        yaxis: {
            tooltip: {
                enabled: true,
                theme: 'dark'
            },
            title: {
                text: "Price(USD)",
                // color: '#ffffff'
            }
        }
    }   
          

    useEffect(() => {
        setchart(props.chartType==="line-chart" ? "area" : "candlestick")
        
    }, [props.chartType])
    
    return (
        <div className = 'chart-bg'>
            {props.chartData && props.chartType!=="line-chart" && <ReactApexChart options={optionsCandle} series={series} type={"candlestick"} height={550}  />}
            {props.chartData && props.chartType==="line-chart" && <Line data={data} options = {options} />}
        </div>
    )
}

export default DisplayChartAssets
