import React from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from './Recipe';

function RecipeList({ items, setFavoriteRecipes, setRecipeId }) {
  // const [recipeList] = useState([{name: "Ватрушки на кефире, с творогом, клубникой и штрейзелем",
  // ingredients: ["Кефир - 160 мл", "Желтки (1С) - 2 шт.","Масло сливочное (размягчённое)
  // - 30 г"]}]);
  const navigate = useNavigate();

  return (
    <div className="Recipes">
      <ul className="recipes-list">
        {items.map((item) => (
          <div>
            <div
              tabIndex={0}
              role="button"
              onClick={() => {
                setRecipeId(item.id - 1);
                navigate(`/recipes/${item.id}`);
              }}
            >
              <Recipe
                title={item.title}
                ingredients={item.ingredients}
                key={item.id}
                addToFavorites={setFavoriteRecipes}
              />
            </div>
            <div className="recipe-footer-panel">
              <button onClick={() => setFavoriteRecipes(item)} className="fav-button">Добавить в избраное</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
