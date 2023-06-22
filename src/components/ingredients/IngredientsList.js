import React from 'react';
import IngredientItem from './IngredientItem';

function IngredientList({ ingredients }) {
  return (
    <ul className="ingredient-list">
      {ingredients.map((ingredient, index) => (
        <div>
          <IngredientItem ingredient={ingredient} key={index} />
        </div>
      ))}
    </ul>
  );
}

export default IngredientList;
