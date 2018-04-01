import React from 'react';
import { Line } from 'react-chartjs-2';

export default class Bandwidth extends React.Component {

    render() {

        var dataSet = this.props.data.get("lstBandwidth").map((i) => { return i.count }).toArray();

        const data = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60 ],
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

        return <div className="col-xs-3 col-lg-3 col-md-3 col-sm-3" id="hwy-network-bandwith-chart">

            <div className="hwy-card">
                <h4>
                    <i className="fa fa-bars"></i>Bandwidth chart</h4>

                <Line data={data} />

            </div>

        </div>
    }

}