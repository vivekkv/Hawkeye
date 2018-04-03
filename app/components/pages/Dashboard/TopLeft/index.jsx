import React from 'react';

export default class Topleft extends React.Component {

    render() {

        var dataSet = this.props.data.get("lstRecentFiles");

        return <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="hwy-recent-signatures-container"><div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="hwy-recent-file-activity">
                <div className="hwy-card">
                    <h4>
                        <i className="fa fa-file"></i>Recent File activity ticks</h4>

                    <ul id="hwy-recent-file-activity-list" className="hwy-animated-list">
                        {
                            dataSet.map((i) => {

                                return <li key={i.id}>{i.name}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    }
}