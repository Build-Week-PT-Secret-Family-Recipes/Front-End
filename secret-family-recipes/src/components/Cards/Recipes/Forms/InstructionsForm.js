import React, { useState } from 'react';
import AddInstructions from '../AddInstructions';

function InstructionsForm() {
	const [values, setValues] = useState({
		instructions: '',
		stepNo: 1,
	});

	const handleChange = (input) => {
		return (event) => {
			setValues({ ...values, [input]: event.target.value });
		};
	};

	// const clearInputAndAddIngredient = _ => {
	//   clearInput();
	//   addIngredient(inputValue);
	// };

	return (
			<AddInstructions values={values} handleChange={handleChange} />
	);
}

export default InstructionsForm;
