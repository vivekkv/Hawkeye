import React from 'react';

export default class TopRight extends React.Component {

    render() {
        return <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 hwy-yellow-card-header" id="hwy-recent-alpha">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="hwy-recent-applications">
                <div className="hwy-card">
                    
                    <h4><i className="fa fa-adn"></i> Recent Application visits</h4>

                    <span className="hwy-border-ylow-bottom"></span>

                    <ul id="hwy-recent-apps-list" className="hwy-animated-list">
                        {
                            this.props.data.get("lstApplications").map((application) => {
                                return <li>{application.name}</li>
                            })
                        }
                    </ul>

                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 hwy-yellow-card-header" id="hwy-recent-file-process">
                <div className="hwy-card">
                    
                    <h4><i className="fa fa-flag"></i>IP Reputation</h4>

                    <span className="hwy-border-ylow-bottom"></span>

                    <ul id="hwy-recent-apps-list" className="hwy-animated-list">
                        {
                            this.props.data.get("lstIPReputations").reverse().slice(0, 30).map((application) => {
                                return <li>{application.name}</li>
                            })
                        }
                    </ul>

                </div>
            </div>
        </div>
    }

}