import React from 'react';
import { connect } from 'react-redux';
import {Map } from 'immutable';
import ContentHolder from '../ContentHolder';
import PageLoader from '../PageLoader';

class PageHolder extends React.Component {

    render() {
        return <ContentHolder>

            <PageLoader showLoader={this.props.data.get("showLoader")} />

            {this.props.children}

        </ContentHolder>
    }
}

const storeState = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownState) => {

    return {
        dispatch,
    }
}

module.exports = connect(storeState, mapDispatchToProps)(PageHolder);