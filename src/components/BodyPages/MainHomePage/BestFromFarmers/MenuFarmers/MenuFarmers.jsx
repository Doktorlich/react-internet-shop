import React from "react";
import "./MenuFarmers.scss";

const MenuFarmers = () => {
    return (
        <div className="menu-farmers">
            <ul className="menu-farmers__categories">
                <li>Best from Farmers</li>
                <li>
                    <a href="#">Carrots</a>
                </li>
                <li>
                    <a href="#">Tomatoes</a>
                </li>
                <li>
                    <a href="#">Potatoes</a>
                </li>
                <li>
                    <a href="#">Chicken</a>
                </li>
                <li>
                    <a href="#">Pork</a>
                </li>
            </ul>
            <div className="menu-farmers__button-icon">
                <input type="button" value={"More products"} className="menu-farmers__button"/>
                <span className="menu-farmers__icon"></span>
            </div>
        </div>
    );
};

export default MenuFarmers;
