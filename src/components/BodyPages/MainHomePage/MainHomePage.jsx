import React from "react";
import BestFromFarmers from "./BestFromFarmers/BestFromFarmers";
import BestSellingProducts from "./BestSellingProducts/BestSellingProducts";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import "./MainHomePage.scss";
import ReviewBlock from "./ReviewBlock/ReviewBlock";

const MainHomePage = () => {
    return <main className="main-home-page">
        <CategoryMenu/>
        <BestSellingProducts/>
        <BestFromFarmers/>
        <ReviewBlock/>
    </main>;
};

export default MainHomePage;
