import React from "react";

import "./GroupPost.scss";

const GroupPost = (groupPost) => {
    return (
        <div className="group-post">
            <div className="group-post__post">
                <b className="group-post__comment">{groupPost.comment}</b>
                <div className="group-post__author-date">
                    <span className="group-post__author">AuthorName</span>
                    <time className="group-post__date">dd.mm.yyyy</time>
                </div>
            </div>
            <div className="group-post__image">{groupPost.imgPost}</div>
        </div>
    );
};

export default GroupPost;
