import React, { useState } from 'react';
import IngredientList from '../ingredients/IngredientsList';

function Recipe({ title, ingredients, favorite }) {
  const [countLikes, setCountLikes] = useState(0);
  const [likeStatus, setLikeStatus] = useState(false);

  const addLike = () => {
    if (!likeStatus) {
      setCountLikes(countLikes + 1);
      setLikeStatus(true);
    } else {
      setCountLikes(countLikes - 1);
      setLikeStatus(false);
    }
  };
  return (
    <div className="recipe-block">
      <img src="https://minecraft-max.net/upload/iblock/56b/56bd08b34625bdd4434f2e34d965cd57.png" alt="chicken" className="recipe-img" />
      <h2>
        {title}
      </h2>
      <IngredientList ingredients={ingredients} />
      <div className="count-likes">
        <button onClick={addLike} className="like-button">{`${countLikes}👍`}</button>
        {favorite && <p>⭐</p>}
      </div>
    </div>
  );
}

export default Recipe;
