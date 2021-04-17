import React from 'react'
import logo from '../img/logo.png'
import './Navbar.css'
import Wrapper from './Wrapper'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Navbar({setCategory}) {

    return (
        <>
        <div className="navbar sticky-top">
            <div className="icon">
                <Wrapper setCategory={setCategory}/>
            </div>
            <div className="logonews">
            <img className="imglogo" src={logo} alt=""/>
            <h2 className="name">Today News</h2>
            </div>
        </div>
       
         </>
    )
}
