import React from "react";
import "./ProductItem.scss";

const ProductItem = (item) => {
    
    return (
        <section className="product-item">
            <div className="product-item__items">
                <div className="product-item__product-image">
                    <img src="" alt="" />
                    <span className="product-item__discount-icon">
                        <span className="product-item__discount-number">{item.discount}</span>
                    </span>
                </div>
                <div className="product-item__general">
                    <div className="product-item__description">
                        <li>Product Title</li>
                        <li>Space for a small product description </li>
                    </div>
                    <div className="product-item__input">
                        <div className="product-item__text-form">
                            <input type="text" className="product-item__text-form-1" value={item.price} disabled />
                            <input type="text" className="product-item__text-form-2" value={item.priceDelete} disabled />
                        </div>

                        <input type="button" value="Buy now" className="product-item__button-buy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductItem;
