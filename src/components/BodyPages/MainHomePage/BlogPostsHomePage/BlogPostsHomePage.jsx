import React from "react";
import BlockPost from "./BlockPost/BlockPost";
import BlockRecipes from "./BlockRecipes/BlockRecipes";

import "./BlogPostsHomePage.scss";

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
                <BlockRecipes/>
                <BlockPost/>
                <BlockRecipes/>
            </div>
        </article>
    );
};

export default BlogPostsHomePage;
