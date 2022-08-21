import React from "react";

import "./BestSellingProducts.scss";
import MenuProduct from "./MenuProduct/MenuProduct";
import ProductItem from "./ProductItem/ProductItem";

const BestSellingProducts = () => {
    const discountObject = {
        discount: ["", "-36%", "-28%"],
    };
    return (
        <section className="best-selling-products">
            <div className="best-selling-products__menu-product">
                <MenuProduct />
                <div className="best-selling-products__items">
                <ProductItem discount=""  price="1.48 USD"  priceDelete="" />
                <ProductItem discount="-36%" price="0.28 USD"  priceDelete="48.56"/>
                <ProductItem discount="-28%" price="1.12 USD"  priceDelete="48.56"/>
                </div>
            </div>
        </section>
    );
};

export default BestSellingProducts;
