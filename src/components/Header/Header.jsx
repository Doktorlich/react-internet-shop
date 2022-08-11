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
            <hr />
            <section className="header__basement">
                <div className="header_logo">
                    <h2>Freshnececom</h2>
                </div>
                <div className="header__form">
                    <div className="header__form_filter">
                        <form name="form-filter">
                            <select name="form-filter_list" id="">
                                <option>All categories</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Fruit and vegetables">Fruit and vegetables</option>
                                <option value="Meat and fish">Meat and fish</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Kitchen">Kitchen</option>
                                <option value="Special nutrition">Special nutrition</option>
                                <option value="Baby">Baby</option>
                                <option value="Pharmacy">Pharmacy</option>
                            </select>
                        </form>
                    </div>
                    <div className="header__form__search">
                        <input type="search" />
                    </div>
                    <div className="header__form_icon-search"></div>
                </div>
                <div className="header__icons">
                    
                </div>
            </section>
        </header>
    );
};

export default Header;
