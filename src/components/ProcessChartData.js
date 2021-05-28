import React, { useEffect, useState } from 'react'
import DisplayChartAssets from './DisplayChartAssets'

function ProcessChartData(props) {

    const {data} = props
    const [chartData, setchartData] = useState(data.map((chunk) => {
        return(
            {
                x: new Date(chunk.time),
                y: [chunk.open, chunk.high, chunk.low, chunk.close]
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
                y: [chunk.open, chunk.high, chunk.low, chunk.close]
            }
        )
    }))
    }, [data])
    

    return (
        <div>
            {chartData.length!==0 && <DisplayChartAssets chartData = {chartData}/>}
        </div>
    )
}

export default ProcessChartData
