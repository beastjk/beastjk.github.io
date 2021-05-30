/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { Typography,  Row, Col } from 'antd';
import '../static/css/ProcessData.css'
import DisplayAsset from './DisplayAsset';
import AssetChart from './AssetChart';
import { Scrollbars } from 'react-custom-scrollbars';
    



export default function DataFetch(props) {

    const {data} = props
    const { Text } = Typography;
    const [assetSymbol, setAssetSymbol] = useState("")
    const [assetName, setAssetName] = useState("")
    const asset_data = data.map(asset => {
        
        return(
            {
                asset_symbol: asset.symbol,
                asset_name: asset.name,
                asset_price: asset.current_price,
                change_24h: asset.price_change_percentage_24h_in_currency
            }
        )
    })

    async function handleClick(e){
        setAssetSymbol(e.target.id);
        setAssetName(e.target.innerHTML)
    }

    return (
        
        <div>
            {!asset_data && <h2>Processing...</h2>} 
            <div className="assets_wrapper">
                
                <Row>
                    <Col span = {6}>
                        <div className = "assets-heading">
                            <Row>
                                <Col span = {23}>
                                    <Row>
                                        <Col span = {8}>
                                            <Text type="secondary">Coin Name</Text>
                                        </Col>
                                        <Col span = {8}>
                                            <Text type="secondary">Price(USD)</Text>
                                        </Col>
                                        <Col span = {8}>
                                            <Text type="secondary">Change(24h)</Text>
                                        </Col>
                                    </Row>
                                </Col>
                                
                                <hr />
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span = {6}>
                        <Scrollbars style={{ width: 350, height: 600 }}>
                            {asset_data.map((asset, index) => {
                                return(
                                    <div className = "assets-grid">
                                        <Row>
                                            <Col span = {24} className = "assets-shadow">
                                                <DisplayAsset assetSymbol = {assetSymbol} index = {index} asset = {asset} handleClick = {handleClick} />  
                                            </Col>
                                            <hr />
                                        </Row>
                                    </div>
                                )
                            })}
                        </Scrollbars>
                    </Col>
                    <Col span = {16}>
                        {assetSymbol && <AssetChart assetSymbol = {assetSymbol} assetName = {assetName}/>}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

