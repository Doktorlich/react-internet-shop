import React from "react";
import "./Basement.scss";

const Basement = () => {
    return (
        <section className="header__basement section">
            <div className="header__logo">
                <h2>Freshnececom</h2>
            </div>
            <div className="header__form">
                <div className="header__filter">
                    <form name="header__form-filter">
                        <select name="header__filter-list" id="">
                            <option>All categories</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Fruit-and-vegetables">Fruit and vegetables</option>
                            <option value="Meat-and-fish">Meat and fish</option>
                            <option value="Drinks">Drinks</option>
                            <option value="Kitchen">Kitchen</option>
                            <option value="Special-nutrition">Special nutrition</option>
                            <option value="Baby">Baby</option>
                            <option value="Pharmacy">Pharmacy</option>
                        </select>
                    </form>
                </div>

                <div className="header__line"></div>
                <div className="header__search">
                    <input type="search" name="productSearch" placeholder="Search product, categories ..." className="header__search-input" />
                </div>
                {/* <img src="../../../images/icons.svg" alt=""  className="header__icon-search"/> */}
                <ul className="header__block-icon-search">
                    <li className="header__icon-search"></li>
                </ul>
            </div>

            <ul className="header__icons-user">
                <li className="header__icon-profile"></li>
                <li className="header__icon-shopping-cart">
                    <li className="header__number-item-cart">
                        <div className="header__circle"></div>
                        <div className="header__number">4</div>
                    </li>
                </li>
            </ul>

            {/* <img alt="Profile" src="images/icons.svg" />
                <img alt="Shopping cart" src="images/icons.svg" /> */}
        </section>
    );
};

export default Basement;
