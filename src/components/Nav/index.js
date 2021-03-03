import "./navStyle.css";
import React from "react";

function Nav() {
    return (
        <nav className="navbar bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">William Bryan</a>

                {/* Div containing social/resume icons */}
                <div className="social">
                    
                    {/* Resume */}
                    <a href="https://drive.google.com/file/d/1us60yQRFY5PqgJMXwf9scMxRK7DQh_sM/view?usp=sharing"><i class="fas fa-file"></i></a>

                    {/* Github */}
                    <a href="https://github.com/WeiLiBryan"><i class="fab fa-github"></i></a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/william-bryan-72730019a/"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;