import React from "react";
import "./InfoGroup.scss";

const InfoGroup = () => {
    return (
        <section className="header__info-group section">
            <ul className="header__contact-info">
                <li>Chat with us</li>
                <li>+420 336 775 664</li>
                <li>info@freshnesecom.com</li>
            </ul>
            <ul className="header__nav">
                <li>
                    <a href="#" className="header__link">
                        Blog
                    </a>
                </li>
                <li>
                    <a href="#" className="header__link">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="#" className="header__link">
                        Careers
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default InfoGroup;
