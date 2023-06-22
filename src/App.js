import { useState } from 'react';
import './App.css';
import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import RecipeItemPage from './components/RecipeItemPage';
import RecipeList from './components/recipes/RecipeList';
import FavoriteRecipesList from './components/recipes/FavoriteRecipesList';
import arrayRecipes from './components/recipes/arrayRecipes';

function App() {
  const [recipes] = useState(arrayRecipes);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [recipeId, setRecipeId] = useState(0);
  const updateAccess = true;

  const addToFavorite = (item) => {
    if (!favoriteRecipes.includes(item)) {
      setFavoriteRecipes([...favoriteRecipes, item]);
    }
  };

  const removeFromFavorite = (item) => {
    const filteredRecipes = favoriteRecipes.filter((recipe) => recipe !== item);
    setFavoriteRecipes(filteredRecipes);
  };

  const updateRecipe = (recipe) => {
    const updatedRecipes = favoriteRecipes.map((favoriteRecipe) => {
      if (favoriteRecipe.id === recipe.id) {
        return recipe;
      }
      return favoriteRecipe;
    });
    setFavoriteRecipes(updatedRecipes);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="Header">
          <h1>Recipe Management App</h1>
          <Link to="/">Все рецепты</Link>
          <Link to="/favorite-recipes/">Избранные рецепты</Link>
        </div>
        <Routes>
          <Route
            path=""
            element={(
              <RecipeList
                items={recipes}
                setFavoriteRecipes={addToFavorite}
                setRecipeId={setRecipeId}
              />
)}
          />
          <Route
            path="/recipes/:id"
            element={(
              <RecipeItemPage
                recipe={recipes.filter((recipe) => recipe.id === recipeId)[0]}
                pathTo="/"
                updateAccess={false}
              />
)}
          />
          <Route
            path="/favorite-recipes/:id"
            element={(
              <RecipeItemPage
                recipe={favoriteRecipes.filter((recipe) => recipe.id === recipeId)[0]}
                pathTo="/favorite-recipes/"
                updateAccess={updateAccess}
                updateRecipe={updateRecipe}
              />
)}
          />
          <Route
            path="/favorite-recipes/"
            element={(
              <FavoriteRecipesList
                items={favoriteRecipes}
                removeFromFavorite={removeFromFavorite}
                setRecipeId={setRecipeId}
              />
)}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
