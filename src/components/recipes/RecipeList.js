import React from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from './Recipe';

function RecipeList({ items, addToSavedRecipes, addToFavorites }) {
  // const [recipeList] = useState([{name: "Ватрушки на кефире, с творогом, клубникой и штрейзелем",
  // ingredients: ["Кефир - 160 мл", "Желтки (1С) - 2 шт.","Масло сливочное (размягчённое)
  // - 30 г"]}]);
  const navigate = useNavigate();

  return (
    <div className="Recipes">
      <ul className="recipes-list">
        {items.map((item) => (
          <div key={item.id}>
            <div
              tabIndex={0}
              role="button"
              onClick={() => {
                navigate(`/recipes/${item.id}`);
              }}
            >
              <Recipe
                title={item.title}
                ingredients={[]}
                key={item.id}
              />
            </div>
            <div className="recipe-footer-panel">
              <button onClick={() => addToSavedRecipes(item)} className="fav-button">Добавить в сохраненные</button>
              <button onClick={() => addToFavorites(item)} className="fav-button">⭐</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
