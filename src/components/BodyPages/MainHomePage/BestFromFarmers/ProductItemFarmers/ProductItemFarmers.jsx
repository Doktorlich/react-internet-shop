import React from "react";
import "./ProductItemFarmers.scss";

const ProductItemFarmers = (itemFarmers) => {
    return (
        <section className="product-item-farmers">
            <div className="product-item-farmers__items">
                <div className="product-item-farmers__product-image">
                    <img src="" alt="" />
                    <span className="product-item-farmers__discount-icon">
                        <span className="product-item-farmers__discount-number">{itemFarmers.discount}</span>
                    </span>
                </div>
                <div className="product-item-farmers__general">
                    <div className="product-item-farmers__description">
                        <li>Product Title</li>
                        <li>Space for a small product description </li>
                    </div>
                    <div className="product-item-farmers__input">
                        <div className="product-item-farmers__text-form">
                            <input type="text" className="product-item-farmers__text-form-1" value={itemFarmers.price} disabled />
                            <input type="text" className="product-item-farmers__text-form-2" value={itemFarmers.priceDelete} disabled />
                        </div>

                        <input type="button" value="Buy now" className="product-item-farmers__button-buy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductItemFarmers;
