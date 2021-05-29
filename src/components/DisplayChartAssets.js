import React, { useEffect } from 'react'
import ReactApexChart from 'react-apexcharts';
import '../static/css/DisplayChartAssets.css'


function DisplayChartAssets(props) {
    
    const series = [{
        name: props.assetSymbol,
        data: props.chartData
    }]
    
    const options = {
        chart: {
            type: 'candlestick',
            height: 350,
             animations: {
                enabled: true,
             }
              
            // events: {
            //     beforeZoom: function(ctx) {
            //         // we need to clear the range as we only need it on the iniital load.
            //         ctx.w.config.xaxis.range = undefined
            //     }
            // }
        },
        theme: {
            mode: 'dark'
        },
        plotOptions: {
            // candlestick: {
            //     colors: {
            //         upward: '#3C90EB',
            //         downward: '#DF7D46'
            //     },
            // },
            candlestick: {
                useFillColor: false
            }
        },
        title: {
            text: props.assetSymbol.toUpperCase() + ' Price Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime',
            // range: new Date().getTime() - (new Date().getTime() - 518400000)
        },
        yaxis: {
            tooltip: {
                enabled: true,
                theme: 'dark'
            },
            title: {
                text: "Price(USD)",
                // color: '#ffffff'
            }
        }
    }

    // const options =  {
    //     chart: {
    //     height: 350,
    //     type: 'candlestick',
    //     },
    //     title: {
    //     text: 'CandleStick Chart - Category X-axis',
    //     align: 'left'
    //     },
    //     annotations: {
    //     xaxis: [
    //         {
    //         x: 'Oct 06 14:00',
    //         borderColor: '#00E396',
    //         label: {
    //             borderColor: '#00E396',
    //             style: {
    //             fontSize: '12px',
    //             color: '#fff',
    //             background: '#00E396'
    //             },
    //             orientation: 'horizontal',
    //             offsetY: 7,
    //             text: 'Annotation Test'
    //         }
    //         }
    //     ]
    //     },
    //     tooltip: {
    //         enabled: true,
    //     },
    //     xaxis: {
    //         type: 'category',
    //         labels: {
    //             formatter: function(val) {
    //             return dayjs(val).format('MMM DD HH:mm')
    //             }
    //         }
    //     },
    //     yaxis: {
    //         tooltip: {
    //             enabled: true
    //         }
    //     }
    // }
            
          

    useEffect(() => {
        
        
    }, [])
    
    return (
        <div className = 'chart-bg'>
            {props.chartData && <ReactApexChart options={options} series={series} type="candlestick" height={550}  />}
        </div>
    )
}

export default DisplayChartAssets
