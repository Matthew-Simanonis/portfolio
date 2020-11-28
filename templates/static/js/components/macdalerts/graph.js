import { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import Options from './options.js'
import GraphMacd from './graphmacd'
import GraphStoch from './graphstoch.js';
var React = require('react');

const Graph = ({ stock, dataframe, setTimeframe }) => {

    const currentPrice = dataframe.prices.slice(-1)[0]
    const series = [
        {
            name: `Close`,
            data: dataframe.prices,
            type: 'area'
        },
        {
            name: '50 day MA',
            data: dataframe.fiftyma,
            type: 'line'
        },
        {
            name: '200 day MA',
            data: dataframe.twohundredma,
            type: 'line'
        }
    ];
    const options = {
        title: {
            text: `${stock} Price`
        },
        chart: {
            height: 350,
            id: 'price',
            group: 'main'
        },
        xaxis: {
            categories: dataframe.dates,
            type: 'datetime',
            labels: {
                datetimeFormatter: {
                  month: 'MMM \'yy',
                  day: 'dd MMM yy',
                  hour: 'HH:mm'
                }
              }
        },
        yaxis: {
            opposite: true,
            decimalsInFloat: 2,
            labels: {
                minWidth: 40
            }
        },
        legend: {
            position: 'top'
        },
        colors: ['#2CB700', '#3145ad', '#d62811'],
        fill: {
            type: ['gradient', 'solid', 'solid'], 
            colors: ['#1ed61e'],
            gradient: {
                type: 'vertical',
                gradientToColors: ['#2CB700'],
                shadeIntensity: .7,
                opacityFrom: .9,
                opacityTo: .6,
                stops: [0, 100]
            }
        },
        stroke: {
            width: [3, 2, 2]
        }
     };
    return (
        <section>
            <Options 
                setTimeframe={setTimeframe}
            />
            <h1>{stock}</h1>
            <h1>Current Price: ${currentPrice}</h1>
            <div className='graphs'>
                <div className='stock-graphs'>
                    <ReactApexChart series={series} options={options} height='350px'/>
                </div>
                    <GraphMacd dataframe={dataframe}/>
                    <GraphStoch dataframe={dataframe}/>
            </div>
        </section>
    );
}
export default Graph;