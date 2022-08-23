import React from "react";
import { NavLink } from "react-router-dom";
import "./InfoGroup.scss";

const InfoGroup = () => {
    return (
        <section className="header__info-group section">
            <ul className="header__contact-info">
                <li className="header__contact">Chat with us</li>
                <li className="header__contact">+420 336 775 664</li>
                <li className="header__contact">info@freshnesecom.com</li>
            </ul>
            <ul className="header__nav">
                <li className="header__nav-link">
                    <NavLink to={"/Blog"} className="header__link">Blog</NavLink>
                </li>
                <li className="header__nav-link">
                    <NavLink to={"/AboutUs"} className="header__link">About Us</NavLink>
                </li>
                <li className="header__nav-link">
                    <NavLink to={"/Careers"} className="header__link">Careers</NavLink>
                </li>
            </ul>
        </section>
    );
};

export default InfoGroup;
