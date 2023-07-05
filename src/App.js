import { useState } from 'react';
import './App.css';
import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import RecipeItemPage from './components/RecipeItemPage';
import RecipeList from './components/recipes/RecipeList';
import arrayRecipes from './components/recipes/arrayRecipes';
import SavedRecipesList from './components/recipes/SavedRecipesList';

function App() {
  const [recipes] = useState(arrayRecipes);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const updateAccess = true;

  const addToSavedRecipes = (item) => {
    const arr = savedRecipes.find((recipe) => recipe.id === item.id);
    if (!arr) {
      setSavedRecipes([...savedRecipes, item]);
    }
  };

  const removeFromSaved = (id) => {
    const filteredRecipes = savedRecipes.filter((recipe) => recipe.id !== id);
    setSavedRecipes(filteredRecipes);
  };

  const addToFavorites = (item) => {
    if (!savedRecipes.includes(item)) {
      const recipe = { ...item, favorite: true };
      setSavedRecipes([...savedRecipes, recipe]);
    }
    if (savedRecipes.find((recipe) => recipe.id === item.id)) {
      const updatedRecipes = savedRecipes.filter((recipe) => recipe.id !== item.id);
      setSavedRecipes([...updatedRecipes, { ...item, favorite: true }]);
    }
  };

  const removeFromFavorites = (item) => {
    const updatedRecipes = savedRecipes.filter((recipe) => recipe.id !== item.id);
    setSavedRecipes([...updatedRecipes, { ...item, favorite: false }]);
  };

  const updateRecipe = (recipe) => {
    const updatedRecipes = savedRecipes.map((favoriteRecipe) => {
      if (favoriteRecipe.id === recipe.id) {
        return recipe;
      }
      return favoriteRecipe;
    });
    setSavedRecipes(updatedRecipes);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="Header">
          <h1>Recipe Management App</h1>
          <Link to="/">Все рецепты</Link>
          <Link to="/saved-recipes/">Сохраненные рецепты</Link>
        </div>
        <Routes>
          <Route
            path=""
            element={(
              <RecipeList
                items={recipes}
                addToSavedRecipes={addToSavedRecipes}
                addToFavorites={addToFavorites}
              />
)}
          />
          <Route
            path="/recipes/:id"
            element={(
              <RecipeItemPage
                recipes={recipes}
                pathTo="/"
                updateAccess={false}
              />
)}
          />
          <Route
            path="/saved-recipes/:id"
            element={(
              <RecipeItemPage
                recipes={savedRecipes}
                pathTo="/saved-recipes/"
                updateAccess={updateAccess}
                updateRecipe={updateRecipe}
              />
)}
          />
          <Route
            path="/saved-recipes/"
            element={(
              <SavedRecipesList
                items={savedRecipes}
                removeFromSaved={removeFromSaved}
                removeFromFavorites={removeFromFavorites}
              />
)}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
