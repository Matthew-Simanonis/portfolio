import { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
var React = require('react');

const GraphMacd = ({ stock, dataframe }) => {
    const series = [
        {
            name: `${stock}`,
            data: dataframe.macd,
            type: 'line'
        }
    ];
    const options = {
        chart: {
            height: 150,
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
        colors: ['#2CB211'],
    };

    return (
        <section>
            <div className='stock-graph'>
                <ReactApexChart series={series} options={options} height='350px'/>
            </div>
        </section>
    );
}
export default GraphMacd;