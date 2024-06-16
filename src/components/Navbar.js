import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [user, setUser] = useState(false);
    const [currentTab, setCurrentTab] = useState('Home');

    const navigate = useNavigate();

    const switchTab = (e) => {
        if(e.target.id == 'Home') {
            navigate('/')
        } else {
            navigate(`/${e.target.id}`);
        }
    }

    useEffect(() => {
        if(window.location.pathname == '/') {
            setCurrentTab('Home')
        } else {
            setCurrentTab(window.location.pathname.slice(1))
        }
    } , [])


    return (
        <React.Fragment>
            <div className="container caudexFont">
                <div className="Content p-0">

                    <div className="menu ralewayFont">
                        <div>
                            <div className="text-center caudexFont"><h1 style={{ color: 'white' }}>Paws & Bubbles</h1></div>
                            <div className="text-center desc"><h4 className='fw-light ralewayFont'>EXCLUSIVE PET CARE SERVICES</h4></div>
                        </div>
                        <div className={`pointer ${currentTab === 'Home' ? 'active': ''}`} onClick={switchTab} id="Home">HOME</div>
                        <div className={`pointer ${currentTab === 'services' ? 'active': ''}`} onClick={switchTab} id='services'>SERVICES</div>
                        <div className={`pointer ${currentTab === 'About' ? 'active': ''}`} onClick={switchTab} id="About">ABOUT</div>
                        <div className={`pointer ${currentTab === 'Contact  ' ? 'active': ''}`} onClick={switchTab} id="Contact">CONTACT</div>

                        {
                            user ? <div className='d-flex align-items-center'>
                                <div className="user">
                                    A
                                </div>
                                <i class="fa-solid fa-caret-down pointer"></i>
                            </div> : <div className='pointer'><i class="fa-solid fa-user"></i> LOGIN</div>
                        }

                    </div>
                </div>
            </div>
            {/* <hr /> */}
        </React.Fragment>
    )
}

export default Navbar;