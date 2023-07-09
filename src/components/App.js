import React, { useEffect, useState } from 'react';

import FriendList from './FriendList';
import NewFriendForm from './NewFriendForm';
import Button from './Button';
import BillDataSplit from './BillDataSplit';

const initialFriends = [
	{
		id: 118836,
		name: 'Clark',
		image: 'https://i.pravatar.cc/48?u=118836',
		balance: -7,
	},
	{
		id: 933372,
		name: 'Sarah',
		image: 'https://i.pravatar.cc/48?u=933372',
		balance: 20,
	},
	{
		id: 499476,
		name: 'Anthony',
		image: 'https://i.pravatar.cc/48?u=499476',
		balance: 0,
	},
];

function App() {
	const [showFriendForm, setShowFriendForm] = useState(false);
	const [friendsDb, setFriendsDb] = useState([]);

	const handleFriendFormToggle = () => {
		setShowFriendForm((state) => !state);
	};

	const handleAddFriend = (friend) => {
		setFriendsDb((friendsDb) => [...friendsDb, friend]);
		setShowFriendForm(false);
	};

	useEffect(() => {
		setFriendsDb([...initialFriends]);
	}, []);

	return (
		<div className='app'>
			<div className='sidebar'>
				<FriendList friendsDb={friendsDb} />
				{showFriendForm && <NewFriendForm onAddFriend={handleAddFriend} />}
				<Button onClick={handleFriendFormToggle}>
					{showFriendForm ? 'Close' : 'Add Friend'}
				</Button>
			</div>
			<BillDataSplit />
		</div>
	);
}

export default App;
