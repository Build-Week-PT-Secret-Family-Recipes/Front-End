import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Modal,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/Card.css';
import AxiosWithAuth from '../../utils/AxiosWithAuth';

const getModalStyle = () => {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '23%',
    margin: '2%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function RecipeCard(props) {
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [recipeDetails, setRecipeDetails] = useState({
    ...props.recipe,
    ingredients: [
      {
        ingredient: '',
        unit: '',
        quantity: '',
        ingredient_id: 0,
      },
    ],
    instructions: [
      {
        step_no: '',
        instruction: '',
        id: 0,
      },
    ],
  });
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
    AxiosWithAuth()
      .get(`/recipes/${props.recipeData.recipe_id}`)
      .then((res) => {
        setRecipeDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log('User Get Err:', err));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cardModal = (
    <div style={modalStyle} className={classes.paper}>
      <CardMedia
        className={classes.media}
        image='https://via.placeholder.com/150'
        title={recipeDetails.title}
      />
      <CardHeader className='card' title={recipeDetails.title} />
      <p>{recipeDetails.source}</p>
      <CardContent>
        {recipeDetails.ingredients.map((ingredient) => (
          <div key={ingredient.ingredient_id} className='ingredient'>
            <div className='quantity'>{ingredient.quantity}</div>
            <div className='unit'>{ingredient.unit}</div>
            <div className='detail'>{ingredient.ingredient}</div>
          </div>
        ))}
      <div className='instructions'>
        {recipeDetails.instructions.map((instruction) => (
          <div key={instruction.id} className='instruction'>
            <div className='step-no'>{instruction.step_no}</div>
            <div className='detal'>{instruction.instruction}</div>
          </div>
        ))}
      </div>
    </CardContent>
    </div>
  );

  return (
    <>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='fullCard'
        aria-describedby='fullCard'>
        {cardModal}
      </Modal>
    <Card className={classes.root} variant='outlined' onClick={handleOpen}>
      <CardMedia
        className={classes.media}
        image='https://via.placeholder.com/150'
        title={props.recipeData.title}
      />
      <CardHeader className='card' title={props.recipeData.title} />
      <CardContent>
        <p>{props.recipeData.description}</p>
      </CardContent>
      <p>{props.recipeData.category_name}</p>
    </Card>
    </>
  );
}
export default RecipeCard;
