import React from 'react';
import { TextField, Button } from '@material-ui/core/';

function AddInstructions(props) {
  
  return (

		<>
			<div className='instructionFormInputs'>
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
			</div>
		</>
	);
}

export default AddInstructions;
