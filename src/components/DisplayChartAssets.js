import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";


function DisplayChartAssets(props) {
    
    const series = [{
              name: 'candle',
              data: props.chartData
    }]
    
    const options = {
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: 'CandleStick Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    }

    useEffect(() => {
        
        
    }, [])
    
    return (
        <div>
            {props.chartData && <Chart options={options} series={series} type="candlestick" height={350}  />}
        </div>
    )
}

export default DisplayChartAssets
