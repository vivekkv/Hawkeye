import React from 'react';
import Dropdown from '../../../presentational/Dropdown';
import DateRange from '../../../presentational/DateRange';
import Row from '../../../presentational/Row';
import Styles from './styles.css';
import moment from 'moment';

export default class SensorFilter extends React.Component {

    render() {

        let currentDate = moment(new Date());
        let minDate = currentDate.subtract(40, 'days');

        return <Row>

            <div className="col-xs-12 col-md-12 col-lg-12 col-sm-12">

                <Row>

                    <div className="col-xs-12 col-md-5 col-lg-5 col-sm-12">

                        <Dropdown 
                            name="sensorId"
                            value={this.props.dateFilter.get("sensorId")}
                            updateAlways={true}
                            onChange={this.props.onSensorIdChange}
                            dataSource={this.props.dateFilter.get("sensors").toArray()} 
                            placeholder="All sensors" />


                    </div>

                    <div className="col-xs-12 col-md-5 col-lg-5 col-sm-12">

                        <DateRange name="DateRange" minDate={minDate} ranges={this.props.ranges} onChange={this.props.onChange}
                            startDate={this.props.startDate}
                            endDate={this.props.endDate} />

                    </div>

                    {
                        this.props.showLink === false ? null :
                            <div className="col-xs-12 col-md-2 col-lg-2 col-sm-12">

                                <a className={Styles.log_link} href={this.props.redirectTo}>{this.props.redirectToText}</a>

                            </div>
                    }



                </Row>

            </div>

        </Row>
    }
}