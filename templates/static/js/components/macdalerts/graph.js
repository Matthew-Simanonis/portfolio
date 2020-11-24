import { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import Options from './options.js'
var React = require('react');

const Graph = ({ stock, prices, dates, setTimeframe }) => {
    
    const series = [
        {
            name: `${stock}`,
            data: prices,
            type: 'area'
        }
    ];
    const xaxis = {
        categories: dates
    };
    const options = {
        chart: {
            height: 350,
        },
        xaxis: {
            categories: dates,
            type: 'datetime',
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
                opacityTo: .7,
                stops: [0, 90, 100]
            }
        }
    };

    return (
        <section>
            <Options 
                setTimeframe={setTimeframe}
            />
            <h1>{stock} Price</h1>
            <div className='stock-graph'>
                <ReactApexChart series={series} options={options} height='350px'/>
            </div>
        </section>
    );
}
export default Graph;