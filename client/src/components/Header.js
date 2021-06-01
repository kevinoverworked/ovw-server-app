import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Navigation from "./Navigation";

class Header extends Component {
    render () {
        return (
            <header>
                <div className="logoWrapper">
                    <Link className="brand" to="/">
                        Overworked <span>Solutions</span>
                    </Link>
                    </div>
                <Navigation />
            </header>
        )
    }
}

export default withRouter(Header);