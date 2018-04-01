import React from 'react';

export default class Middle extends React.Component {

    render() {

        return <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" id="hwy-comm-globe-container">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="hwy-comm-globe">

                <div className="hwy-card">
                    <h4 style={{ "margin-top": "0" }}>
                        <i className="fa fa-globe"></i> Globe</h4>

                    <div className="row">

                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={{ "padding-left": "0" }}>

                            Globe

                        </div>

                    </div>

                </div>

            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="hwy-comm-feed">
                <div className="hwy-card">
                    <table className="hwy-globe-signature-table">
                        <thead>
                            <tr>
                                <td>Severity</td>
                                <td>Mac Address</td>
                                <td>Country</td>
                                <td>City</td>
                                <td>IP</td>
                                <td>Signature</td>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    }

}