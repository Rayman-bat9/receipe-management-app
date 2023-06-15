import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import IngredientList from './ingredients/IngredientsList';

function RecipeItemPage({ ingredients }) {
  const [recipe, setRecipe] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((json) => setRecipe(json));
  });

  return (
    <div className="max-width">
      <div className="recipe-item-page">
        <h2>{recipe.name}</h2>
        <div className="recipe-item-block">
          <img src="https://minecraft-max.net/upload/iblock/56b/56bd08b34625bdd4434f2e34d965cd57.png" alt="chicken" className="recipe-item-img" />
          <div className="ingredients-block">
            <h3>СОСТАВ / ИНГРЕДИЕНТЫ</h3>
            <IngredientList ingredients={ingredients} />
          </div>
          <button onClick={() => navigate('/recipes')}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default RecipeItemPage;
