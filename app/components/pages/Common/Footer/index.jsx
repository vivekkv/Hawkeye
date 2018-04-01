import React from 'react';
import Styles from './styles';

export default class Footer extends React.Component {

    render() {
        return <footer className={Styles.footer}>

            <div className="container-fluid">

                <div className="row">

                    <div className="col-xs-12 col-sm-12 col-lg-3 col-md-4">

                        <span className="m-footer__copyright">{new Date().getFullYear()} &copy; Apvera
                                 <a href="#" className="m-link">
                            </a>
                        </span>

                    </div>

                    <div className="col-xs-12 col-sm-12 col-lg-9 col-md-8">

                        {/* <ul className="m-footer__nav m-nav m-nav--inline m--pull-right">
                            <li className="m-nav__item">
                                <a href="#">
                                    <span>About</span>
                                </a>
                            </li>
                            <li className="m-nav__item">
                                <a href="#">
                                    <span className="m-nav__link-text">Privacy</span>
                                </a>
                            </li>
                            <li className="m-nav__item">
                                <a href="#">
                                    <span className="m-nav__link-text">T&amp;C</span>
                                </a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>

        </footer>
    }
}