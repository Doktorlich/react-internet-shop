import React from "react";
import Banner from "./Banner/Banner";
import "./CategoryMenu.scss";
import Menu from "./Menu/Menu";

const CategoryMenu = () => {
    return (
        <section className="category-menu">
            <div className="category-menu__menu-banner">
                <Menu />
                <Banner />
                <Banner />
            </div>
        </section>
    );
};

export default CategoryMenu;
