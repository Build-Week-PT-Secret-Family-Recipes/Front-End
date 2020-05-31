import React from 'react';

function FullRecipe(props) {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
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

  return (
    <form>
      <label> Title: </label>
      <input></input>
      <label> Category: </label>
      <input></input>
      <label>Source: </label>
      <input></input>
      <label>Description :</label>
      <input>Image:</input>
      <label></label>
      <input></input>
      <label>Ingredients: </label>
      <input></input>
      <label>instructions: </label>
      <input></input>
    </form>
  );
}
export default FullRecipe;
