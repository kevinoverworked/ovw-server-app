import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "../styles/navigation.module.scss"

class Navigation extends Component {
    constructor (props) {
        super(props);
        this.navigation = this.props;
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
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};

export default withRouter(Navigation);