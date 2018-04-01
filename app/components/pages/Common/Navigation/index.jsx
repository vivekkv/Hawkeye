import React from 'react';
import Styles from './styles';

export default class Navigation extends React.Component {

    render() {

        return <div className="m-menu__submenu  m-menu__submenu--fixed-xl m-menu__submenu--center">
            <span className="m-menu__arrow m-menu__arrow--adjust"></span>
            <div className="m-menu__subnav">
                <ul className="m-menu__content">
                    <li className="m-menu__item">
                        <h3 className="m-menu__heading m-menu__toggle">
                            <i className="m-menu__link-icon fa fa-binoculars"></i>
                            <span className="m-menu__link-text">Beacon
                                        </span>
                        </h3>
                        <ul className="m-menu__inner">
                            <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                <a href="/#/beacon" className="m-menu__link ">
                                    <span className="m-menu__link-text">Home
                                                </span>
                                </a>
                            </li>
                            <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                <a href="/#/beacon/devicecentre" className="m-menu__link ">
                                    <span className="m-menu__link-text">Device Centre
                                                </span>
                                </a>
                            </li>
                            <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                <a href="/#/beacon/ipcentre" className="m-menu__link ">
                                    <span className="m-menu__link-text">IP Center
                                                </span>
                                </a>
                            </li>
                            <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                <a href="/#/beacon/panicboard" className="m-menu__link ">
                                    <span className="m-menu__link-text">Panic Board
                                                </span>
                                </a>
                            </li>
                            <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                <a href="/#/beacon/map" className="m-menu__link ">
                                    <span className="m-menu__link-text">Threat Exchange
                                                </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="m-menu__item">
                        <h3 className="m-menu__heading m-menu__toggle">
                            <span className="m-menu__link-text">IDS
                                        </span>
                            <i className="m-menu__ver-arrow la la-angle-right"></i>
                        </h3>
                        <ul className="m-menu__inner">

                            <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                <a href="/#/ids/alerts" className="m-menu__link ">
                                    <span className="m-menu__link-text">Alerts
                                                </span>
                                </a>
                            </li>
                            <li className="m-menu__item" data-redirect="true" aria-haspopup="true">
                                <a className="m-menu__link " href="/#/ids/ssh">
                                    <span className="m-menu__link-text">SSH
                                                </span>
                                </a>
                            </li>
                            <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                <a href="/#/ids/application/" className="m-menu__link ">
                                    <span className="m-menu__link-text">Applications
                                                </span>
                                </a>
                            </li>
                            <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                <a className="m-menu__link " href="/#/ids/website">
                                    <span className="m-menu__link-text">Websites
                                                </span>
                                </a>
                            </li>
                            <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                <a className="m-menu__link " href="/#/ids/files">
                                    <span className="m-menu__link-text">Files
                                                </span>
                                </a>
                            </li>
                            <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                <a className="m-menu__link " href="/#/ids/ports">
                                    <span className="m-menu__link-text">Ports   
                                                </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="m-menu__item">
                        <h3 className="m-menu__heading m-menu__toggle">
                            <i className="m-menu__link-icon fa fa-anchor"></i>
                            <span className="m-menu__link-text">IPS
                                        </span>
                            <i className="m-menu__ver-arrow la la-angle-right"></i>
                        </h3>
                        <ul className="m-menu__inner">
                            <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                <a href="/#/ips/defender" className="m-menu__link ">
                                    <span className="m-menu__link-text">Defender
                                                </span>
                                </a>
                            </li>
                            <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                <a href="/#/ips/ruleManagement" className="m-menu__link ">
                                    <span className="m-menu__link-text">Rule Management
                                                </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="m-menu__item">
                        <h3 className="m-menu__heading m-menu__toggle">
                            <i className="m-menu__link-icon fa fa-bar-chart"></i>
                            <span className="m-menu__link-text">Reports
                                        </span>
                            <i className="m-menu__ver-arrow la la-angle-right"></i>
                        </h3>
                        <ul className="m-menu__inner">
                            <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                <a href="/#/reports" className="m-menu__link ">
                                    <span className="m-menu__link-text">Insight 360
                                                </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    }

}