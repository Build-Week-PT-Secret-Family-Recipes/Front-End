import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/Card.css';

import AxiosWithAuth from '../../utils/AxiosWithAuth';
import { useHistory } from 'react-router-dom';
// import ViewRecipe from '../../jenn-fixes/viewrecipe';

const useStyles = makeStyles(theme => ({
  root: {
    width: '23%',
    margin: '2%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

function RecipeCard(props) {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  const classes = useStyles();
  const history = useHistory();
  const deleteRecipe = e => {
    e.preventDefault();
    console.log(props.recipeData.recipe_id);
    AxiosWithAuth()
      .delete(`recipes/${props.recipeData.recipe_id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log('Delete Error: ', err));
  };
  // const getRecipes = e => {
  //   e.preventDefault();
  //   AxiosWithAuth()
  //     .get('/recipes')
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log('Get Recipe Error is:', err));
  // };
  // const getUsers = e => {
  //   e.preventDefault();
  //   AxiosWithAuth()
  //     .get('/users')
  //     .then(res => console.log(res))
  //     .catch(err => console.log('User Get Err:', err));
  // };
  const goToView = e => {
    e.preventDefault();
    history.push('/view=recipe');
  };

  return (
    <Card className={classes.root} variant='outlined'>
      <CardMedia
        className={classes.media}
        image='https://via.placeholder.com/150'
        title={props.recipeData.title}
      />
      <CardHeader className='card' title={props.recipeData.title} />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {props.recipeData.description}
        </Typography>
      </CardContent>
      <h4>{props.recipeData.category_name}</h4>
      <button className='view-recipe' onClick={goToView}>
        View Recipe
      </button>
      <button className='delete-recipe' onClick={deleteRecipe}>
        Delete Recipe
      </button>
    </Card>
  );
}
export default RecipeCard;
