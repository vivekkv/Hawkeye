import React from 'react';
import Styles from './styles';

export default class extends React.Component {

    render() {

        return <div className={Styles.card}>
                <section className={Styles.header}>

                    {
                        this.props.headerIco ? <div className={Styles.header_icon}> <i className={"fa " + this.props.headerIco} /> </div>  : null
                    }

                    <h3>
                        {this.props.headerTitle}
                    </h3>

                    <a className={Styles.header_anchor}><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                
                </section>

                <section className={Styles.body}>
                    {
                        this.props.children
                    }
                </section>
        </div>
    }
}