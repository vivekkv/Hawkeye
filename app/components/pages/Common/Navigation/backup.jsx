import React from 'react';
import Styles from './styles';

export default class Navigation extends React.Component {

    render() {

        return <div id="m_header_menu" className="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-dark m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-light m-aside-header-menu-mobile--submenu-skin-light ">
            <ul className="m-menu__nav  m-menu__nav--submenu-arrow ">

                <li className="m-menu__item  m-menu__item--submenu" data-menu-submenu-toggle="click" data-redirect="true" aria-haspopup="true">
                    
                    <a className="m-menu__link m-menu__toggle">
                        <span className="m-menu__item-here"></span>
                        <span className="m-menu__link-text"> <i className="m-menu__link-icon fa fa-bars"></i>
                        </span>

                    </a>


                    <div className="m-menu__submenu  m-menu__submenu--fixed-xl m-menu__submenu--center">
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
                                            <a href="/#/ids" className="m-menu__link ">
                                                <span className="m-menu__link-text">Alert
                                                </span>
                                            </a>
                                        </li>
                                        <li className="m-menu__item" data-redirect="true" aria-haspopup="true">
                                            <a className="m-menu__link ">
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
                                            <a className="m-menu__link ">
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
                                            <a href="/#/ids/" className="m-menu__link ">
                                                <span className="m-menu__link-text">Access Manager
                                                </span>
                                            </a>
                                        </li>
                                        <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                            <a href="/#/ids/" className="m-menu__link ">
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
                                            <a href="#" className="m-menu__link ">
                                                <span className="m-menu__link-text">Audit
                                                </span>
                                            </a>
                                        </li>
                                        <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                            <a href="#" className="m-menu__link ">
                                                <span className="m-menu__link-text">Execuitive Report
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="m-menu__item">
                                    <h3 className="m-menu__heading m-menu__toggle">
                                        <i className="m-menu__link-icon fa fa-cog"></i>
                                        <span className="m-menu__link-text">Settings
                                        </span>
                                        <i className="m-menu__ver-arrow la la-angle-right"></i>
                                    </h3>
                                    <ul className="m-menu__inner">
                                        <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                            <a href="#" className="m-menu__link ">
                                                <span className="m-menu__link-text">Me
                                                </span>
                                            </a>
                                        </li>
                                        <li className="m-menu__item " data-redirect="true" aria-haspopup="true">
                                            <a href="#" className="m-menu__link ">
                                                <span className="m-menu__link-text">Sesnors
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    
                </li>
            </ul>
        </div>

    }

}