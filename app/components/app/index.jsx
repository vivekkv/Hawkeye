import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

class App  extends React.Component {

    render() { 

        return <div>
            {this.props.children}
        </div>
    }
}

const storeState = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownState) => {

    return {
        dispatch,
    }
}

module.exports = connect(storeState, mapDispatchToProps)(App);