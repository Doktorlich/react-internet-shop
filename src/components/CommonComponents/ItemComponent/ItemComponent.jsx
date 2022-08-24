import React from "react";
import "./ItemComponent.scss";

const ItemComponent = (item) => {
    
    return (
        <section className="item-component">
            <div className="item-component__items">
                <div className="item-component__product-image">
                    <img src="" alt="" />
                    <span className="item-component__discount-icon">
                        <span className="item-component__discount-number">{item.discount}</span>
                    </span>
                </div>
                <div className="item-component__general">
                    <div className="item-component__description">
                        <li>Product Title</li>
                        <li>Space for a small product description </li>
                    </div>
                    <div className="item-component__input">
                        <div className="item-component__text-form">
                            <input type="text" className="item-component__text-form-1" value={item.price} disabled />
                            <input type="text" className="item-component__text-form-2" value={item.priceDelete} disabled />
                        </div>

                        <input type="button" value="Buy now" className="item-component__button-buy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemComponent;
