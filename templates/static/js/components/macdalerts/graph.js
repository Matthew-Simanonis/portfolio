import { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import Options from './options.js'
import GraphMacd from './graphmacd'
var React = require('react');

const Graph = ({ stock, dataframe, setTimeframe }) => {

    const currentPrice = '12'
    const series = [
        {
            name: `${stock}`,
            data: dataframe.prices,
            type: 'area'
        }
    ];
    const options = {
        chart: {
            height: 350,
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
        colors: ['#2CB700'],
        fill: {
            type: 'gradient', 
            colors: ['#1ed61e'],
            gradient: {
                type: 'vertical',
                gradientToColors: ['#2CB700'],
                shadeIntensity: .7,
                opacityFrom: .9,
                opacityTo: .6,
                stops: [0, 100]
            }
        }
    };

    return (
        <section>
            <Options 
                setTimeframe={setTimeframe}
            />
            <h1>{stock}</h1>
            <h1>Current Price: ${currentPrice}</h1>
            <div className='stock-graph'>
                <ReactApexChart series={series} options={options} height='350px'/>
            </div>
            <GraphMacd dataframe={dataframe} stock={stock}/>
        </section>
    );
}
export default Graph;