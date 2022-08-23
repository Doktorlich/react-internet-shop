import React from "react";
import "./Review.scss";

const Review = (reviewComment, reviewNameUser, reviewPhotoUser) => {
    return (
        <div className="review">
            <div className="review__comment">
                <q>
                    <b>{reviewComment.commentUserList}</b>
                </q>
            </div>
            <div className="review__name-user">
                <span>Name and Surname</span>
            </div>
            <div className="review__photo-user">
                <img src="images\Photo\photoUser1.png" alt="" />
            </div>
        </div>
    );
};

export default Review;
