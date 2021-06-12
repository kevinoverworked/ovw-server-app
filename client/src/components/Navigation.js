import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { getUser, removeUserSession } from '../Utils/Common';
import styles from "../styles/navigation.module.scss"

class Navigation extends Component {
    constructor (props) {
        super(props);
        this.navigation = this.props;

    }

    // handle click event of logout button
  handleLogout () {
    removeUserSession();
    this.props.history.push('/login');
  }

    render () {
        const props = this.navigation;
        return (
            <div className={styles.navigation}>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="container">
                        <ul className="navbar-nav ml-auto">
                            <li
                                className={`nav-item  ${
                                props.location.pathname === "/" ? "active" : ""
                                }`}>
                                <Link className="nav-link" to="/">
                                Login
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                props.location.pathname === "/dashboard" ? "active" : ""
                                }`}>
                                <Link className="nav-link" to="/dashboard">
                                Dashboard
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                props.location.pathname === "/editor" ? "active" : ""
                                }`}>
                                <Link className="nav-link" to="/ovw-manager/editor">
                                Editor
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                props.location.pathname === "/" ? "active" : ""
                                }`}>
                                <Link className="nav-link" onClick={this.handleLogout}>
                                Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};

export default withRouter(Navigation);