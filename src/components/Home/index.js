import "./homeStyle.css";
import React from "react";
import bg from "./bgVideo.mp4";

function Home() {

    return (
        <div className="hero">
            <video autoPlay muted loop id="bgVideo">
                <source src={bg} type="video/mp4" />
            </video>


            <div className="content">
                <h1 className="display-4">William Bryan</h1> <br />
                <p className="lead">
                    Full-Stack Engineer and designer residing in Western United States <br />
                    Experience in Javascript, CSS, HTML and the MERN stack.
                </p>

                {/* content of modal */}
                <hr className="my-4" />
                <a role="button" href="https://drive.google.com/file/d/1us60yQRFY5PqgJMXwf9scMxRK7DQh_sM/view?usp=sharing" className="btn btn-primary  mainBtns">
                    <i class="fas fa-file"> Resume</i>
                </a>

                <a role="button" href="/" className="btn btn-primary  mainBtns">
                    <i class="fas fa-project-diagram"> Projects</i>
                </a>

                <br />
                <a role="button" href="/" className="btn btn-primary  mainBtns">
                    <i class="fas fa-address-book"> Contact</i>
                </a>
            </div>
        </div>
    );
}

export default Home;