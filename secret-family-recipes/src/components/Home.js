import React, {useState} from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import CardContent from './Cards/CardContent';

function Home() {
  const getUsers = e => {
    e.preventDefault();
    AxiosWithAuth()
      .get('/users')
      .then(res => console.log(res))
      .catch(err => console.log('User Get Err:', err));
  };

  const getRecipes = e => {
    e.preventDefault();
    AxiosWithAuth()
      .get('/users/1/recipes')
      .then(res => console.log(res))
      .catch(err => console.log('User Get Err:', err));
  };

  const data = [
    {
        "recipe_id": 1,
        "user_name": "abc",
        "category_name": "Lunch",
        "title": "Fried Chicken",
        "source": "Grandma",
        "description": "Nice Tast",
        "image_link": null
    },
    {
        "recipe_id": 2,
        "user_name": "abc",
        "category_name": "Lunch",
        "title": "Mom's Best Chicken",
        "source": "Momma",
        "description": "Sweet BBQ Chicken",
        "image_link": null
    },
    {
        "recipe_id": 3,
        "user_name": "abc",
        "category_name": "Dinner",
        "title": "Italian Sausage Meat Balls",
        "source": "Grandma",
        "description": "Delicious with Garlic Bread",
        "image_link": null
    },
  ];

  const [recipes, setRecipes] = useState(data);

  return (
    <div>
      <CardContent recipes={recipes}/>
      <button onClick={getRecipes}>Click me</button>
    </div>
  );
}
export default Home;
