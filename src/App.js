import './App.less';
import { ResponsiveLine } from '@nivo/line'
import {createData as data, header} from './components/data'
import DataFetch from './components/DataFetch';


function App() {
    const theme = {
        background: "#222222",
        axis: {
            fontSize: "14px",
            tickColor: "#eee",
            ticks: {
            line: {
                stroke: "#555555"
            },
            text: {
                fill: "#ffffff"     
            }
            },
            legend: {
                text: {
                    fill: "#aaaaaa"
                },
            },
            
        },
        grid: {
            line: {
                stroke: "#555555"
            }
        },
        textColor:  "#ffffff"
    }

    const legends = [
            {
                
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    itemTextColor: "#ffffff",
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, 255)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, 0.03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                
            }
        ]
//{background: "#273859"}
  return (
    <div className="App" style={{height: 400}}>
        <h1 class="display-6">{header}</h1>

        {/* <ResponsiveLine
            
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            yFormat=" >-.2f"
            theme = {theme}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize:   1,
                tickPadding: 5,
                tickRotation: -90,
                legend: 'Time',
                legendOffset: 50,
                legendPosition: 'middle',   
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Price',
                legendOffset: -50,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends= {legends}
        /> */}
        <DataFetch/>
    </div>
  );
}

export default App;
