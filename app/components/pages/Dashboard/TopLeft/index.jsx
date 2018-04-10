import React from 'react';

export default class Topleft extends React.Component {

    constructor() {
        super();
        this.animateList = this.animateList.bind(this);
    }

    render() {

        let colors = ["#07e607", "#ffcc00", "red"]
        return <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 hwy-yellow-card-header" id="hwy-recent-signatures-container">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="hwy-recent-file-activity">
                <div className="hwy-card">

                    <h4><i className="fa fa-file"></i>Recent File activity</h4>
                    <span className="hwy-border-ylow-bottom"></span>

                    <ul id="hwy-recent-file-activity-list" className="hwy-animated-list hwy-random-item-animated-list">
                        {
                            this.props.data.get("lstRecentFiles").map((i, index) => {

                                return <li key={index}>
                                    <div className="hwy-info-container">
                                        <p className="hwy-li-name" title={i.userName} style={{ "background": this.getBackground(i.action) }}>{i.userName}</p>
                                        <span className="hwy-li-action">{i.action}, &nbsp;</span>
                                        <p className="hwy-li-file" title={i.fileName}>{i.fileName}</p>
                                    </div>
                                    <span className="hwy-run-animated-circle"></span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    }

    getBackground(action) {

        switch (action) {
            case "Created":
                return "#07e607"
            case "Accessed":
                return "#ffcc00"
            case "Rename":  
                return "red"
        }

    }

    animateList() {

        let max = 5;
        let width = $("#hwy-recent-signatures-container").width() - 40;
        let min = 0;
        let index = Math.floor(Math.random() * (max - min + 1)) + min;
        let ele = $(".hwy-run-animated-circle").eq(index);
        ele.show();
        ele.css({ "width": "5px", "height": "5px" });
        ele.animate({ 'margin-left': width }, 1000, function () {
            ele.remove();
        });
    }

    componentDidMount() {

        setInterval(() => {

            let circleElemets = $(".hwy-run-animated-circle").slice(0, 5);

            circleElemets.show();

        }, 1000);

    }

    componentDidUpdate() {

        // if ($(".hwy-run-animated-circle").length >= 1) {




        //     let animate = this.animateList;
        //     setTimeout(function () {

        //         animate();

        //     }, 2000)

        // }
    }
}