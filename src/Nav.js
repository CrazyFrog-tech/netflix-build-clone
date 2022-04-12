import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useNavigate();
    const trainsitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", trainsitionNavBar);
        return () => window.removeEventListener('scroll', trainsitionNavBar);
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className='nav__content'>
                <img onClick={() => history("/")} className='nav__logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt=''></img>
                <img onClick={() => history("/profile")} className='nav__avatar ' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''></img>
            </div>
        </div>
    )
}

export default Nav