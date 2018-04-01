import React from 'react';
import Styles from './styles';

export default class InfoContainer extends React.Component {

    render() {

        return <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12 container-left-pad">
            <div className={[Styles.content_title, "fixed-element"].join(" ")}>

                <h4>{

                    this.props.icon ? <i  className={["fa " + this.props.icon , Styles.icon].join(" ")} /> : null
                }
                    
                {this.props.title}</h4>
            </div>

            <div className={Styles.body}>
                {this.props.children}
            </div>

        </div>
    }
}