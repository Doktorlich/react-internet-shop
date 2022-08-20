import React from "react";
import "./MenuProduct.scss";

const MenuProduct = () => {
    return (
        <div className="menu-product">
            <ul className="menu-product__categories">
                <li>Best selling products</li>
                <li>
                    <a href="#">Kitchen</a>
                </li>
                <li>
                    <a href="#">Meat and fish</a>
                </li>
                <li>
                    <a href="#">Special nutrition</a>
                </li>
                <li>
                    <a href="#">Pharmacy</a>
                </li>
                <li>
                    <a href="#">Baby</a>
                </li>
            </ul>
            <div className="menu-product__button-icon">
                <input type="button" value={"More categories"} className="menu-product__button"/>
                <span className="menu-product__icon"></span>
            </div>
        </div>
    );
};

export default MenuProduct;
