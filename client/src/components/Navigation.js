import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../styles/navigation.module.scss";
import LoginButton from "./LoginButton";



const Navigation = (props) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div className={styles.navigation}>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav ml-auto">
                        { isAuthenticated && 
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ovw-manager/editor">Editor</Link>
                                </li>
                            </>
                        }
                        
                        <li className={`nav-item`}>
                            <LoginButton className="nav-link" to="/" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
    
};

export default withRouter(Navigation);