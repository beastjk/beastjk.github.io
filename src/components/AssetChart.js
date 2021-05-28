import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProcessChartData from './ProcessChartData'

function AssetChart(props) {

    const {assetSymbol} = props
    const assetsDataUrl = "https://dev-api.shrimpy.io/v1/exchanges/coinbasepro/candles"
    // const params = {
    //     quoteTradingSymbol: "USD",
    //     baseTradingSymbol: assetSymbol,
    //     interval : "1m"
    // }
    const [asset_chart_data, setasset_chart_data] = useState([])
    // const headers = {'X-CoinAPI-Key': 'CCB0277D-9D40-4B99-B4AC-70A47139EECF'}

    const fetchData = React.useCallback(() => {
        axios({
            "method": "GET",
            "url": assetsDataUrl,
            "params": {
                quoteTradingSymbol: "USD",
                baseTradingSymbol: props.assetSymbol,
                interval : "1m"
            }
        })
        .then((response) => {
            console.log('received', props.assetSymbol);
            setasset_chart_data(response.data)
            
        })
        .catch((error) => {
            console.log(error)
        })
    }, [props.assetSymbol])


    useEffect(() => {
        fetchData()
    }, [fetchData, assetSymbol])

    return (
        <div>
            {assetSymbol ? assetSymbol: "No Selected Coin"}
            {asset_chart_data.length!==0 && <ProcessChartData data = {asset_chart_data}/>}
        </div>
    )
}

export default AssetChart
