import { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
var React = require('react');
 
var dataPoints = [];

const Graph = ({ stock, prices, dates }) => {
    
    const series = [
        {
            name: stock,
            data: prices,
        }
    ];
    const xaxis = {
        categories: dates
    };
    const options = {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        }
    };

    return (
        <section>
            <h1>{stock}</h1>
            <div className='stock-graph'>
                <ReactApexChart series={series} options={options} type='area' height='400px' xaxis={xaxis}/>
            </div>
        </section>
    );
}
export default Graph;