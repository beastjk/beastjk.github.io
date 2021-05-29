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
                            {asset_data.map(asset => {
                                return(
                                    <div className = "assets-grid">
                                        <Row>
                                            <Col span = {24} className = "assets-shadow">
                                                <DisplayAsset asset = {asset} handleClick = {handleClick} />  
                                            </Col>
                                            <hr />
                                        </Row>
                                    </div>
                                )
                            })}
                        </Scrollbars>
                    </Col>
                    <Col span = {16}>
                        {assetSymbol && <AssetChart assetSymbol = {assetSymbol}/>}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

// import React, { Component } from 'react'

// export class processData extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//                         priceAssets: [],
//                     };
//     }

//     async processPriceAssets(){
//         Array.isArray(this.state.priceAssets) && this.props.data.map(chunk=> this.setState(this.state.priceAssets.push({
//             asset_name: chunk.name,
//             current_price: chunk.current_price
//         })), () => console.log(typeof priceAssets))
//         console.log(this.state.priceAssets[10].asset_name);
//     }

//     componentDidMount(){
//         console.log('Process Rendered..');
//         console.log(this.props.data);
//         // this.processPriceAssets()
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Process Rendered..</h2>
//             </div>
//         )
//     }
// }

// export default processData
