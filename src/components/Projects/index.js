import "./projStyle.css";
import React from "react";

function Projects() {
    return (
        <div className="container">
        <div className="proj-content mx-grid">
            <h1 className="display-4">Projects</h1> <br />

            <div className="card">
                <img src={process.env.PUBLIC_URL + "/assets/Clicky.png"} className="card-img-top" alt="clicky" />
                <div className="card-body">
                    <h6>Clicky: Memory Game</h6>
                    <a className="btn btn-primary github" href="https://github.com/WeiLiBryan/Clicky" role="button">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="btn btn-primary github" href="https://weilibryan.github.io/Clicky/" role="button">
                        <i>Site</i>
                    </a>
                </div>
            </div>

            <div className="card">
                <img src={process.env.PUBLIC_URL + "/assets/love-connect.png"} className="card-img-top" alt="love-connect" />
                <div className="card-body">
                    <h6>Love-Connect: Dating App</h6>
                    <a className="btn btn-primary github" href="https://github.com/WeiLiBryan/Love-Connect" role="button">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="btn btn-primary github" href="https://loveconnect14.herokuapp.com/" role="button">
                        <i>Site</i>
                    </a>
                </div>
            </div>

            <div className="card">
                <img src={process.env.PUBLIC_URL + "/assets/Note-Taker.png"} className="card-img-top" alt="note-taker" />
                <div className="card-body">
                    <h6>Note-Taker</h6>
                    <a className="btn btn-primary github" href="https://github.com/WeiLiBryan/Note-Taker" role="button">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="btn btn-primary github" href="https://polar-taiga-31548.herokuapp.com/" role="button">
                        <i>Site</i>
                    </a>
                </div>
            </div>

            <div className="card">
                <img src={process.env.PUBLIC_URL + "/assets/Unwind.PNG"} className="card-img-top" alt="unwind" />
                <div className="card-body">
                    <h6>Unwind: Relaxation App</h6>
                    <a className="btn btn-primary github" href="https://github.com/WeiLiBryan/Unwind" role="button">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="btn btn-primary github" href="https://weilibryan.github.io/Unwind/" role="button">
                        <i>Site</i>
                    </a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Projects;