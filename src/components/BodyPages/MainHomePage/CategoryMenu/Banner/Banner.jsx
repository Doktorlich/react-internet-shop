import React from "react";
import "./Banner.scss";

const Banner = (props) => {
    return (
        <section className="banner">
            <ul className="banner__header">
                <li className="banner__li-1">Banner subfocus</li>
                <li className="banner__li-2">Space for heading</li>
            </ul>
            <div className="banner__button-icon">
                <input type="button" value={"Read recepies"} className="banner__button" />
                <span className="banner__icon"></span>
            </div>
        </section>
    );
};

export default Banner;
