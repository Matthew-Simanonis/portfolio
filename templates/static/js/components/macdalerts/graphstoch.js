import { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
var React = require('react');

const GraphStoch = ({ dataframe }) => {
    const series = [
        {
            name: `K line`,
            data: dataframe.stochk,
            type: 'line'
        },
        {
            name: 'D line',
            data: dataframe.stochd,
            type: 'line'
        }
    ];
    const options = {
        title: {
            text: 'Stochastic Indicator'
        },
        chart: {
            id: 'stoch',
            group: 'stoch'
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
        colors: ['#fcc203', '#108fe3'],
        yaxis: {
            opposite: true,
            decimalsInFloat: 1,
            labels: {
                minWidth: 40
            }
        },
        annotations : {
            yaxis: [{
                y: 80,
                y2: 20,
                opacity: .2 
            }]
        },
        stroke: {
            width: 2
        }
    };

    return (
        <div id='stoch-graph'>
            <ReactApexChart series={series} options={options} height='350px'/>
        </div>
    );
}
export default GraphStoch;