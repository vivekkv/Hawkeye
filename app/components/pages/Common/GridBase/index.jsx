import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import ContentHolder from '../../Common/ContentHolder';
import PageHeader from '../../Common/PageHeader';
import Grid from '../../../presentational/Grid';
import Row from '../../../presentational/Row';
import moment from 'moment';
import { createActionType } from '../../../../reduxImplementations/actionBuilder';
import SensorFilter from '../../Common/SensorFilter';
import { push } from 'react-router-redux';

export default class GridBase extends React.Component {

    render() {

        const { columns, startDate, endDate, data, title, redirectTo, selectable, onChange } = this.props;
        let redirectToText = redirectTo ? "See Logs" : null;

        let options = {
            'toolbar': ["excel"],
            'excel': {
                'fileName': "Application Log.xlsx",
                'allPages': true
            },
            'filterable': {
                'mode': "row"
            },
            'sortable': true,
            'pageable': {
                'input': false,
                'numeric': true,
                'previousNext': false,
            },
            "dataSource": {
                'data': data,
                'pageSize': 10
            },
            "columns": columns,
            'selectable': selectable,
            'onChange': onChange
        }

        let range = { startDate, endDate };

        return (<ContentHolder>
 
                <br />
                <br />
                
            {
                this.props.backTo ? 
                <Row>

                <p className="anchor_back_link_box">
                    <a className="anchor_back_link"  onClick={() => { this.props.dispatch(push(this.props.backTo ? this.props.backTo: "/beacon")) }}><i className="fa fa-arrow-left" /> Back</a>
                </p>

                

            </Row>
            : null
            }

            <PageHeader showHeader={true} mainHeader={this.props.title} subHeaderIcon="fa fa-circle" subheader={"App List"} action={""} ></PageHeader>
                    
            <br />

            <Row>

                <div className="col-xs-12 col-md-12 col-lg-12 col-sm-12">

                    <SensorFilter redirectTo={redirectTo}
                        redirectToText={redirectToText}
                        onChange={this.onDateFilteChange.bind(this)}
                        onSensorIdChange={this.onSensorIdChange.bind(this)}
                        dateFilter={this.props.dateFilter}
                        startDate={startDate} endDate={endDate} ranges={range} />

                </div>
                <br /><br /><br />

                <div className="col-xs-12 col-md-12 col-lg-12 col-sm-12">

                        <Grid gridOptions={options} />

                </div>

            </Row>

        </ContentHolder>)
    }

    onSensorIdChange(name, value) {
        this.props.dispatch(createActionType("OnSensorIdChange", { value  }));
        this.props.onChange("SensorId", value);
    }

    onDateFilteChange(name, value) {
        
        this.props.dispatch(createActionType("DateRangeChange", value));
        this.props.onChange("DateRange", value);
    }
}

const storeState = (state, ownProps) => {
    return {
        'startDate': Map(state.common.dateFilter).get("startDate"),
        'endDate': Map(state.common.dateFilter).get("endDate"),
        'dateFilter': Map(state.common.dateFilter)
    }
}

const mapDispatchToProps = (dispatch, ownState) => {

    return {
        dispatch
    }
}

module.exports = connect(storeState, mapDispatchToProps)(GridBase);