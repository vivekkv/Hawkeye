import React from 'react';

export default class Topleft extends React.Component {

    constructor() {
        super();
        this.animateList = this.animateList.bind(this);
    }

    render() {

        var dataSet = this.props.data.get("lstRecentFiles").reverse().slice(0, 20);

        return <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="hwy-recent-signatures-container"><div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="hwy-recent-file-activity">
            <div className="hwy-card">
                <h4>
                    {/* <i className="fa fa-file"></i> */}
                    Recent File activity ticks</h4>
                <span className="hwy-border-ylow-bottom"></span>

                <ul id="hwy-recent-file-activity-list" className="hwy-animated-list hwy-random-item-animated-list">
                    {
                        dataSet.map((i) => {

                            return <li key={i.id}>
                                <span>{i.name}</span>
                                <span className="hwy-run-animated-circle"></span>
                            </li>
                        })
                    }

                    {/* <li>
                        <span>asdfsdf</span>
                        <span className="hwy-run-animated-circle"></span>
                     </li>

                       <li>
                        <span>asdfsdf</span>
                        <span className="hwy-run-animated-circle"></span>
                     </li>

                       <li>
                        <span>asdfsdf</span>
                        <span className="hwy-run-animated-circle"></span>
                     </li>

                       <li>
                        <span>asdfsdf</span>
                        <span className="hwy-run-animated-circle"></span>
                     </li>

                       <li>
                        <span>asdfsdf</span>
                        <span className="hwy-run-animated-circle"></span>
                     </li>

                       <li>
                        <span>asdfsdf</span>
                        <span className="hwy-run-animated-circle"></span>
                     </li> */}

                </ul>
            </div>
        </div>
        </div>
    }

    animateList() {

        let max = this.props.data.get("lstRecentFiles").size;
        let width = $("#hwy-recent-signatures-container").width() - 40;
        let min = 0;

        let index = Math.floor(Math.random() * (max - min + 1)) + min;
        let ele = $(".hwy-run-animated-circle").eq(index);
        
        ele.show();
        ele.css({ "width": "5px", "height": "5px" });

        ele.animate({'margin-left': width}, 2000, function() {
            ele.remove();
        });
    }

    componentDidUpdate() {

        if($(".hwy-run-animated-circle").length >= 5) {
            
            let animate = this.animateList;
            setTimeout(function() {
                
                animate();

            }, 2000)

        }
    }
}