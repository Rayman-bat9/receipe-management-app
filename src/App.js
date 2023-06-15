import { useState } from 'react';
import './App.css';
import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import RecipeItemPage from './components/RecipeItemPage';
import RecipeList from './components/recipes/RecipeList';
import FavoriteRecipesList from './components/recipes/FavoriteRecipesList';

function App() {
  const [recipes] = useState([{ name: 'Творожное печенье Розочки', ingredients: ['Творог (не жирный, сухой) - 250 г', 'Масло сливочное (размягчённое) - 80 г', 'Яйцо - 1 шт.'], id: 1 }, { name: 'Ватрушки на кефире, с творогом, клубникой и штрейзелем', ingredients: ['Творог (не жирный, сухой) - 250 г', 'Масло сливочное (размягчённое) - 80 г', 'Яйцо - 1 шт.'] }, { name: 'Блины с брынзой и кинзой', ingredients: ['Творог (не жирный, сухой) - 250 г', 'Масло сливочное (размягчённое) - 80 г', 'Яйцо - 1 шт.'] }]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const addToFavorite = (item) => {
    if (!favoriteRecipes.includes(item)) {
      setFavoriteRecipes([...favoriteRecipes, item]);
    } else {
      // eslint-disable-next-line no-undef
      alert('Рецепт уже есть в избранном');
      return;
    }
    // eslint-disable-next-line no-undef
    alert('Рецепт добавлен в избранное');
  };

  const removeFromFavorite = (item) => {
    const filteredRecipes = favoriteRecipes.filter((recipe) => recipe !== item);
    setFavoriteRecipes(filteredRecipes);
    // eslint-disable-next-line no-undef
    alert('Рецепт удален из избранного');
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="Header">
          <h1>Recipe Management App</h1>
          <Link to="/recipes">Все рецепты</Link>
          <Link to="/favorite-recipes/">Избранные рецепты</Link>
        </div>
        <Routes>
          <Route path="/recipes" element={<RecipeList items={recipes} setFavoriteRecipes={addToFavorite} />} />
          <Route path="/recipes/:id" element={<RecipeItemPage ingredients={recipes[1].ingredients} />} />
          <Route path="/favorite-recipes/" element={<FavoriteRecipesList items={favoriteRecipes} removeFromFavorite={removeFromFavorite} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
