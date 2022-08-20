import React from "react";

import "./BestSellingProducts.scss";
import MenuProduct from "./MenuProduct/MenuProduct";
import ProductItem from "./ProductItem/ProductItem";

const BestSellingProducts = () => {
    return (
        <section className="best-selling-products">
            <div className="best-selling-products__menu-product">
                <MenuProduct />
                <div className="best-selling-products__items">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                </div>
            </div>
        </section>
    );
};

export default BestSellingProducts;
