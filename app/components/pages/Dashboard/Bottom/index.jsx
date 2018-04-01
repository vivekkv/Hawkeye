import React from 'react';
import CpuChart from './cpu';
import Bandwidth from './bandwidth';
import DiskOsChart from './diskosChart';
import RecentProcess from './recentProcessChart';

export default class Bottom extends React.Component {

    render() {

        return <div className="row hwy-chart-container">

            <CpuChart {...this.props} />

            <Bandwidth {...this.props} />

            <DiskOsChart {...this.props} />

            <RecentProcess {...this.props} />

        </div>
    }
}