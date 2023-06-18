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

  const addToFavorite = (item) => {
    if (!favoriteRecipes.includes(item)) {
      setFavoriteRecipes([...favoriteRecipes, item]);
    }
  };

  const removeFromFavorite = (item) => {
    const filteredRecipes = favoriteRecipes.filter((recipe) => recipe !== item);
    setFavoriteRecipes(filteredRecipes);
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
                recipe={recipes[recipeId]}
              />
)}
          />
          <Route
            path="/favorite-recipes/"
            element={(
              <FavoriteRecipesList
                items={favoriteRecipes}
                removeFromFavorite={removeFromFavorite}
              />
)}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
