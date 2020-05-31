import React, { useState } from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';

function FullRecipe(props) {
  const units = [
    { id: 0, name: 'Select one' },
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
  const ingredientslist = [
    { id: 0, name: 'Select one' },
    { id: 1, name: 'Salt' },
    { id: 2, name: 'Pepper' },
    { id: 3, name: 'Onion' },
    { id: 4, name: 'Garlic' },
    { id: 5, name: 'Potato' },
    { id: 6, name: 'Tomatoes' },
    { id: 7, name: 'cheese' },
    { id: 8, name: 'garlic powder' },
    { id: 9, name: 'red bell pepper' },
    { id: 10, name: 'Green Bell Pepper' },
    { id: 11, name: 'Ground Turkey' },
    { id: 12, name: 'Italian Sausage' },
    { id: 13, name: 'egg' },
    { id: 14, name: 'Chicken Legs' },
    { id: 15, name: 'BBQ Sauce' },
    { id: 16, name: 'red pepper flakes' },
    { id: 21, name: 'Paprika' },
    { id: 31, name: 'Steak' },
  ];
  const cats = [
    { id: 0, name: 'select one' },
    { id: 1, name: 'Lunch', description: 'For Your MidDay Meal' },
    { id: 2, name: 'Dinner', description: 'That Last Meal of the Day' },
    { id: 3, name: 'Supper', description: 'That Last Meal of the Day' },
    { id: 4, name: 'Side', description: 'Add On To Any Meal' },
    { id: 5, name: 'Main', description: 'The Major Part of the Meal' },
    {
      id: 6,
      name: 'Drink',
      description: 'Something refreshing for Your Meal or Any Time',
    },
    { id: 7, name: 'Dessert', description: 'A treat, sweet or savory' },
    { id: 8, name: 'Bread', description: 'Loaves, Rolls, and everything else' },
    { id: 9, name: 'Soups', description: 'Loaves, Rolls, and everything else' },
  ];

  const InitialAddState = {
    category_id: '',
    title: '',
    source: '',
    description: '',
    image_link: '',
    ingredients: [
      {
        ingredient_id: '',
        unit_id: '',
        quantity: '',
      },
    ],
    instructions: [
      {
        step_no: '',
        instruction: '',
      },
    ],
  };
  const [values, setValues] = useState(InitialAddState);
  const [step, setStep] = useState({
    step_no: '',
    instruction: '',
  });
  const [ingredients, setIngredients] = useState({
    ingredient_id: '',
    unit_id: '',
    quantity: '',
  });

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(values);
  };
  const handleChangeStep = e => {
    setStep({
      ...step,
      [e.target.name]: e.target.value,
    });

    console.log('step is:', step);
  };
  const handleIng = e => {
    setIngredients({
      ...ingredients,
      [e.target.name]: e.target.value,
    });

    console.log('ingredient is:', ingredients);
  };
  const AddRecipeButton = e => {
    e.preventDefault();
    setValues({
      ...values,
      instructions: [...step],
      ingredients: [...ingredients],
    });
    console.log(values);
    AxiosWithAuth()
      .post(`/recipes`, values)
      .then(res => console.log(res))
      .catch(err => console.log('Recipe Add Error is'));
    // .get(`/categories`)
    // .then(res => console.log(res))
    // .catch(err => console.log('error x is', err));
  };

  return (
    <section className='fullrecipe'>
      <form onSubmit={AddRecipeButton}>
        <label> Title: </label>
        <input
          onChange={handleChange}
          type='text'
          name='title'
          value={values.title}
        />
        <br />
        <label> Category: </label>
        <select onChange={handleChange} name='category_id'>
          {cats.map(item => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <br />
        <label>Source: </label>
        <input
          onChange={handleChange}
          type='text'
          name='source'
          value={values.source}
        />

        <br />
        <label>Description :</label>
        <input
          onChange={handleChange}
          type='text'
          name='description'
          value={values.description}
        />

        <br />
        <label>Image Link (url only):</label>
        <input
          onChange={handleChange}
          type='url'
          name='image_link'
          value={values.image_link}
        />
        <br />
        <label>Ingredients: </label>
        <br />
        <label>Amount</label>
        <input
          onChange={handleIng}
          type='number'
          name='quantity'
          value={ingredients.quantity}
        />
        <select onChange={handleIng} type='text' name='unit_id'>
          {units.map(item => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <label>Ingredient</label>
        <select onChange={handleIng} name='ingredient_id'>
          {ingredientslist.map(item => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <br />
        <label>Instructions: </label>
        <br />
        <label>Step</label>
        <input
          onChange={handleChangeStep}
          type='number'
          name='step_no'
          value={step.step_no}
        />
        <input
          onChange={handleChangeStep}
          type='textarea'
          name='instruction'
          value={step.instruction}
        />
        <br />
        <button>Add Recipe</button>
      </form>
    </section>
  );
}
export default FullRecipe;
