import React, { useState } from 'react';

import Button from './Button';

function BillDataSplit({ friend, onSplitBill }) {
	const [bill, setBill] = useState('');
	const [userExpense, setUserExpense] = useState('');
	const [payee, setPayee] = useState('user');

	const friendAmt = bill ? bill - userExpense : '';

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!bill || !userExpense) return;

		onSplitBill(payee === 'user' ? friendAmt : -userExpense);

		setBill('');
		setUserExpense('');
		setPayee('user');
	};

	return (
		<form className='form-split-bill' onSubmit={handleSubmit}>
			<h2>Split a bill with {friend.name}</h2>

			<label>Bill value</label>
			<input
				type='number'
				min='1'
				step='any'
				value={bill}
				onChange={(e) => setBill(Number(e.target.value))}
			/>

			<label>Your expense</label>
			<input
				type='number'
				min='1'
				step='any'
				value={userExpense}
				onChange={(e) =>
					setUserExpense(
						Number(e.target.value) > bill ? userExpense : Number(e.target.value)
					)
				}
			/>

			<label>{friend.name}'s expense</label>
			<input type='number' disabled value={friendAmt} />

			<label>Who is paying?</label>
			<select
				value={payee}
				onChange={(e) => {
					setPayee(e.target.value);
				}}
			>
				<option value='user'>You</option>
				<option value='friend'>{friend.name}</option>
			</select>
			<Button>Split bill</Button>
		</form>
	);
}

export default BillDataSplit;
