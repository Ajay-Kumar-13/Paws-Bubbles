import React from "react";
import Navbar from "./Navbar";

function About() {
    return (
        <React.Fragment>
            <div className="Navbar" style={{ backgroundColor: '#d97a0f' }}>
                <Navbar />
            </div>
            <div className="about">
                <div className="container text-center p-5 align-items-center d-flex justify-content-center flex-column">
                    <h1 className="caudexFont">Paws & Bubbles!</h1>
                    <h3 className="ralewayFont">We created Paws & Bubbles out of personal need. We wanted to build a platform that would help us better manage our dog's lives.</h3>

                    <button className="mt-5 fs-5 ralewayFont">Why us?</button>
                </div>
            </div>
            <div className="alignBottom bg-orange jumbotronBottom">
                <img src="/assests/goldenretriver.png" />
                <div className="container pt-5 ralewayFont">
                    <h1>We take care of your pets.</h1>
                    <h5 className="mt-4">Pet spas offer a range of services designed to pamper and care for our furry friends. Whether it's a relaxing massage or a refreshing facial, pet spas provide an opportunity for pets to enjoy some well-deserved pampering while helping to improve their overall health and well-being.</h5>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;