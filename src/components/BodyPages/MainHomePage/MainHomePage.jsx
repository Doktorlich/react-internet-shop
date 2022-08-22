import React from "react";
import BestFromFarmers from "./BestFromFarmers/BestFromFarmers";
import BestSellingProducts from "./BestSellingProducts/BestSellingProducts";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import "./MainHomePage.scss";

const MainHomePage = () => {
    return <main className="main-home-page">
        <CategoryMenu/>
        <BestSellingProducts/>
        <BestFromFarmers/>
    </main>;
};

export default MainHomePage;
