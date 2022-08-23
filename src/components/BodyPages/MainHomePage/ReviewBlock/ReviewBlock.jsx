import React from "react";
import Review from "./Review/Review";
import "./ReviewBlock.scss";



const ReviewBlock = () => {
    const reviewBlockData = {
        commentUser: " This is an super space for your customers quote. Don’t worry it works smooth as pie. You will get all what you need by writing a text here ",
    };

    return (
        <section className="review-block">
            <span className="review-block__gradient-start"></span>
            <div className="review-block__header">
                <h3 className="review-block__name-blok">Our customers says</h3>
                <div className="review-block__button-icon">
                    <b>
                        
                        <input type="button" value={"Button"} className="review-block__button" />
                    </b>
                    <span className="review-block__icon"></span>
                </div>
            </div>
            <div className="review-block__review-switch">
               
                <input type="button" value="" className="review-block__expected-review" />
                <input type="button" value="" className="review-block__next-review" />
                
            </div>
            <div className="review-block__review">
                <Review commentUserList={reviewBlockData.commentUser} nameUserList={"Name and Surname"} />
                <Review commentUserList={reviewBlockData.commentUser} nameUserList={"Name and Surname"} />
                <Review commentUserList={reviewBlockData.commentUser} nameUserList={"Name and Surname"} />
                <Review commentUserList={reviewBlockData.commentUser} nameUserList={"Name and Surname"} />
                <Review commentUserList={reviewBlockData.commentUser} nameUserList={"Name and Surname"} />
                <Review commentUserList={reviewBlockData.commentUser} nameUserList={"Name and Surname"} />
            </div>
            <span className="review-block__gradient-end"></span>
        </section>
    );
};

export default ReviewBlock;
