import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import IngredientList from './ingredients/IngredientsList';

function RecipeItemPage({
  updateRecipe, updateAccess, pathTo, recipes,
}) {
  const { id } = useParams();
  const recipe = recipes.find((recp) => recp.id === Number(id));
  const navigate = useNavigate();
  const [editingStage, setEditingStage] = useState(false);
  const [updatedRecipe, setUpdatedRecipe] = useState(recipe);
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  const handleIngredientChange = (index, event) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = event.target.value;
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleUpdate = () => {
    updateRecipe({ ...updatedRecipe, ingredients });
    setEditingStage(!editingStage);
  };

  return (
    <div className="max-width">
      <div className="recipe-item-page">
        <h2>{recipe.title}</h2>
        {editingStage
        && <input type="text" value={updatedRecipe.title} onChange={(e) => setUpdatedRecipe({ ...updatedRecipe, title: e.target.value })} />}
        <div className="recipe-item-block">
          <img src="https://minecraft-max.net/upload/iblock/56b/56bd08b34625bdd4434f2e34d965cd57.png" alt="chicken" className="recipe-item-img" />
          <div className="ingredients-block">
            <h3>СОСТАВ / ИНГРЕДИЕНТЫ</h3>
            {!editingStage
              ? (
                <IngredientList
                  ingredients={recipe.ingredients}
                />
              ) : (
                <form>
                  {ingredients.map((ingredient, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={ingredient}
                        onChange={(event) => handleIngredientChange(index, event)}
                      />
                      <button type="button" onClick={() => handleRemoveIngredient(index)}>
                        Удалить
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={handleAddIngredient}>
                    Добавить ингредиент
                  </button>
                  <button type="button" onClick={handleUpdate}>Сохранить рецепт</button>
                </form>
              )}
          </div>
          <button onClick={() => navigate(pathTo)}>Назад</button>
          {updateAccess
          && <button onClick={() => setEditingStage(!editingStage)}>Изменить рецепт</button>}
        </div>
      </div>
    </div>
  );
}

export default RecipeItemPage;
