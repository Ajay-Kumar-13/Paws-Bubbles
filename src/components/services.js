import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Services() {
    const [selectedItemId, setSelectedItemId] = useState('item-1');

    const navigate = useNavigate();

    const handleRadioChange = (e) => {
        setSelectedItemId(e.target.id)
    }

    const handleClick = (service) => {
        navigate(`/${service}`)
    }

    return (
        <React.Fragment>

            <div className="Navbar" style={{ backgroundColor: '#d97a0f' }}>
                <Navbar />
            </div>
            <div className=" pt-5">
                <div className="container mb-5 text-center">
                    <h1 className="fw-light ralewayFont ">COMPREHENSIVE GROOMING PACKAGES</h1>
                    <p className="ralewayFont fw-medium">Skip the stress of pet grooming! We bring the salon to you with our convenient door-to-door service. Choose from our selection of packages to pamper your furry friend!</p>
                </div>


                <div class="services">
                    <input type="radio" name="slider" id="item-1" checked={selectedItemId === 'item-1'} onChange={handleRadioChange} />
                    <input type="radio" name="slider" id="item-2" checked={selectedItemId === 'item-2'} onChange={handleRadioChange} />
                    <input type="radio" name="slider" id="item-3" checked={selectedItemId === 'item-3'} onChange={handleRadioChange} />

                    <div class="cards">
                        <label className='item' for="item-1" id="song-1">
                            <div className="service">
                                <h2>All Inclusive Pack</h2>
                                <h5>Just for <span className="fw-bold">₹1650</span></h5>
                                <hr></hr>
                                <div className="p-3 list">
                                    <i class="fa-solid fa-paw"></i> Bath with shampoo & Conditioner.<br></br>
                                    <i class="fa-solid fa-paw"></i> Nail Cliping. <br />
                                    <i class="fa-solid fa-paw"></i> Eye/Ear Cleaning. <br />
                                    <i class="fa-solid fa-paw"></i> Full body Trimming. <br />
                                    <i class="fa-solid fa-paw"></i> Paw Massage. <br />
                                    <i class="fa-solid fa-paw"></i> Combing/Brushing. <br />
                                    <i class="fa-solid fa-paw"></i> De-shedding Treatment. <br />
                                    <i class="fa-solid fa-paw"></i> Anti - Tick Treatment. <br />
                                    <i class="fa-solid fa-paw"></i> Sanitary. <br />
                                    <button className="mt-3" onClick={() => {handleClick('All Inclusive Pack')}}>Get It For <span className="fw-bold caudexFont">₹1650</span></button>
                                </div>

                            </div>
                        </label>
                        <label className='item' for="item-2" id="song-2">
                            <div className="service">
                                <h2>Spaw Treatment</h2>
                                <h5>Just for <span className="fw-bold">₹1350</span></h5>
                                <hr></hr>
                                <div className="p-3 list">
                                    <i class="fa-solid fa-paw"></i> Bath with shampoo & Conditioner.<br></br>
                                    <i class="fa-solid fa-paw"></i> Nail Cliping. <br />
                                    <i class="fa-solid fa-paw"></i> Eye/Ear Cleaning. <br />
                                    <i class="fa-solid fa-paw"></i> Hair styling/Trimming. <br />
                                    <i class="fa-solid fa-paw"></i> Paw Massage. <br />
                                    <i class="fa-solid fa-paw"></i> Combing/Brushing. <br />
                                    <button className="mt-3" onClick={() => {handleClick('Spaw Treatment')}}>Get It For <span className="fw-bold caudexFont">₹1350</span></button>
                                </div>

                            </div>
                        </label>
                        <label className='item' for="item-3" id="song-3">
                            <div className="service">
                                <h2>Basic Treatment</h2>
                                <h5>Just for <span className="fw-bold">₹1050</span></h5>
                                <hr></hr>
                                <div className="p-3 list">
                                    {/* <i class="fa-solid fa-paw"></i> Bath with shampoo & Conditioner.<br></br> */}
                                    <i class="fa-solid fa-paw"></i> Nail Cliping. <br />
                                    <i class="fa-solid fa-paw"></i> Eye/Ear Cleaning. <br />
                                    <i class="fa-solid fa-paw"></i> Hair styling/Trimming. <br />
                                    <button className="mt-3" onClick={() => {handleClick('Basic Treatment')}}>Get It For <span className="fw-bold caudexFont">₹1050</span></button>
                                </div>

                            </div>
                        </label>
                    </div>

                </div>
            </div>

            <div className="container mb-5 text-center mt-5">
                <h1 className="fw-light ralewayFont ">We Provide a range of standalone services for your needs:</h1>
                <p className="ralewayFont fw-medium">Looking to spruce up your pet without the hassle?  Our door-to-door grooming service whisks away your furry friend for a pampering session with our personalized packages!</p>
            </div>

            <div className="container singleServices d-flex  mt-5 flex-wrap justify-content-around">
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

            <div className='Content pt-4 pb-3'>
                <hr />
                <div className='d-flex justify-content-between'>
                    <div>
                        <p className='fw-light ralewayFont'>©2024 by PAWS & BUBBLES</p>
                    </div>
                    <div className='social-icons'>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default Services;