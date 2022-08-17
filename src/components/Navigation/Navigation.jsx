import React from "react";

import "./Navigation.scss";

const Navigation = () => {
    return (
        <nav className="navigation">
            <form action="" className="navigation__form">
                <select className="navigation__bakery select">
                    <option value="">Bakery</option>
                </select>
                <select className="navigation__fruit-and-vegetables select">
                    <option>Fruit and vegetables</option>
                </select>
                <select className="navigation__meat-and-fish select">
                    <option>Meat and fish</option>
                </select>
                <select className="navigation__drinks select">
                    <option>Drinks</option>
                </select>
                <select className="navigation__kitchen select">
                    <option>Kitchen</option>
                </select>
                <select className="navigation__special-nutrition select">
                    <option>Special nutrition</option>
                </select>
                <select className="navigation__baby select">
                    <option>Baby</option>
                </select>
                <select className="navigation__pharmacy select">
                    <option>Pharmacy</option>
                </select>
            </form>
        </nav>
    );
};

export default Navigation;
