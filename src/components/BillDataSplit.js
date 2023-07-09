import React from 'react';

import Button from './Button';

function BillDataSplit() {
	return (
		<form className='form-split-bill'>
			<h2>Split a bill with FRIENDNAME</h2>

			<label>Bill value</label>
			<input type='number' min='1' step='any' />

			<label>Your expense</label>
			<input type='number' min='1' step='any' />

			<label>FRIENDNAME's expense</label>
			<input type='number' min='1' step='any' disabled />

			<label>Who is paying?</label>
			<select>
				<option value='user'>You</option>
				<option value='friend'>FRIENDNAME</option>
			</select>
			<Button>Split bill</Button>
		</form>
	);
}

export default BillDataSplit;
