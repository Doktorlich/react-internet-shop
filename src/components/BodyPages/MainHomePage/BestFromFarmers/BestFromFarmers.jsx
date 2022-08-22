import React from "react";

import "./BestFromFarmers.scss";
import MenuFarmers from "./MenuFarmers/MenuFarmers.jsx";
import ProductItemFarmers from "./ProductItemFarmers/ProductItemFarmers.jsx";

const BestFromFarmers = () => {
    return (
        <section className="best-from-farmers">
            <div className="best-from-farmers__menu-product">
                <MenuFarmers />
                <div className="best-from-farmers__items">
                    <ProductItemFarmers discount="" price="1.48 USD" priceDelete="" />
                    <ProductItemFarmers discount="-28%" price="1.12 USD" priceDelete="48.56" />
                    <ProductItemFarmers discount="-28%" price="1.12 USD" priceDelete="48.56" />
                </div>
            </div>
        </section>
    );
};

export default BestFromFarmers;
