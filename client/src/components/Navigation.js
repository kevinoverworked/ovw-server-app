import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navigation extends Component {
    constructor (props) {
        super(props);
        this.navigation = this.props;
    }
    render () {
        const props = this.navigation;
        return (
            <div className="navigation">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="container">
                    <Link className="navbar-brand" to="/">
                        React Multi-Page Website
                    </Link>

                    <div>
                        <ul className="navbar-nav ml-auto">
                        <li
                            className={`nav-item  ${
                            props.location.pathname === "/" ? "active" : ""
                            }`}
                        >
                            <Link className="nav-link" to="/">
                            Home
                            <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li
                            className={`nav-item  ${
                            props.location.pathname === "/about" ? "active" : ""
                            }`}
                        >
                            <Link className="nav-link" to="/about">
                            About
                            </Link>
                        </li>
                        <li
                            className={`nav-item  ${
                            props.location.pathname === "/login" ? "active" : ""
                            }`}
                        >
                            <Link className="nav-link" to="/login">
                            Login
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        )
    }
};

export default withRouter(Navigation);