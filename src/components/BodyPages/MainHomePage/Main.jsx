import React from "react";
import BestSellingProducts from "./BestSellingProducts/BestSellingProducts";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import "./Main.scss";

const Main = () => {
    return <main className="main">
        <CategoryMenu/>
        <BestSellingProducts/>
    </main>;
};

export default Main;
