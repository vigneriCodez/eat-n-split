import React from 'react';

import Button from './Button';

function NewFriendForm() {
	return (
		<form className='form-add-friend'>
			<label>Friend Name</label>
			<input type='text' placeholder='name...' />
			<label>Image URL</label>
			<input type='text' placeholder='img url...' />
			<Button>Add</Button>
		</form>
	);
}

export default NewFriendForm;
