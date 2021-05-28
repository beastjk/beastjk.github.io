/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import ProcessData from "./ProcessData"
import axios from 'axios'

export default function DataFetch() {
    const [assets, setAssets] = useState([])
    
    // C99C093E-B248-42DD-A3D0-D07A88BB3D88
    // 3B8CFDA2-B414-41E0-ADCD-D81C15DB6910
    const assetsDataUrl = "https://api.coingecko.com/api/v3/coins/markets"
    const params = {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 100,
        page: 1,
        sparkline: false,
        price_change_percentage: "24h"
    }
    // const headers = {'X-CoinAPI-Key': 'CCB0277D-9D40-4B99-B4AC-70A47139EECF'}

    const fetchData = React.useCallback(() => {
        axios({
            "method": "GET",
            "url": assetsDataUrl,
            "params": params
        })
        .then((response) => {
            setAssets(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])


    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div>
            <ProcessData data = {assets}/>
        </div>
    )
}



