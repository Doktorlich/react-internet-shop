import React from "react";

import "./BlockPost.scss";

const BlockPost = (imagePost, tag, commentAuthor, nameAuthor, postPublicationDate) => {
    return (
        <div className="block-post">
            <img src="images/BlogImages/blockPostImg.png" alt="" className="block-post__img-post" />
            <div className="block-post__description-post">
                <span className="block-post__tag">Vegetable</span>
                <span className="block-post__comment">
                    <b>Which vegetable your family will love and want`s eat each day</b>
                </span>
                <div className="block-post__author-date">
                    <span className="block-post__author">AuthorName</span>
                    <span className="block-post__date">dd.mm.yyyy</span>
                </div>
            </div>
        </div>
    );
};

export default BlockPost;
