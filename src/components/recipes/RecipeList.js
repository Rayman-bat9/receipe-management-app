import React from 'react';
import Recipe from './Recipe';

function RecipeList({ items, setFavoriteRecipes }) {
  // const [recipeList] = useState([{name: "Ватрушки на кефире, с творогом, клубникой и штрейзелем",
  // ingredients: ["Кефир - 160 мл", "Желтки (1С) - 2 шт.","Масло сливочное (размягчённое)
  // - 30 г"]}]);

  return (
    <div className="Recipes">
      <ul className="recipes-list">
        {items.map((item, index) => (
          <div>
            <Recipe
              name={item.name}
              ingredients={[]}
              key={index}
              addToFavorites={setFavoriteRecipes}
            />
            <div className="recipe-footer-panel">
              <button onClick={() => setFavoriteRecipes(item)}>Добавить в избраное</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
