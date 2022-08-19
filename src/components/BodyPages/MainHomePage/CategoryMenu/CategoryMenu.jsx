import React from "react";
import Banner from "./Banner/Banner";
import "./CategoryMenu.scss";
import Menu from "./Menu/Menu";

const CategoryMenu = () => {
    return (
        <section className="category-menu">
            <div className="category-menu__menu-banner">
                <Menu />
                <div className="category-menu__banners">
                    <Banner />
                    <Banner />
                </div>
            </div>
        </section>
    );
};

export default CategoryMenu;
