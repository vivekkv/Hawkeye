import React from 'react';
import { Line } from 'react-chartjs-2';

export default class Bandwidth extends React.Component {

    render() {

        var dataSet = this.props.data.get("lstBandwidth").reverse().slice(0, 30).map((i) => { return Number(i.speed) }).toArray();

        const data = {
            labels: [],
            datasets: [
                {
                    lineTension: 0,
                    label: '',
                    // fill: false,
                    // lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    // borderDash: [],
                    // borderDashOffset: 0.0,
                    // borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    // pointBackgroundColor: '#fff',
                    // pointBorderWidth: 1,
                    // pointHoverRadius: 5,
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

        return <div className="col-xs-3 col-lg-3 col-md-3 col-sm-3 hwy-yellow-card-header" id="hwy-network-bandwith-chart">

            <div className="hwy-card">
                <h4>
                    <i className="fa fa-bars"></i>Bandwidth chart</h4>

                <span className="hwy-border-ylow-bottom"></span>

                <Line data={data} />

            </div>

        </div>
    }

}