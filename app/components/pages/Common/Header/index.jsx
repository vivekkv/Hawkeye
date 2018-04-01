import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import { Map } from 'immutable';
import Styles from './styles.css';
import { createActionType  } from "reduxImplementations/actionBuilder";
import { sentinelHomeUrl, pathfinderHomeUrl, beaconHomeUrl, trailsHomeUrl, trailsIamHomeUrl } from '../../../../utils/apiConfig';

class Header extends React.Component {

    render() {
        return <header className="m-grid__item	m-header" data-minimize="minimize" data-minimize-offset="200" data-minimize-mobile-offset="200">
            <div className="m-header__top">
                <div className="m-container--responsive m-container--xxl m-container--full-height m-page__container">
                    <div className="m-stack m-stack--ver m-stack--desktop">
                        <div className="m-stack__item m-brand">
                            <div className="m-stack m-stack--ver m-stack--general m-stack--inline">
                                <div className="m-stack__item m-stack__item--middle m-brand__logo">
                                    <a href="/#/" className="m-brand__logo-wrapper">
                                        <img className="    " src="assets/images/beacon_logo.png" />
                                    </a>
                                </div>
                                <div className="m-stack__item m-stack__item--middle m-brand__tools">
                                    <a id="m_aside_header_menu_mobile_toggle" href="javascript:;" className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                                        <span></span>
                                    </a>
                                    <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                                        <i className="flaticon-more"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                            <div className="m-stack__item m-stack__item--fluid m-header-head" id="Div1">
                                <div className="m-container--responsive m-container--xxl m-container--full-height m-page__container">
                                    <div className="m-stack m-stack--ver m-stack--desktop">
                                        <div className="m-stack__item m-stack__item--middle m-stack__item--fluid">

                                            <button className="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-light " id="m_aside_header_menu_mobile_close_btn">
                                                <i className="la la-close"></i>
                                            </button>

                                            <div id="m_header_menu" className="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-dark m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-light m-aside-header-menu-mobile--submenu-skin-light ">
                                                <ul className="m-menu__nav  m-menu__nav--submenu-arrow ">

                                                    <li className={["m-menu__item  m-menu__item--submenu"].join(" ")} data-menu-submenu-toggle="click" data-redirect="true" aria-haspopup="true">

                                                        <a className="m-menu__link m-menu__toggle" id="btn_menu_open" onClick={this.props.toggleNavigation}>
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-text"> <i  className="m-menu__link-icon fa fa-bars"></i>
                                                            </span>

                                                        </a>

                                                        <Navigation/>

                                                    </li>
                                                </ul>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
                                <div id="m_header_topbar" className="m-topbar  m-stack m-stack--ver m-stack--general">
                                    <div className="m-stack__item m-topbar__nav-wrapper">
                                        <ul className="m-topbar__nav m-nav m-nav--inline">
                                        

                                            <li className={"m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light m-dropdown-product-menu"} data-dropdown-toggle="click" aria-expanded="true">
                                                <a className="m-nav__link m-dropdown__toggle" id='btn_side_bar_menu' onClick={this.props.toggleHeaderProductListing}>
                                                    <span className="m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide"></span>
                                                    <span className="m-nav__link-icon">
                                                        <span className="m-nav__link-icon-wrapper">
                                                            {/* <i className="fa fa-bars"></i> */}
                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF4SURBVDhPpZO9LkRRFIWvv0jIaMigUCAhkvFTIBEmUSgoKATRkZBJJkqSES9ApxSNqBSikWh4Ad6AikZBYaITCTO+dc5yX2BWsrL3/s6ac+/ce25SrVbrKpXKIrVAzScWfS/exhu4TYxMA/2KsxP/wSVAEL00YP5kLH5qtmUk9k3pECxGlGpGYepnHEP4xmw/kij4sDbI44rBF+5RmPoQUlFHZrr9IPoyDn9NC4OwOWr4sUSfgc1Sp6j1xuIjznYa1Sh20tN+xLqle5wxP8Yf+A2vi3HlMfpnrOwtc5NgAadiYdoblI3Ers1KRkHMQ9pgM45RwEmH343Ersz2jIKY+wUz+IT5knpIDQ+Mfs3sgjpmlsVn5gditYvddDx1ZEt42VhXGzXbxeGVUZtx0XwhBNlgFadiIefwi5F0brbjWbkf3C1Yy1HOaYNxrA9DQK+uS2H6OzGJPjww6jz+NXvFreJaaIf1UePZRsyNZunxlpiz4rglSZLkD2IviQIaGOylAAAAAElFTkSuQmCC" />
                                                        </span>
                                                    </span>
                                                </a>
                                                <div className="m-dropdown__wrapper">
                                                    <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                                                    <div className="m-dropdown__inner">

                                                        <div className="m-dropdown__body m-dropdown__body--paddingless">
                                                            <div className="m-dropdown__content">
                                                                <div className="m-scrollable" data-max-height="380" data-mobile-max-height="200" data-scrollable="false">
                                                                    <div className="m-nav-grid m-nav-grid--skin-light">
                                                                        <div className="m-nav-grid__row">
                                                                            <a className="m-nav-grid__item" href={beaconHomeUrl}>
                                                                              <img src="assets/images/beacon_colored.png" className="product_header_logo" />
                                                                                <span className="m-nav-grid__text">
                                                                                    Beacon
                                                                                </span>
                                                                            </a>
                                                                            <a className="m-nav-grid__item" href={pathfinderHomeUrl}>
                                                                            <img src="assets/images/pathfinder_colored.png" className="product_header_logo" />
                                                                                <span className="m-nav-grid__text">
                                                                                    Pathfinder
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="m-nav-grid__row">
                                                                            <a className="m-nav-grid__item" href={trailsHomeUrl}>
                                                                            <img src="assets/images/trails_colored.png" className="product_header_logo" />
                                                                                <span className="m-nav-grid__text">
                                                                                    Trails
                                                                                </span>
                                                                            </a>
                                                                            
                                                                            <a className="m-nav-grid__item" href={trailsIamHomeUrl}>
                                                                            <img src="assets/images/I_am_colored.png" className="product_header_logo" />
                                                                                <span className="m-nav-grid__text">
                                                                                I AM
                                                                            </span>
                                                                            </a>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            {/* <li className="m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light" data-dropdown-toggle="click">
                                                <a href="#" className="m-nav__link m-dropdown__toggle">
                                                    <span className="m-topbar__userpic m--hide">
                                                    </span>
                                                    <span className="m-topbar__welcome m-nav__link-icon"><a target="_blank" href={sentinelHomeUrl}><i className="fa fa-home" /></a>
                                                            </span>
                                                </a>
                                                <div className="m-dropdown__wrapper">
                                                    <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                                                    <div className="m-dropdown__inner">
                                                        <div className="m-dropdown__header m--align-center">
                                                            <div className="m-card-user m-card-user--skin-dark">
                                                                <div className="m-card-user__pic">
                                                                </div>
                                                                <div className="m-card-user__details">
                                                                    <span className="m-card-user__name m--font-weight-500">Mark Andre
                                                                            </span>
                                                                    <a href="" className="m-card-user__email m--font-weight-300 m-link">mark.andre@gmail.com
                                                                            </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="m-dropdown__body">
                                                            <div className="m-dropdown__content">
                                                                <ul className="m-nav m-nav--skin-light">
                                                                    <li className="m-nav__section m--hide">
                                                                        <span className="m-nav__section-text">Section
                                                                                </span>
                                                                    </li>
                                                                    <li className="m-nav__item">
                                                                        <a href="#" className="m-nav__link">
                                                                            <i className="m-nav__link-icon flaticon-profile-1"></i>
                                                                            <span className="m-nav__link-title">
                                                                                <span className="m-nav__link-wrap">
                                                                                    <span className="m-nav__link-text">My Profile
                                                                                            </span>
                                                                                    <span className="m-nav__link-badge">

                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="m-nav__item">
                                                                        <a href="#" className="m-nav__link">
                                                                            <i className="m-nav__link-icon flaticon-share"></i>
                                                                            <span className="m-nav__link-text">Activity
                                                                                    </span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="m-nav__item">
                                                                        <a href="#" className="m-nav__link">
                                                                            <i className="m-nav__link-icon flaticon-chat-1"></i>
                                                                            <span className="m-nav__link-text">Messages
                                                                                    </span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="m-nav__separator m-nav__separator--fit"></li>
                                                                    <li className="m-nav__item">
                                                                        <a href="#" className="m-nav__link">
                                                                            <i className="m-nav__link-icon flaticon-info"></i>
                                                                            <span className="m-nav__link-text">FAQ
                                                                                    </span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="m-nav__item">
                                                                        <a href="#" className="m-nav__link">
                                                                            <i className="m-nav__link-icon flaticon-lifebuoy"></i>
                                                                            <span className="m-nav__link-text">Support
                                                                                    </span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="m-nav__separator m-nav__separator--fit"></li>
                                                                    <li className="m-nav__item">
                                                                        <a href="#" className="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">
                                                                            <span className="m-nav__link-icon-wrapper">
                                                                                <i className="fa fa-shield"></i>
                                                                            </span> &nbsp;  Logout

                                                                                </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li> */}

                                            <li className={["m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light", this.props.data.get("showHeaderProductList")  ? "m-dropdown--open": null].join(" ")} data-dropdown-toggle="click" aria-expanded="true">
                                                <a className="m-nav__link m-dropdown__toggle" onClick={this.props.logOff}>
                                                    <span className="m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide"></span>
                                                    <span className="m-nav__link-icon">
                                                        <span className="m-nav__link-icon-wrapper">
                                                            <i className="fa fa-power-off"></i>
                                                        </span>
                                                    </span>
                                                </a>
                                           
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </header>
    }

    // componentDidMount() {

    //     $(".m-menu__nav").on("click", "li a", function (e) {

    //         if ($(this).parent("li").hasClass("m-menu__item--hover")) {

    //             $(this).parent("li").removeClass("m-menu__item--hover");

    //         } else {

    //             $(this).parent("li").addClass("m-menu__item--hover");
    //         }
    //         let redirectTo = $(e.target).parent("a").attr("href");
    //         return (redirectTo != undefined && redirectTo != "#") ? true : false
    //     });
    // }
}

const storeState = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownState) => {

    return {
        dispatch,
        toggleNavigation: function(e) {

            //let isVisible = $(".m-menu__item--submenu").hasClass("m-menu__item--hover");
            //dispatch(createActionType(TOGGLE_NAVIGATION, {  'visible': isVisible  }))
        },
        toggleHeaderProductListing() {
            //dispatch(createActionType(TOGGLE_HEADER_SIDE_MENU))
        },
        logOff() {
            dispatch(createActionType(LOGOFF))
        }
    }
}

module.exports = connect(storeState, mapDispatchToProps)(Header);