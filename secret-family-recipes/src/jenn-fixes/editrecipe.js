import React, { useEffect, useContext, useState } from 'react';
import { EditRecipeContext } from '../contexts/EditRecipeContext';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import { useHistory } from 'react-router-dom';

export default function EditRecipe() {
  const history = useHistory();
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
  const { currentRec, setCurrentRec } = useContext(EditRecipeContext);
  const [values, setValues] = useState(InitialAddState);
  const curRecId = window.location.toString().split('?')[1];
  console.log(curRecId);
  const [step, setStep] = useState([
    {
      step_no: '',
      instruction: '',
    },
  ]);
  const [ingredients, setIngredients] = useState([
    {
      ingredient_id: '',
      unit_id: '',
      quantity: '',
    },
  ]);
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
  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // console.log(values);
  };
  const handleChangeStep = e => {
    setStep({
      ...step,
      [e.target.name]: e.target.value,
    });

    // console.log('step is:', step);
  };
  const handleIng = e => {
    setIngredients({
      ...ingredients,
      [e.target.name]: e.target.value,
    });

    // console.log('ingredient is:', ingredients);
  };
  const UpdateRecipe = e => {
    e.preventDefault();
    setCurrentRec({
      ...currentRec,
      title: `${values.title}`,
    });

    console.log('update recip vale:', currentRec);
    AxiosWithAuth()
      .put(`/recipes/${curRecId}`, {
        category_id: '2',
        title: 'More Ymmu Food',
        source: 'Home',
        description: 'Jenn Says Hi',
        image_link: '',
        ingredients: [
          {
            ingredient_id: '2',
            unit_id: '1',
            quantity: '9',
          },
        ],
        instructions: [
          {
            step_no: '12',
            instruction: 'Do This',
          },
        ],
      })
      .then(res => console.log(res))
      .catch(err => console.log('Recipe Add Error is', err));

    // history.push('recipes-home');
  };

  useEffect(() => {
    AxiosWithAuth()
      .get(`/recipes/${curRecId}`)
      .then(res => {
        console.log('axios data view', res.data);
        setCurrentRec(res.data);
      })
      .catch(err => console.log('view recipe err: ', err));
  }, [setCurrentRec, curRecId]);

  return (
    <section className='editrec'>
      {currentRec ? (
        <section className='fullrecipe'>
          <form onSubmit={UpdateRecipe}>
            <label> Current Title: </label>
            <p>{currentRec.title}</p>
            <label> CHange Title: </label>
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
                  <option value={item.id} key={currentRec.category_id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            {/* <p>{currentRec.category_id.map(item => {
                return (
                    
                  <section className='ingredient-list'>
                    <p>
                      {`${ing.quantity} ${ing.unit}  ${ing.ingredient} `}
                      <button>Delete</button>
                    </p>
                  </section>
                    
                );
              })}</p> */}
            <br />
            <label>Source: </label>
            <input
              onChange={handleChange}
              type='text'
              name='source'
              value={currentRec.source}
            />
            <p>{currentRec.source}</p>

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
              value={values.quantity}
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
            <p>
              {currentRec.ingredients.map(ing => {
                return (
                  <section className='ingredient-list'>
                    <p>
                      {`${ing.quantity} ${ing.unit}  ${ing.ingredient} `}
                      <button>Delete</button>
                    </p>
                  </section>
                );
              })}
            </p>

            <br />
            <label>Instructions: </label>
            {currentRec.instructions.map(ins => {
              return (
                <section className='instruction-list'>
                  <p>
                    {`Step ${ins.step_no}: ${ins.instruction} `}
                    <button>Delete</button>
                  </p>
                </section>
              );
            })}
            <br />
            <label>Step</label>
            <input
              onChange={handleChangeStep}
              type='number'
              name='step_no'
              value={ingredientslist.step_no}
            />
            <input
              onChange={handleChangeStep}
              type='textarea'
              name='instruction'
              value={ingredientslist.instruction}
            />
            <br />
            <button>Update Recipe</button>
            <button
              onClick={e => {
                AxiosWithAuth()
                  .get(`/users`)
                  .then(res => console.log(`users are`, res))
                  .catch(err => console.log(err));
              }}
            >
              click
            </button>
          </form>
        </section>
      ) : (
        <h3>Getting Your Info!</h3>
      )}
    </section>
  );
}
