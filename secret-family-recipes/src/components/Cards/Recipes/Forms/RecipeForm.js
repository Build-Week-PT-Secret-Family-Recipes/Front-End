import React, { useContext } from 'react';
import { AppBar, TextField, FormControl } from '@material-ui/core/';
// import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { AddReciepeContext } from '../../../../contexts/AddReciepeContext';
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function RecipeForm() {
  const categories = [
    {
      id: 1,
      name: 'Lunch',
      description: 'For Your MidDay Meal',
    },
    {
      id: 2,
      name: 'Dinner',
      description: 'That Last Meal of the Day',
    },
    {
      id: 3,
      name: 'Supper',
      description: 'That Last Meal of the Day',
    },
    {
      id: 4,
      name: 'Side',
      description: 'Add On To Any Meal',
    },
    {
      id: 5,
      name: 'Main',
      description: 'The Major Part of the Meal',
    },
    {
      id: 6,
      name: 'Drink',
      description: 'Something refreshing for Your Meal or Any Time',
    },
    {
      id: 7,
      name: 'Dessert',
      description: 'A treat, sweet or savory',
    },
    {
      id: 8,
      name: 'Bread',
      description: 'Loaves, Rolls, and everything else',
    },
    {
      id: 9,
      name: 'Soups',
      description: 'Loaves, Rolls, and everything else',
    },
  ];

  // const recipeSchema = {
  //   catergory: yup
  //     .string('You must choose a category.')
  //     .max(120, 'Your catergory name is too long.')
  //     .required('Please choose a category.'),
  //   title: yup
  //     .string('You must have a name for your recipe.')
  //     .max(120, 'Your recipe name is too long')
  //     .required('A recipe name is required.'),
  //   source: yup
  //     .string('Who made this?')
  //     .max(120, 'The source name is too long.'),
  //   description: yup
  //     .string('You must enter a description.')
  //     .max(250, 'Your description is too long.')
  //     .required('A description is required.'),
  //   image_link: yup
  //     .string()
  //     .url(
  //       'Please enter a valid URL.',
  //       /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/gi
  //     ),
  // };

  const classes = useStyles();

  const { values, setValues } = useContext(AddReciepeContext);
  console.log('RF Valus', values);

  const handleChange = input => {
    return event => {
      setValues({ ...values, [input]: event.target.value });
    };
  };

  return (
    <>
      <AppBar title='Recipes' />
      <TextField
        placeholder='Enter your title.'
        label='Title'
        onChange={handleChange('title')}
        defaultValue={values.title}
        margin='normal'
        variant='outlined'
      />
      <br />
      <TextField
        placeholder='Who made this recipe?'
        label='source'
        onChange={handleChange('source')}
        defaultValue={values.source}
        margin='normal'
        variant='outlined'
      />
      <br />
      <TextField
        placeholder='Enter your description'
        label='description'
        onChange={handleChange('description')}
        defaultValue={values.description}
        margin='normal'
        variant='outlined'
      />
      <br />
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel htmlFor='category-select-outlined'>Category</InputLabel>
        <Select
          native
          value={values.category}
          onChange={handleChange('category')}
          label='Category'
          inputProps={{
            name: 'category',
            id: 'category-select-outlined',
          }}
        >
          <option aria-label='None' value='' />
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <br />
      <TextField
        placeholder='Enter a link to an image.'
        label='image_link'
        onChange={handleChange('image_link')}
        defaultValue={values.image_link}
        margin='normal'
        variant='outlined'
      />
      <br />
    </>
  );
}
