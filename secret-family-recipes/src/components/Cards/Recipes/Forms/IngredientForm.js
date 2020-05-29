import React, { useState } from 'react';
import AddIngredients from '../AddIngredients';

function IngredientForm() {
  const [values, setValues] = useState({
    quantity: '',
    units: '',
    ingredients: '',
  });
  const [recipes, setRecipes] = useState([]);
  const handleChange = input => {
    return event => {
      setValues({ ...values, [input]: event.target.value });
      console.log(values);
    };
  };

  const units = [
    {
      id: 1,
      name: 'Count',
    },
    {
      id: 2,
      name: 'cup',
    },
    {
      id: 3,
      name: 'ounce',
    },
    {
      id: 4,
      name: 'pound',
    },
    {
      id: 5,
      name: 'tablespoons',
    },
    {
      id: 6,
      name: 'teaspoons',
    },
    {
      id: 7,
      name: 'whole',
    },
    {
      id: 8,
      name: 'clove',
    },
    {
      id: 9,
      name: 'pinch',
    },
    {
      id: 10,
      name: 'dash',
    },
    {
      id: 11,
      name: 'half',
    },
    {
      id: 12,
      name: 'quarter',
    },
    {
      id: 13,
      name: 'bottle',
    },
  ];
  function addIngredient(arr) {
    setRecipes(...recipes, arr);
  }
  const clearInputAndAddIngredient = _ => {
    // clearInput();
    console.log('Vales at Ingredient form are', values);
    addIngredient(values);
    console.log('add info at ingredient form are', recipes);
  };

  return (
    <AddIngredients
      //   onButtonClick={clearInputAndAddIngredient}
      values={values}
      handleChange={handleChange}
      units={units}
    />
  );
}

export default IngredientForm;
