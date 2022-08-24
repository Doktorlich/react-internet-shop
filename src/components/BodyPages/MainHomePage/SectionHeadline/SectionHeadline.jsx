import React from "react";

import "./SectionHeadline.scss";
import ItemComponent from "../../../CommonComponents/ItemComponent/ItemComponent.jsx";
const SectionHeadline = () => {
    return (
        <section className="section-headline">
            <div className="section-headline__header">
                <h3 className="section-headline__name-blok">Section Headline</h3>
                <div className="section-headline__button-icon">
                    <b>
                        <input type="button" value={"Button"} className="section-headline__button" />
                    </b>
                    <span className="section-headline__icon"></span>
                </div>
            </div>
            <div className="section-headline__component">
                <ItemComponent discount="" price="3.26 USD" priceDelete="" />
                <ItemComponent discount="" price="1.48 USD" priceDelete="" />
                <ItemComponent discount="- 36 %" price="0.28 USD" priceDelete="48.56" />
                <ItemComponent discount="" price="1.12 USD" priceDelete="" />
            </div>
        </section>
    );
};

export default SectionHeadline;
