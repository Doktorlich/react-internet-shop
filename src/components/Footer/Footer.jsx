import React from "react";
import "./Footer.scss";
import NavigationFooter from "./NavigationFooter/NavigationFooter.jsx";
import Tags from "./Tags/Tags.jsx";

const Footer = () => {
    return <footer className="footer">
        <NavigationFooter/>
        <Tags/>
        <span  className="footer__span">Copyright © 2020 petrbilek.com</span>
    </footer>;
};

export default Footer;
