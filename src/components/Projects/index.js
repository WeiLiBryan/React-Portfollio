import "./projStyle.css";
import React from "react";

function Projects() {
    return (
        <div className="proj-content mx-grid">
            <h1 className="display-4">Projects</h1> <br />

            <div class="card">
                <img src="/assets/Clicky.png" class="card-img-top" alt="clicky" />
                <div class="card-body">
                    <h6>Clicky: Memory Game</h6>
                    <a class="btn btn-primary github" href="https://github.com/WeiLiBryan/Clicky" role="button">
                        <i class="fab fa-github"></i>
                    </a>
                    <a class="btn btn-primary github" href="https://weilibryan.github.io/Clicky/" role="button">
                        <i>Site</i>
                    </a>
                </div>
            </div>

            <div class="card">
                <img src="/assets/love-connect.png" class="card-img-top" alt="love-connect" />
                <div class="card-body">
                    <h6>Love-Connect: Dating App</h6>
                    <a class="btn btn-primary github" href="https://github.com/WeiLiBryan/Love-Connect" role="button">
                        <i class="fab fa-github"></i>
                    </a>
                    <a class="btn btn-primary github" href="https://loveconnect14.herokuapp.com/" role="button">
                        <i>Site</i>
                    </a>
                </div>
            </div>

            <div class="card">
                <img src="/assets/Note-Taker.png" class="card-img-top" alt="note-taker" />
                <div class="card-body">
                    <h6>Note-Taker</h6>
                    <a class="btn btn-primary github" href="https://github.com/WeiLiBryan/Note-Taker" role="button">
                        <i class="fab fa-github"></i>
                    </a>
                    <a class="btn btn-primary github" href="https://polar-taiga-31548.herokuapp.com/" role="button">
                        <i>Site</i>
                    </a>
                </div>
            </div>

            <div class="card">
                <img src="/assets/Unwind.png" class="card-img-top" alt="unwind" />
                <div class="card-body">
                    <h6>Unwind: Relaxation App</h6>
                    <a class="btn btn-primary github" href="https://github.com/WeiLiBryan/Unwind" role="button">
                        <i class="fab fa-github"></i>
                    </a>
                    <a class="btn btn-primary github" href="https://weilibryan.github.io/Unwind/" role="button">
                        <i>Site</i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;