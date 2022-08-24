import React from "react";

import "./BlockPost.scss";

const BlockPost = (imagePost, tag, commentAuthor, nameAuthor, postPublicationDate) => {
    return (
        <div className="block-post">
            <img src="" alt="" className="block-post__img-post" />
            <div className="block-post__description-post">
                <span>Vegetable</span>
                <b>Which vegetable your family will love and want’s eat each day</b>
                <div>
                    <span>AuthorName</span>
                    <span>dd.mm.yyyy</span>
                </div>
            </div>
        </div>
    );
};

export default BlockPost;
