import React from 'react';
import IngredientItem from './IngredientItem';

function IngredientList({ ingredients }) {
  return (
    <ul className="ingredient-list">
      {ingredients.map((ingredient) => (
        <IngredientItem ingredient={ingredient} />
      ))}
    </ul>
  );
}

export default IngredientList;
