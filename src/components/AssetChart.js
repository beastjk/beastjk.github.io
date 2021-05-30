import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProcessChartData from './ProcessChartData'
import { Row, Col, Typography} from 'antd';
import { CircularProgress } from '@material-ui/core';

function AssetChart(props) {
    const {Text} = Typography
    const {assetSymbol} = props
    const [chartType, setchartType] = useState("candle-chart")
    const [assetsDataUrl, setassetsDataUrl] = useState("https://dev-api.shrimpy.io/v1/exchanges/binanceus/candles")
    const [params, setParams] = useState({quoteTradingSymbol: "USD",
        baseTradingSymbol: assetSymbol,
        interval : "1m"})

    const [asset_chart_data, setasset_chart_data] = useState([])
    // const headers = {'X-CoinAPI-Key': 'CCB0277D-9D40-4B99-B4AC-70A47139EECF'}

    function handleChartType(e){
        console.log("button pressed");
        setchartType(e.target.id)
        setassetsDataUrl(e.target.id === "line-chart" ? ("https://api.coingecko.com/api/v3/coins/" + (props.assetName).toLowerCase() + "/market_chart") : "https://dev-api.shrimpy.io/v1/exchanges/binanceus/candles")
        setParams(e.target.id ==="line-chart" ? {vs_currency : "usd", days: 3} : { quoteTradingSymbol: "USD", baseTradingSymbol: props.assetSymbol, interval : "1m"})
        
    }

    const fetchData = React.useCallback(() => {
        console.log("requested data..", assetsDataUrl, params);
        axios({
            "method": "GET",
            "url": (chartType === "line-chart" ? ("https://api.coingecko.com/api/v3/coins/" + (props.assetName).toLowerCase() + "/market_chart") : "https://dev-api.shrimpy.io/v1/exchanges/binanceus/candles"),
            "params": (chartType ==="line-chart" ? {vs_currency : "usd", days: 3} : { quoteTradingSymbol: "USD", baseTradingSymbol: props.assetSymbol, interval : "1m"})
        })
        .then((response) => {
            console.log('received', props.assetSymbol);
            setasset_chart_data(response.data)
            
        })
        .catch((error) => {
            setasset_chart_data([])
            console.log(error)
        })
    }, [props.assetSymbol, params, assetsDataUrl])


    useEffect(() => {
        console.log(assetsDataUrl, params);
        setasset_chart_data([])
        fetchData()
        console.log(chartType);
    }, [fetchData, assetsDataUrl, params, props.assetSymbol, chartType])

    return (
        <div>
            <div className="button-chart">
                <Row>
                    <Col span = {6}>
                        <Text className = "ant-btn check-class" type = "button" id = "candle-chart" onClick = {handleChartType}>Candle Chart</Text>
                    </Col>
                    <Col span = {6}>
                        <Text className = "ant-btn check-class" type = "button" id = 'line-chart' onClick = {handleChartType}>Line Chart</Text>  
                    </Col>    
                </Row>
                <br />
            </div>
                {/* <Text type="secondary">{assetSymbol.toUpperCase() ? assetSymbol.toUpperCase(): "No Selected Coin"}</Text> */}
            {asset_chart_data.length===0 && <CircularProgress className = "loader-class" color="secondary" />}
            {asset_chart_data.length!==0 && chartType && <ProcessChartData chartType = {chartType} assetSymbol = {props.assetSymbol} data = {asset_chart_data}/>}
            
        </div>
    )
}

export default AssetChart
