import React from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from './Recipe';

function FavoriteRecipesList({ items, removeFromFavorite }) {
  // const [recipeList] = useState([{name: "Ватрушки на кефире, с творогом, клубникой и штрейзелем",
  // ingredients: ["Кефир - 160 мл", "Желтки (1С) - 2 шт.","Масло сливочное (размягчённое)
  // - 30 г"]}]);
  const navigate = useNavigate();
  return (
    <div className="Recipes">
      <ul className="recipes-list">
        {items.map((item) => (
          <div>
            <div tabIndex={0} role="button" onClick={() => navigate(`/recipes/${item.id - 1}`)}>
              <Recipe title={item.title} ingredients={item.ingredients} key={item.id} />
            </div>
            <div className="recipe-footer-panel">
              <button onClick={() => removeFromFavorite(item)} className="remove-fav-button">Удалить из избраного</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteRecipesList;
