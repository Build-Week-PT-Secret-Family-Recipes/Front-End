import React from 'react';
import { TextField, FormControl, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

function AddIngredients(props) {
	const classes = useStyles();

	return (
		<>
			<div className='recipeFormInputs'>
				<TextField
					id='quantity'
					label='quantity'
					type='number'
          variant='outlined'
          value={props.values.quantity}
					onChange={props.handleChange('quantity')}
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<FormControl variant='outlined' className={classes.formControl}>
					<InputLabel htmlFor='category-select-outlined'>Units</InputLabel>
					<Select
						native
						value={props.values.units}
						onChange={props.handleChange('units')}
						label='units'
						inputProps={{
							name: 'units',
							id: 'units-select-outlined',
						}}>
						<option aria-label='None' value='' />
						{props.units.map((units) => (
							<option key={units.id} value={units.id}>
								{units.name}
							</option>
						))}
					</Select>
				</FormControl>
				<TextField
					placeholder='Enter your description'
					label='description'
					onChange={props.handleChange('description')}
					defaultValue={props.values.description}
					margin='normal'
					variant='outlined'
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

export default AddIngredients;
