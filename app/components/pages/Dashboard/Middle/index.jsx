import React from 'react';

export default class Middle extends React.Component {

    render() {

        return <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 hwy-yellow-card-header" id="hwy-comm-globe-container">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="hwy-comm-globe">

                <div className="hwy-card">
                    <h4>
                        <i className="fa fa-globe"></i>
                        Globe</h4>
                    <span className="hwy-border-ylow-bottom"></span>
                    <div id="globe"></div>
                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="hwy-comm-feed">
                <div className="hwy-card hwy-globe-table-wrapper">
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
                            {
                                this.props.data.get("lstGlobeData").map((map) => {

                                    return <tr>
                                        <td>{
                                            map.severity == 1 ? 
                                                "High" : map.severity == 2 ? 
                                                "Medium" : map.severity == 3 ? 
                                                "Low" : ""
                                        }</td>
                                        <td>{map.mac}</td>
                                        <td>{map.country}</td>
                                        <td>{map.city}</td>
                                        <td>{map.ip}</td>
                                        <td>{map.signature}</td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    }

    componentDidUpdate() {

        let data = this.props.data.get("lstGlobeData").filter(p=> p.marked == false);

        data.forEach((g) => {
            addPinToGlobe(g);
        });
    }

    componentDidMount() {

        if (!Detector.webgl) {
            console.log("WEBGL not found !.")
            Detector.addGetWebGLMessage({ parent: document.getElementById("hwy-container") });
        } else {
            createGlobe();
        }
    }
}