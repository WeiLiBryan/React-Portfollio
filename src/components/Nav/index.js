import "./navStyle.css";
import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">William Bryan</a>

                {/* Div containing social/resume icons */}
                <div className="me-auto">
                    <i className="far fa-file"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
        </nav>
    );
}

export default Nav;