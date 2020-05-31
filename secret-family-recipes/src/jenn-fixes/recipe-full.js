import React, { useState } from 'react';

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
  // const AddRecipeButton = {
  //   setValues({
  //     ...values,
  //     step,
  //     ingredients,
  //   })
  // }
  return (
    <section className='fullrecipe'>
      <form>
        <label> Title: </label>
        <input
          onChange={handleChange}
          type='text'
          name='title'
          value={values.title}
        />
        <br />
        <label> Category: </label>
        <input
          onChange={handleChange}
          name='category_id'
          value={values.category_id}
        />
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
