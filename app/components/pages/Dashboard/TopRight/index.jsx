import React from 'react';

export default class TopRight extends React.Component {

    render() {
        return <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="hwy-recent-alpha">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="hwy-recent-applications">
                <div className="hwy-card">
                    <h4>
                        <i className="fa fa-adn"></i> Recent Application visits</h4>

                    <ul id="hwy-recent-apps-list" className="hwy-animated-list">

                    </ul>

                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="hwy-recent-file-process">
                <div className="hwy-card">
                    <h4>
                        <i className="fa fa-flag"></i>IP Reputation</h4>

                    <ul id="hwy-recent-apps-list" className="hwy-animated-list">

                    </ul>

                </div>
            </div>
        </div>
    }

}