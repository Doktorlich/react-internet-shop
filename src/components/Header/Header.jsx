import React from "react";
import Basement from "./Basement/Basement";
import "./Header.scss";
import InfoGroup from "./InfoGroup/InfoGroup";
const Header = () => {
    return (
        <header className="header">
            <InfoGroup />
            <hr />
            <Basement />
        </header>
    );
};

export default Header;
