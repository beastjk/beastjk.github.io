import React, { useEffect, useState } from 'react'
import DisplayChartAssets from './DisplayChartAssets'


function ProcessChartData(props) {

    let {data} = props
    const precision = 3
    const [chartData, setchartData] = useState(props.chartType==="line-chart" ? (data.prices) : ( Array.isArray(data) && data.map((chunk) => {
            return(
                {
                    x: new Date(chunk.time),
                    y: [Number(chunk.open).toFixed(precision), Number(chunk.high).toFixed(precision) , Number(chunk.low).toFixed(precision), Number(chunk.close).toFixed(precision)]
                }
            )
        }))
    )
    // const chartData = data.map((chunk) => {
    //     return(
    //         {
    //             x: new Date(chunk.time),
    //             y: [chunk.open, chunk.high, chunk.low, chunk.close]
    //         }
    //     )
    // })

    useEffect(() => {
        console.log("re-rendered");
        console.log("Re-rendered data ....", data);
        setchartData(props.chartType==="line-chart" ? (data.prices) : (data.map((chunk) => {
            return(
                {
                    x: new Date(chunk.time),
                    y: [Number(chunk.open).toFixed(precision), Number(chunk.high).toFixed(precision) , Number(chunk.low).toFixed(precision), Number(chunk.close).toFixed(precision)]
                }
            )
        })))
    }, [data])
    

    return (
        <div>
            {chartData && <DisplayChartAssets chartType = {props.chartType} assetSymbol = {props.assetSymbol} chartData = {chartData}/>}
        </div>
    )
}

export default ProcessChartData
