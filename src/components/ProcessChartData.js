import React, { useEffect, useState } from 'react'
import DisplayChartAssets from './DisplayChartAssets'


function ProcessChartData(props) {

    let {data} = props
    const precision = 3
    // data = data.slice(data.length/2, data.length)
    const [chartData, setchartData] = useState(data.map((chunk) => {
        return(
            {
                x: new Date(chunk.time),
                y: [Number(chunk.open).toFixed(precision), Number(chunk.high).toFixed(precision) , Number(chunk.low).toFixed(precision), Number(chunk.close).toFixed(precision)]
            }
        )
    }))
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
        setchartData(data.map((chunk) => {
        return(
            {
                x: new Date(chunk.time),
                y: [Number(chunk.open).toFixed(precision), Number(chunk.high).toFixed(precision) , Number(chunk.low).toFixed(precision), Number(chunk.close).toFixed(precision)]
            }
        )
    }))
    }, [data])
    

    return (
        <div>
            {chartData.length!==0 && <DisplayChartAssets assetSymbol = {props.assetSymbol} chartData = {chartData}/>}
        </div>
    )
}

export default ProcessChartData
