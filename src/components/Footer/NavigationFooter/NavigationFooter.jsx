import React from "react";
import "./NavigationFooter.scss";

const NavigationFooter = () => {
    return (
        <nav className="footer-nav">
                <ul className="footer-nav__get-in-touch">
                    <li>Get in touch</li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press Releases</a></li> 
                    <li><a href="#">Blog</a></li>
                </ul>
                <ul className="footer-nav__connections">
                    <li>Connections</li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li> 
                    <li><a href="#">Youtube</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    
                </ul>
                <ul className="footer-nav__earnings">
                    <li>Earnings</li>
                    <li><a href="#">Become an Affiliate</a></li> 
                    <li><a href="#">Advertise your product</a></li>
                    <li><a href="#">Sell on Market</a></li>
                </ul>
                <ul className="footer-nav__account">
                    <li>Account</li>
                    <li><a href="#">Your account</a></li> 
                    <li><a href="#">Returns Centre</a></li>
                    <li><a href="#">100 % purchase protection</a></li>
                    <li><a href="#">Chat with us</a></li> 
                    <li><a href="#">Help</a></li> 
                </ul>
        </nav>
    );
};

export default NavigationFooter;
