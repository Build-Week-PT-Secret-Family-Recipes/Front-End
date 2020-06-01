import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import Header from './components/Navigation/Header';
import logoSmall from './img/SmallColorLogo.png';
import './App.css';

import PrivateRoute from './components/Navigation/PrivateRoute';
import Home from './components/Home';
import AddRecipeStepper from './components/Cards/Recipes/AddRecipe';
import FullRecipe from './jenn-fixes/recipe-full';
import ViewRecipe from './jenn-fixes/viewrecipe';
import { RecipeContext } from './contexts/ReciepeContext';
import { EditRecipeContext } from './contexts/EditRecipeContext';

function App() {
  const [userRecipes, setUserRecipes] = useState([]);
  const [currentRec, setCurrentRec] = useState();
  return (
    <RecipeContext.Provider value={{ userRecipes, setUserRecipes }}>
      <EditRecipeContext.Provider value={{ currentRec, setCurrentRec }}>
        <BrowserRouter>
          <div className='App'>
            <div className='nav-container'>
              <Header />
              <img src={logoSmall} alt='Logo' />
            </div>
            <div className='routes'>
              <Switch>
                <Route
                  path={`${process.env.PUBLIC_URL}/login`}
                  component={AuthPage}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/register`}
                  component={AuthPage}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/`}
                  component={AuthPage}
                />
                <PrivateRoute
                  path={`${process.env.PUBLIC_URL}/recipes-home`}
                  component={Home}
                />
                <PrivateRoute
                  path={`${process.env.PUBLIC_URL}/recipes-add`}
                  component={AddRecipeStepper}
                />
                <PrivateRoute
                  path={`${process.env.PUBLIC_URL}/add-recipe`}
                  component={FullRecipe}
                />
                <PrivateRoute
                  path={`${process.env.PUBLIC_URL}/view-recipe`}
                  component={ViewRecipe}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </EditRecipeContext.Provider>
    </RecipeContext.Provider>
  );
}

export default App;
