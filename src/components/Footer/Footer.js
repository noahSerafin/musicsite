import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
	  
	const year = new Date().getFullYear();
    const copyright = `Noah Serafin ${year}`

    return(
        <footer className="footer">
            <div className="footer__left">
                <p className="footer__left__tag">{copyright}</p><p className="desktop-only">|</p>
                <NavLink className="footer__left__nav-item" to="legal" state={{from: "T&C"}}>T&Cs</NavLink><p className="desktop-only">|</p>
                <NavLink className="footer__left__nav-item" to="legal" state={{from: "Cookies"}}>Cookies</NavLink><p className="desktop-only">|</p>
                <NavLink className="footer__left__nav-item" to="legal" state={{from: "FAQ"}}>FAQ</NavLink><p className="desktop-only">|</p>
                <NavLink className="footer__left__nav-item" to="legal" state={{from: "PrivacyPolicy"}}>Privacy Policy</NavLink>
            </div>
            <div className="footer__right">
                <p className="footer__right__tag"></p>
            </div>
        </footer>
    )
}

export default Footer;