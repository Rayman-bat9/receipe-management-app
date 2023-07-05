import React from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from './Recipe';

function SavedRecipesList({ items, removeFromSaved, removeFromFavorites }) {
  // const [recipeList] = useState([{name: "Ватрушки на кефире, с творогом, клубникой и штрейзелем",
  // ingredients: ["Кефир - 160 мл", "Желтки (1С) - 2 шт.","Масло сливочное (размягчённое)
  // - 30 г"]}]);
  const navigate = useNavigate();
  return (
    <div className="Recipes">
      {items.length > 0
        ? (
          <ul className="recipes-list">
            {items.map((item) => (
              <div>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={() => {
                    navigate(`/saved-recipes/${item.id}`);
                  }}
                >
                  <Recipe
                    title={item.title}
                    ingredients={item.ingredients}
                    key={item.id}
                    favorite={item.favorite}
                  />
                </div>
                <div className="recipe-footer-panel">
                  <button onClick={() => removeFromSaved(item.id)} className="remove-fav-button">Удалить из сохраненных</button>
                  {item.favorite && (
                  <button
                    onClick={() => removeFromFavorites(item)}
                  >
                    Удалить из избранного
                  </button>
                  )}
                </div>
              </div>
            ))}
          </ul>
        ) : <h2>Список сохраненных рецептов пустой!</h2>}
    </div>
  );
}

export default SavedRecipesList;
