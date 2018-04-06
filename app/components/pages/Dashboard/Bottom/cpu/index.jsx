import React from 'react';
import { Line } from 'react-chartjs-2';

export default class CpuChart extends React.Component {

    render() {

        var dataSet = this.props.data.get("lstResources").reverse().slice(0, 100).map((i) => { return i.cpuUsage }).toArray();

        const data = {
            labels: [],
            datasets: [
                {
                    lineTension: 0,
                    label: '',
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 1,
                    bezierCurve: false,
                    lineTension: 0,
                    data: dataSet
                }
            ]
        };

        for (let i = 0; i < 40; i++) {
            data.labels.push("");
        }

        return <div className="col-xs-3 col-lg-3 col-md-3 col-sm-3 hwy-yellow-card-header" id="hwy-cpu-usage-chart">

            <div className="hwy-card">
                <h4>
                    <i className="fa fa-desktop"></i>CPU Usage Chart</h4>
                <span className="hwy-border-ylow-bottom"></span>
                <Line data={data} />
            </div>

        </div>
    }
}