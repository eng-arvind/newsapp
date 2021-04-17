import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css';
import logo from '../img/logo.png';
export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="first">
                    <img className="logo" src={logo} alt="logo" />
                    <span className="resp">
                        inshorts <span className="muted">medialabs pvt. ltd.<br /><span className="last"> ©COPYRIGHT 2021</span></span>
                    </span>
                </div>
                <hr />
                <div className="contact">
                    <div className="contactus">contact us</div>
                    <div className="contact cnd">
                    <span className="base">Terms & conditions</span>
                    <span className="base">Privacy Policies</span>
                    <span className="base">Editorial Policy</span>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}
