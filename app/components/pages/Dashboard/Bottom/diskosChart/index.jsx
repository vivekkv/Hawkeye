import React from 'react';
import { Line } from 'react-chartjs-2';

export default class DiskOsChart extends React.Component {

    render() {

        var diskDataSet = this.props.data.get("lstResources").reverse().slice(0, 10).map((i) => { return i.diskTransfer }).toArray();

        const data = {
            labels: [],
            datasets: [
                {
                    lineTension: 0,
                    label: 'Disk',
                    backgroundColor: '',
                    borderColor: 'blue',
                    borderCapStyle: 'butt',
                    pointBorderColor: 'blue',
                    pointHoverBackgroundColor: 'blue',
                    pointHoverBorderColor: 'blue',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 1,
                    bezierCurve: false,
                    lineTension: 0,
                    data: diskDataSet
                }
            ]
        };  

        for (let i = 0; i < 10; i++) {
            data.labels.push(i);
        }

        return <div className="col-xs-3 col-lg-3 col-md-3 col-sm-3 hwy-yellow-card-header" id="hwy-disk-os-chart">

            <div className="hwy-card">
                <h4>
                    <i className="fa fa-circle"></i>Disk OS </h4>
                <span className="hwy-border-ylow-bottom"></span>
                <Line data={data} />
            </div>

        </div>
    }
}