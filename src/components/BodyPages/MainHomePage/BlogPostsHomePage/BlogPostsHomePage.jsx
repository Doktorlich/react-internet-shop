import React from "react";
import BlockPost from "./BlockPost/BlockPost";
import BlockRecipes from "./BlockRecipes/BlockRecipes";

import "./BlogPostsHomePage.scss";
import GroupPost from "./GroupPost/GroupPost";

const BlogPostsHomePage = () => {
    return (
        <article className="blog-posts-home-page">
            <div className="blog-posts-home-page__header">
                <h3 className="blog-posts-home-page__name-blok">Read our Blog posts</h3>
                <div className="blog-posts-home-page__button-icon">
                    <b>
                        <input type="button" value={"Go to Blog"} className="blog-posts-home-page__button" />
                    </b>
                    <span className="blog-posts-home-page__icon"></span>
                </div>
            </div>

            <div className="blog-posts-home-page__posts">
                <BlockRecipes />
                <BlockPost />
                <div className="blog-posts-home-page__group-post">
                    <GroupPost comment="Salat is kinda good start to your morning routines" imgPost={<img src="images/BlogImages/imagePost1.png" alt="" />} />
                    <GroupPost comment="Our chef tips for a great and healthy breakfast" imgPost={<img src="images/BlogImages/imagePost2.png" alt="" />} />
                    <GroupPost comment="Prepare a simple and delicious breads" imgPost={<img src="images/BlogImages/imagePost3.png" alt="" />} />
                </div>
            </div>
        </article>
    );
};

export default BlogPostsHomePage;
