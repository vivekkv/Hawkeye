import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import ContentHolder from '../Common/ContentHolder';
import Row from 'presentational/Row';
import { createActionType } from '../../../reduxImplementations/actionBuilder';
import { REFRESH_DASHBOARD } from '../../../reduxImplementations/constants/dashboard';
import TopLeft from './TopLeft';
import Middle from './Middle';
import TopRight from './TopRight';
import Bottom from './Bottom';

class Dashboard extends React.Component {

    render() {

        return <div className="container-fluid">

            <div className="hwy-container">

                <div className="row hwy-live-box-container">

                    <TopLeft {...this.props} />
                    <Middle {...this.props} />
                    <TopRight {...this.props} />

                </div>

                <Bottom {...this.props} />

            </div>

        </div>
    }

    componentDidMount() {
        
        let refreshDashboard = this.props.refreshDashboard
        setInterval(function() {

            refreshDashboard();

        }, 1000)
    }

}

const storeState = (state, ownProps) => {
    return {
        'data': Map(state.dashboard)
    }
}

const mapDispatchToProps = (dispatch, ownState) => {

    return {
        dispatch,
        onChange: function (name, value) {
            dispatch(createActionType(INPUT_CHANGE, { name, value }));
        },
        refreshDashboard() {
            dispatch(createActionType(REFRESH_DASHBOARD))
        }
    }
}

module.exports = connect(storeState, mapDispatchToProps)(Dashboard);