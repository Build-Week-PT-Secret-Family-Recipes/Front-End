import React, { useState } from 'react';
import { Dialog, AppBar, TextField, Button }  from '@material-ui/core/';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import * as yup from 'yup';


function RecipeForm() {

const recipeSchema = {
  catergory: yup
  .string("You must choose a category.").max(120, "Your catergory name is too long.")
  .required("Please choose a category."),
  title: yup
  .string("You must have a name for your recipe.").max(120, "Your recipe name is too long" )
  .required("A recipe name is required."),
  source: yup
  .string("Who made this?").max(120, "The source name is too long."),
  description: yup
  .string("You must enter a description.").max(250, "Your description is too long.")
  .required("A description is required."),
  image_link: yup
  .string().url("Please enter a valid URL.", /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig)
};

const [values, setValues] = useState({
  catergory: '',
  title: '',
  source: '',
  description: '',
  image_link: '',
})



  const handleChange = (input) => e => {
    setValues({ [input]: e.target.value });
  };


    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Recipes" />
            <TextField
              placeholder="Enter your title."
              label="Title"
              onChange={handleChange('title')}
              defaultValue={values.title}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Who made this recipe?"
              label="source"
              onChange={handleChange('source')}
              defaultValue={values.source}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter your description"
              label="description"
              onChange={handleChange('description')}
              defaultValue={values.description}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter a catergory"
              label="catergory"
              onChange={handleChange('catergory')}
              defaultValue={values.catergory}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter a link to an image."
              label="image_link"
              onChange={handleChange('image_link')}
              defaultValue={values.image_link}
              margin="normal"
              fullWidth
            />
            <br />
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }

export default RecipeForm;