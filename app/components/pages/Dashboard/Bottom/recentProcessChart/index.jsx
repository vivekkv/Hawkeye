import React from 'react';

export default class RecentProcesss extends React.Component {

    render() {

        return <div className="col-xs-3 col-lg-3 col-md-3 col-sm-3 hwy-yellow-card-header" id="hwy-recent-process-chart">

            <div className="hwy-card">
                <h4>
                    <i className="fa fa-microchip"></i>Process</h4>
                <span className="hwy-border-ylow-bottom"></span>


                <table className="hwy-globe-signature-table">
                    <thead style={{ "border": "0" }}>
                        <tr>
                            <td>Name</td>
                            <td>Computer</td>
                            <td>Username</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.get("lstRecentProcess").map((process) => {

                                return <tr>
                                    <td>{process.name}</td>
                                    <td>{process.computer}</td>
                                    <td>{process.username}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>

        </div>
    }
}