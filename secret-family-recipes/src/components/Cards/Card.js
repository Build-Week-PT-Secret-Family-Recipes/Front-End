import React, { useState } from 'react';

function RecipeCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="cardContainer">
      <img src={props.recipeData.image_link} alt={props.recipeData.title} />
        <h3>{props.recipeData.title}</h3>
        <p>{props.recipeData.description}</p>
        <p>{props.recipeData.category_name}</p>
    </div>
  );
}
export default RecipeCard;