import React, { useState } from 'react';

import Button from './Button';

function NewFriendForm({ onAddFriend }) {
	const [name, setName] = useState('');
	const [image, setImage] = useState('https://i.pravatar.cc/48');

	const handleFriendSubmit = (e) => {
		e.preventDefault();
		if (!name || !image) return;

		const id = crypto.randomUUID();
		const newFriend = {
			id,
			name,
			image: `${image}?=${id}`,
			balance: 0,
		};
		onAddFriend(newFriend);
		setName('');
		setImage('https://i.pravatar.cc/48');
	};

	return (
		<form className='form-add-friend' onSubmit={handleFriendSubmit}>
			<label>Friend Name</label>
			<input
				type='text'
				value={name}
				placeholder='name...'
				onChange={(e) => setName(e.target.value)}
			/>
			<label>Image URL</label>
			<input
				type='text'
				placeholder='img url...'
				value={image}
				onChange={(e) => setImage(e.target.value)}
			/>
			<Button>Add</Button>
		</form>
	);
}

export default NewFriendForm;
