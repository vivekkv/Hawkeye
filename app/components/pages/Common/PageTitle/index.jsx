import React from 'react';
import Styles from './styles.css';

export default class PageTitle extends React.Component {

    render() {
        return <section className={Styles.wrapper}>
            {this.props.children}
        </section>
    }
}