import React from "react";
import "./Menu.scss";

const Menu = () => {
    return (
        <div className="menu">
            <ul className="menu__categories">
                <li>Category menu</li>
                <li>
                    <a href="#">Bakery</a>
                </li>
                <li>
                    <a href="#">Fruit and vegetables</a>
                </li>
                <li>
                    <a href="#">Meat and fish</a>
                </li>
                <li>
                    <a href="#">Drinks</a>
                </li>
                <li>
                    <a href="#">Kitchen</a>
                </li>
            </ul>
            <div className="menu__button-icon">
                <input type="button" value={"More categories"} className="menu__button"/>
                <span className="menu__icon"></span>
            </div>
        </div>
    );
};

export default Menu;
