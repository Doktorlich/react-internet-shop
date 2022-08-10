import React from "react";
import "./Header.scss";
const Header = () => {
    return (
        <header className="header">
            <section className="header__info-group">
                <ul className="header__info-group__contact-info">
                    <li>Chat with us</li>
                    <li>+420 336 775 664</li>
                    <li>info@freshnesecom.com</li>
                </ul>
                <ul className="header__info-group__nav">
                    <li>Blog</li>
                    <li>About Us</li>
                    <li>Careers</li>
                </ul>
            </section>
            <section>Header</section>
        </header>
    );
};

export default Header;
