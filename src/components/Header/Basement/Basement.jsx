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
                <hr className="header__line"/>
                <div className="header__search">
                    <input type="search" name="productSearch" placeholder="Search product, categories ..." className="header__search-input"/>
                </div>
               
                <input type="image" src="../../icons.svg" alt=" " name="inputSearch" className="header__icon-search" value/>
            </div>
            <div className="header__icons-user">
                <img src="../../images/icons.svg" alt="Profile" className="header__icon-profile" />
                <img src="../../images/icons.svg" alt="Shopping cart" className="header__icon-shopping-cart" />
            </div>
        </section>
    );
};

export default Basement;
