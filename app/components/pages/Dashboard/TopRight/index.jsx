import React from 'react';

export default class TopRight extends React.Component {

    render() {
        return <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 hwy-yellow-card-header" id="hwy-recent-alpha">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="hwy-recent-applications">
                <div className="hwy-card">

                    <h4><i className="fa fa-adn"></i> Websites</h4>

                    <span className="hwy-border-ylow-bottom"></span>

                    <div className="hwy-card hwy-globe-table-wrapper">

                        <table className="hwy-globe-signature-table">
                            <thead style={{ "border": "0" }}>
                                <tr>
                                    <td>Category</td>
                                    <td>Domain</td>
                                    <td>IP</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.data.get("lstWebsites").map((website) => {

                                        return <tr>
                                            <td>{website.cat}</td>
                                            <td>{website.domain}</td>
                                            <td>{website.private_ip}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 hwy-yellow-card-header" id="hwy-recent-file-process">
                <div className="hwy-card">

                    <h4><i className="fa fa-flag"></i>SSH</h4>

                    <span className="hwy-border-ylow-bottom"></span>

                    <table className="hwy-globe-signature-table">
                        <thead style={{ "border": "0" }}>
                            <tr>
                                <td>Dest IP</td>
                                <td>Source IP</td>
                                <td>PORT</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.data.get("lstIPReputations").map((website) => {

                                    return <tr>
                                        <td>{website.destination_ip}</td>
                                        <td>{website.source_ip}</td>
                                        <td>{website.destination_port}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    }

}