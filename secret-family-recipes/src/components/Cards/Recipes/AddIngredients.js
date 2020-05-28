import React from 'react';
import { TextField, FormControl, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl: {
		display: "inline-block",
		alignItems: "center",
	},
}));

function AddIngredients(props) {
	const classes = useStyles();

	return (
		<>
			<FormControl variant='outlined' className={classes.formControl}>
				<TextField
					id='quantity'
					label='quantity'
					type='number'
					placeholder=''
          variant='outlined'
          value={props.values.quantity}
					onChange={props.handleChange('quantity')}
					InputLabelProps={{
						shrink: true,
					}}
				/>
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
					<TextField
					placeholder='Enter your description'
					id='description'
					label='description'
					onChange={props.handleChange('description')}
					defaultValue={props.values.description}
					variant='outlined'
				/>
				<Button
					color='secondary'
					variant='outlined'
					onClick={props.onButtonClick}>
					Add
				</Button>
				</FormControl>
		</>
	);
}

export default AddIngredients;
