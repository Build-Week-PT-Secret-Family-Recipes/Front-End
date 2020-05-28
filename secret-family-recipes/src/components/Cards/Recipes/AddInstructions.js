import React from 'react';
import { TextField, Button} from '@material-ui/core/';
import '../../../css/instructionForm.css';

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2)
//   }
// }));

function AddInstructions(props) {

  return (
		<>
      <TextField
					id='stepNo'
					label='stepNo'
					type='number'
          variant='outlined'
          value={props.values.stepNo}
          onChange={props.handleChange('stepNo')}
          InputProps={{
            readOnly: true,
          }}
				/>
				<TextField
					id='instructions'
					label='instructions'
					type='text'
          variant='outlined'
          value={props.values.instructions}
					onChange={props.handleChange('instructions')}
				/>
				<Button
					color='secondary'
					variant='outlined'
					onClick={props.onButtonClick}>
					Add
				</Button>
				</>
	);
}

export default AddInstructions;
