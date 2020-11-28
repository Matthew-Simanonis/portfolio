import { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
var React = require('react');

const GraphMacd = ({ dataframe }) => {
    const series = [
        {
            name: `MACD`,
            data: dataframe.macd,
            type: 'line'
        },
        {
            name: 'signal',
            data: dataframe.signal,
            type: 'line'
        }
    ];
    const options = {
        title: {
            text: 'MACD/Signal line'
        },
        chart: {
            id: 'macd',
            group: 'stock'
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
        legend: {
            position: 'top'
        },
        colors: ['#108fe3', '#fcc203'],
        yaxis: {
            opposite: true,
            decimalsInFloat: 1,
            labels: {
                minWidth: 40
            }
        },
        stroke: {
            width: 2
        }
    };

    return (
        <div id='macd-graph'>
            <ReactApexChart series={series} options={options} height='350px'/>
        </div>
    );
}
export default GraphMacd;