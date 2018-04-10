import React from 'react';
import { Line } from 'react-chartjs-2';

export default class Bandwidth extends React.Component {

    render() {

        var dataSet = this.props.data.get("lstBandwidth").reverse().slice(0, 10).map((i) => { return Number(i.speed) / (1024 * 1024)  }).toArray();

        const data = {
            labels: [],
            datasets: [
                 {
                    lineTension: 0,
                    label: 'Bandwidth (MB)',
                    backgroundColor: '',
                    borderColor: 'green',
                    borderCapStyle: 'butt',
                    pointBorderColor: 'green',
                    pointHoverBackgroundColor: 'green',
                    pointHoverBorderColor: 'green',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 1,
                    bezierCurve: false,
                    lineTension: 0,
                    data: dataSet
                }
            ]
        };

        for (let i = 0; i < 10; i++) {
            data.labels.push(i);
        }

        return <div className="col-xs-3 col-lg-3 col-md-3 col-sm-3 hwy-yellow-card-header" id="hwy-network-bandwith-chart">

            <div className="hwy-card">
                <h4>
                    <i className="fa fa-bars"></i>Bandwidth </h4>

                <span className="hwy-border-ylow-bottom"></span>

                <Line data={data} />

            </div>

        </div>
    }

}