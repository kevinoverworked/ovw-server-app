import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Navigation from "./Navigation";
import styles from "../styles/header.module.scss"

class Header extends Component {
    render () {
        return (
            <header className={styles.header}>
                <div className={styles.logoWrapper}>
                    <Link className={styles.brand} to="/">
                        Overworked <span>Solutions</span>
                    </Link>
                    </div>
                <Navigation />
            </header>
        )
    }
}

export default withRouter(Header);