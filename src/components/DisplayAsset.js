import React from 'react'
import { Typography, Row, Col } from 'antd';


function DisplayAsset(props) {

    const { Text} = Typography;
    const {asset, handleClick} = props
    // console.log(handleClick);
    return (
        <div>
            <Row>
                <Col span = {8}>
                    <Text id = {asset.asset_symbol} onClick = {handleClick} type="secondary">{asset.asset_name}</Text>
                </Col>
                <Col span = {8}>
                    <Text type="secondary">${asset.asset_price}</Text>
                </Col>
                <Col span = {8}>
                    <Text type="secondary">{(asset.change_24h).toFixed(2)}%</Text>
                </Col>
            </Row>
        </div>
    )
}

export default DisplayAsset

