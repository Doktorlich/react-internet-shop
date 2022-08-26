import React from "react";

import "./BlockRecipes.scss";

const BlockRecipes = (backgroundImage, tag, commentAuthor, photoAuthor, nameAuthor, publicationDate) => {
    return (
        <div className="block-recipes">
            <span className="block-recipes__tag">Dinner tips</span>
            <img src="images/BlogImages/recipesPostImage.png" alt="" className="block-recipes__img-recipes" />
            <div className="block-recipes__footer">
                <div className="block-recipes__comment-author">
                    <span className="block-recipes__comment">Our chef tips for a great and tasty dinner ready in 20 minutes</span>
                    <div className="block-recipes__block">
                        <div className="block-recipes__photo-name">
                            <img src="images\Photo\photoUser1.png" alt="" className="block-recipes__photo-author" />
                            
                            <span className="block-recipes__name-author">Сергей Манухин</span>
                        </div>
                        <span className="block-recipes__publication-date">17. 6. 2020</span>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockRecipes;
