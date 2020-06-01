import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core/';
import RecipeForm from './Forms/RecipeForm';
import IngredientForm from './Forms/IngredientForm';
import InstructionsForm from './Forms/InstructionsForm';
import { AddReciepeContext } from '../../../contexts/AddReciepeContext';
// import AxiosWithAuth from '../../../utils/AxiosWithAuth';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Recipe', 'Ingredients', 'Instructions'];
}
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
function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <>
          <RecipeForm />
        </>
      );
    case 1:
      return (
        <>
          <IngredientForm />
        </>
      );
    case 2:
      return (
        <>
          <InstructionsForm />
        </>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export default function AddRecipeStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [values, setValues] = useState(InitialAddState);
  console.log(AddReciepeContext);
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <AddReciepeContext.Provider value={{ values, setValues }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <p>All steps completed</p>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button onClick={handleReset}>Complete</Button>
            </div>
          ) : (
            <div>
              <p>{getStepContent(activeStep)}</p>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </AddReciepeContext.Provider>
    </div>
  );
}
