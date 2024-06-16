import React, { useEffect, useState } from "react";
import { CSSTransition } from 'react-transition-group';
import Lottie from 'react-lottie';
import animationData from '../lotties/doggy.json';

function ServiceContent(props) {

    const [code, haveCode] = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const [isAccepted, setIsAccepted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handleModal = () => {
        document.getElementById('myPopUp').style.display = 'block';
        setTimeout(accept, 3000);
    }

    const accept = () => {
        setIsAccepted(true)
    }

    const handleClose = () => {
        const popup = document.getElementById('myPopUp');
        popup.style.display = 'none'
    }

    return (
        <React.Fragment>
            <div className="serviceContent px-5">
                <h1 className="fw-normal">{props.service}</h1><span class="badge text-bg-success caudexFont">4.1 ★</span>
                <hr></hr>
                <h3 className="caudexFont">₹650</h3>
                <p className="mb-1">Inclusive of all taxes</p>
                <div className="mb-3">Do you have any Coupon code? <span className="coupon" onClick={() => { haveCode(!code) }}>Coupon</span></div>
                <CSSTransition
                    in={code}
                    timeout={400}
                    classNames="couponCode"
                    unmountOnExit
                >
                    <div className="couponCode">
                        <input />
                        <button className="mx-3 coupon">Apply Code</button>
                    </div>
                </CSSTransition>
                <hr></hr>
                <div>
                    <p>Details:</p>
                    <ul>
                        <li>Time - 1HR</li>
                        <li>Two Litres of water required.</li>
                        <li>Owner should be present while grooming the dog.</li>
                        <li>No need to pay any extra money.</li>
                    </ul>
                </div>
                <hr></hr>
                <button className="bookingButton fs-5" onClick={handleModal}>Book now</button>




            </div>

            <div id="myPopUp" className="popUp">
                <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="popUp-content p-5 d-flex flex-column robotoFont align-items-center justify-content-center">
                        <span className="close pointer fs-3" onClick={handleClose}>&times;</span>
                        {isAccepted ?
                            <div className="robotoFont">


                                <h1 className="fw-normal">Marshal's accepted your request!</h1>
                                <h5 className="fw-normal">Your request is for Bathing your dog with shampoo for ₹650.</h5>


                                <h2 className=" fw-normal mt-4" style={{color: '#d97a0f'}}>Arriving to this address in 10min!</h2>
                                <h6 className="fw-normal">Address: 14-3, Heaven building, Fuckyard, Newyork, 143143.</h6>
                                <p className="fs-5 mt-4">Groomer's Details:</p>
                                <ul className="fs-5">
                                    <li>Name: Groomer</li>
                                    <li>Contact-1: +91 9346072205</li>
                                    <li>Contact-2: +1 871235098</li>
                                </ul>
                                <button className="payment fs-5 ">Pay Now</button>
                                <button className="cancel fs-5 mt-3">Cancel Booking</button>



                            </div> :
                            <div>
                                <Lottie
                                    options={defaultOptions}
                                    height={150}
                                    width={150}
                                />
                                Waiting for someone to accept your request!
                            </div>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ServiceContent;