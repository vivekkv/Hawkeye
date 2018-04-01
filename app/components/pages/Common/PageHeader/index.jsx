import React from 'react';
import ContentHolder from '../ContentHolder';
import { browserHistory } from 'react-router';
import Styles from './styles';

export default class PageHolder extends React.Component {

    render() {

        if (this.props.showHeader) {

            return <div className="m-subheader">
                    <div className="d-flex align-items-center">
                        {
                            (this.props.defaultEmpty === true) ? null :

                                <h3 className={Styles.header_text}>
                                    {this.props.mainHeader} <span className={"pg_title_commentry"}>{this.props.helptext? this.props.helptext: " "}</span>
                                </h3>

                        }
                        {
                            (this.props.defaultEmpty === true) ? null :


                                <div className="align-items-right" >
                                    {this.props.children}
                                </div>
                        }

                    </div>
                </div>

        }

        return <div className="col-xs-12 col-md-12 col-lg-12 col-sm-12">
            <br /><br /><br /><br />
        </div>
    }

    goBack() {
        browserHistory.goBack      
    }
}