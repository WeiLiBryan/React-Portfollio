import "./homeStyle.css";
import React from "react";

function Home() {

    return (
        <div className="hero">

            <div className="content">
                <h1 className="display-4">William Bryan</h1> <br />
                <p className="lead">
                    Full-Stack Engineer and designer residing in Western United States <br />
                    Certified in Javascript, CSS, HTML and the MERN stack.
                </p>

                {/* content of modal */}
                <hr className="my-4" />
                <a role="button" href="https://drive.google.com/file/d/1us60yQRFY5PqgJMXwf9scMxRK7DQh_sM/view?usp=sharing" className="btn btn-primary  mainBtns">
                    <i class="fas fa-file"> Resume</i>
                </a>

                <a role="button" href={"#/projects"} className="btn btn-primary  mainBtns">
                    <i class="fas fa-project-diagram"> Projects</i>
                </a>
            </div>
        </div>
    );
}

export default Home;