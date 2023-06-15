import React from 'react';
import Recipe from './Recipe';

function FavoriteRecipesList({ items, removeFromFavorite }) {
  // const [recipeList] = useState([{name: "Ватрушки на кефире, с творогом, клубникой и штрейзелем",
  // ingredients: ["Кефир - 160 мл", "Желтки (1С) - 2 шт.","Масло сливочное (размягчённое)
  // - 30 г"]}]);

  return (
    <div className="Recipes">
      <ul className="recipes-list">
        {items.map((item, index) => (
          <div>
            <Recipe name={item.name} ingredients={item.ingredients} key={index} />
            <div className="recipe-footer-panel">
              <button onClick={() => removeFromFavorite(item)}>Удалить из избраного</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteRecipesList;
