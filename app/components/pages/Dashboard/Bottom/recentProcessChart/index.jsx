import React from 'react';
import { Line } from 'react-chartjs-2';

export default class RecentProcesss extends React.Component {

    render() {

        var dataSet = this.props.data.get("lstRecentProcess").map((i) => { return i.count }).toArray();

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

        for(let i=0; i<40; i++) {
            data.labels.push("");
        }

        return  <div className="col-xs-3 col-lg-3 col-md-3 col-sm-3" id="hwy-recent-process-chart">

            <div className="hwy-card">
                <h4>
                    <i className="fa fa-microchip"></i>Recent Process</h4>
                    <Line data={data} />
            </div>

        </div>
    }
}