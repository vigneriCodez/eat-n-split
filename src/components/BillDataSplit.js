import React from 'react';

import Button from './Button';

function BillDataSplit({ friend }) {
	return (
		<form className='form-split-bill'>
			<h2>Split a bill with {friend.name}</h2>

			<label>Bill value</label>
			<input type='number' min='1' step='any' />

			<label>Your expense</label>
			<input type='number' min='1' step='any' />

			<label>{friend.name}'s expense</label>
			<input type='number' min='1' step='any' disabled />

			<label>Who is paying?</label>
			<select>
				<option value='user'>You</option>
				<option value='friend'>{friend.name}</option>
			</select>
			<Button>Split bill</Button>
		</form>
	);
}

export default BillDataSplit;
