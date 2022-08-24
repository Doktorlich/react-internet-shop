import React from "react";
import BestFromFarmers from "./BestFromFarmers/BestFromFarmers";
import BestSellingProducts from "./BestSellingProducts/BestSellingProducts";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import "./MainHomePage.scss";
import ReviewBlock from "./ReviewBlock/ReviewBlock";
import SectionHeadline from "./SectionHeadline/SectionHeadline";

const MainHomePage = () => {
    return <main className="main-home-page">
        <CategoryMenu/>
        <BestSellingProducts/>
        <BestFromFarmers/>
        <ReviewBlock/>
        <SectionHeadline/>
    </main>;
};

export default MainHomePage;
