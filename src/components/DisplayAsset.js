import React from 'react'
import { Typography, Row, Col } from 'antd';
import '../static/css/DisplayAsset.css'


function DisplayAsset(props) {

    const { Text} = Typography;
    const {asset, handleClick, assetSymbol} = props
    // console.log(handleClick);
    return (
        <div>
            <Row >
                <Col span = {8}>
                    <Text key = {props.index} id = {asset.asset_symbol} value = {asset.asset_name} onClick = {handleClick} type={assetSymbol===asset.asset_symbol ? "danger" : "secondary"} >{asset.asset_name}</Text>
                </Col>
                <Col span = {8}>
                    <Text  key = {props.index} type={assetSymbol===asset.asset_symbol ? "danger" : "secondary"} >${asset.asset_price}</Text>
                </Col>
                <Col span = {8}>
                    <Text key = {props.index} type={assetSymbol===asset.asset_symbol ? "danger" : "secondary"} >{(asset.change_24h).toFixed(2)}%</Text>
                </Col>
            </Row>
        </div>
    )
}

export default DisplayAsset

