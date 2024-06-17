import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import ServiceContent from "./serviceContent";

function SingleService() {
    const navigate = useNavigate();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        console.log("here");
        setCurrentPath(decodeURIComponent(window.location.pathname).slice(1));
    }, [])

    const handleClick = (service) => {
        setCurrentPath(service);
        navigate(`/${service}`)
    }

    return (
        <React.Fragment>
            <div className="Navbar" style={{ backgroundColor: '#d97a0f' }}>
                <Navbar />
            </div>
            <div className="container pt-5">
                <button className="backButton ralewayFont" onClick={() => { navigate(-1) }}><i class="fa-solid fa-arrow-left" style={{ marginRight: '4px' }}></i> Back</button>
            </div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-6 displayImage">
                        {currentPath == 'Bath with shampoo' && <img src="/assests/bath.jpg" />}
                        {currentPath == 'Nail Cliping' && <img src="/assests/nailcliping.jpg" />}
                        {currentPath == 'Eye&Ear Cleaning' && <img src="/assests/earcleaning.webp" />}
                        { currentPath == 'Hair Styling & Trimming' && <img src="/assests/hairstyle.jpg" /> }
                        { currentPath == 'Combing&Brushing' && <img src="/assests/combing.jpg" /> }
                        { currentPath == 'Full Body Trimming' && <img src="/assests/fullBodyTrimming.webp" /> }
                        { currentPath == 'Paw Massage' && <img src="/assests/dog-massage-reflexology.webp" /> }
                        { currentPath == 'De-shedding Treatment' && <img src="/assests/deshedding.jpeg" /> }
                        { currentPath == 'Anti-Tick Treatment' && <img src="/assests/ticktreatment.jpg" /> }
                    </div>
                    <div className="col-6 d-flex align-items-center ">
                        {currentPath == 'Bath with shampoo' && <ServiceContent service='Bath with shampoo' />}
                        {currentPath == 'Nail Cliping' && <ServiceContent service='Nail Cliping' />}
                        {currentPath == 'Eye&Ear Cleaning' && <ServiceContent service='Eye and Ear Cleaning' />}
                        { currentPath == 'Hair Styling & Trimming' && <ServiceContent service='Hair Styling & Trimming' />}
                        { currentPath == 'Combing&Brushing' && <ServiceContent service='Combing and Brushing' /> }
                        { currentPath == 'Full Body Trimming' && <ServiceContent service='Full Body Trimming' /> }
                        { currentPath == 'Paw Massage' && <ServiceContent service='Paw Massage' /> }
                        { currentPath == 'De-shedding Treatment' && <ServiceContent service='De-Shedding Treatment' /> }
                        { currentPath == 'Anti-Tick Treatment' && <ServiceContent service='Anti-Tick Treatment' /> }
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <hr></hr>
                <h1 className="robotoFont fw-normal">Related Services</h1>
                <div className="container singleServices d-flex flex-wrap justify-content-around">
                <div className="ralewayFont singleService" onClick={() => {handleClick('Bath with shampoo')}}>
                    <div className="image">
                        <img src="/assests/bath.jpg" />
                    </div>
                    <div className="m-1 d-flex align-items-center justify-content-between">
                        <span className="fs-5">Bath with shampoo</span>
                        <span class="badge text-bg-success caudexFont">4.1 ★</span>
                    </div>
                </div>

                <div className="ralewayFont singleService" onClick={() => {handleClick('Nail Cliping')}}>
                    <div className="image">
                        <img src="/assests/nailcliping.jpg" />
                    </div>
                    <div className="m-1 d-flex align-items-center justify-content-between">
                        <span className="fs-5">Nail Cliping</span>
                        <span class="badge text-bg-success caudexFont">4.1 ★</span>
                    </div>
                </div>

                <div className="ralewayFont singleService" onClick={() => {handleClick('Eye&Ear Cleaning')}}>
                    <div className="image">
                        <img src="/assests/earcleaning.webp" />
                    </div>
                    <div className="m-1 d-flex align-items-center justify-content-between">
                        <span className="fs-5">Eye/Ear Cleaning</span>
                        <span class="badge text-bg-success caudexFont">4.1 ★</span>
                    </div>
                </div>

                <div className="ralewayFont singleService" onClick={() => {handleClick('Hair Styling & Trimming')}}>
                    <div className="image">
                        <img src="/assests/hairstyle.jpg" />
                    </div>
                    <div className="m-1 d-flex align-items-center justify-content-between">
                        <span className="fs-5">Hair Styling & Trimmming</span>
                        <span class="badge text-bg-success caudexFont">4.1 ★</span>
                    </div>
                </div>

                <div className="ralewayFont singleService" onClick={() => {handleClick('Combing&Brushing')}}>
                    <div className="image">
                        <img src="/assests/combing.jpg" />
                    </div>
                     <div className="m-1 d-flex align-items-center justify-content-between">
                        <span className="fs-5">Combing/Brushing</span>
                        <span class="badge text-bg-success caudexFont">4.1 ★</span>
                    </div>
                </div>

                <div className="ralewayFont singleService" onClick={() => {handleClick('Full Body Trimming')}}>
                    <div className="image">
                        <img src="/assests/fullBodyTrimming.webp" />
                    </div>
                    <div className="m-1 d-flex align-items-center justify-content-between">
                        <span className="fs-5">Full Body Trimming</span>
                        <span class="badge text-bg-success caudexFont">4.1 ★</span>
                    </div>
                </div>

                <div className="ralewayFont singleService" onClick={() => {handleClick('Paw Massage')}}>
                    <div className="image">
                        <img src="/assests/dog-massage-reflexology.webp" />
                    </div>
                    <div className="m-1 d-flex align-items-center justify-content-between">
                        <span className="fs-5">Paw Massage</span>
                        <span class="badge text-bg-success caudexFont">4.1 ★</span>
                    </div>
                </div>

                <div className="ralewayFont singleService" onClick={() => {handleClick('De-shedding Treatment')}}>
                    <div className="image">
                        <img src="/assests/deshedding.jpeg" />
                    </div>
                    <div className="m-1 d-flex align-items-center justify-content-between">
                        <span className="fs-5">De-shedding Treatment</span>
                        <span class="badge text-bg-success caudexFont">4.1 ★</span>
                    </div>
                </div>

                <div className="ralewayFont singleService" onClick={() => {handleClick('Anti-Tick Treatment')}}>
                    <div className="image">
                        <img src="/assests/ticktreatment.jpg" />
                    </div>
                    <div className="m-1 d-flex align-items-center justify-content-between">
                        <span className="fs-5">Anti-Tick Treatment</span>
                        <span class="badge text-bg-success caudexFont">4.1 ★</span>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default SingleService;