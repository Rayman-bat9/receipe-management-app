import React from 'react';
import { useNavigate } from 'react-router-dom';
import IngredientList from './ingredients/IngredientsList';

function RecipeItemPage({ recipe }) {
  const navigate = useNavigate();

  return (
    <div className="max-width">
      <div className="recipe-item-page">
        <h2>{recipe.title}</h2>
        <div className="recipe-item-block">
          <img src="https://minecraft-max.net/upload/iblock/56b/56bd08b34625bdd4434f2e34d965cd57.png" alt="chicken" className="recipe-item-img" />
          <div className="ingredients-block">
            <h3>СОСТАВ / ИНГРЕДИЕНТЫ</h3>
            <IngredientList ingredients={recipe.ingredients} />
          </div>
          <button onClick={() => navigate('/')}>Назад</button>
        </div>
      </div>
    </div>
  );
}

export default RecipeItemPage;
