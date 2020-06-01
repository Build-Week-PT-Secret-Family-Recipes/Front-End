import React, { useEffect, useContext, useState } from 'react';
import { EditRecipeContext } from '../contexts/EditRecipeContext';
import AxiosWithAuth from '../utils/AxiosWithAuth';

export default function ViewRecipe() {
  const { currentRec, setCurrentRec } = useContext(EditRecipeContext);
  const curRecId = window.location.toString().split('?')[1];

  useEffect(() => {
    AxiosWithAuth()
      .get(`/recipes/${curRecId}`)
      .then(res => {
        console.log('axios data view', res.data);
        setCurrentRec(res.data);
      })
      .catch(err => console.log('view recipe err: ', err));
  }, [curRecId]);
  console.log('cur rec is', currentRec);
  return (
    <section className='viewrecipe'>
      {currentRec ? (
        <section className='recipe'>
          <img src={curRecId.image_link} />
          <h3>{currentRec.title}</h3>
          <p>{currentRec.category_name}</p>
          <p>{currentRec.description}</p>
          <h4>Ingredients</h4>
          {currentRec.ingredients.map(ing => {
            return (
              <section className='ingredient-list'>
                <p>{`${ing.quantity} ${ing.unit}  ${ing.ingredient}`}</p>
              </section>
            );
          })}
          <h4>Directions</h4>
          {currentRec.instructions.map(ins => {
            return (
              <section className='instruction-list'>
                <p>{`Step ${ins.step_no}: ${ins.instruction}`}</p>
              </section>
            );
          })}
          <button>Edit</button>
        </section>
      ) : (
        <h3>Getting Your Info!</h3>
      )}
    </section>
  );
}
