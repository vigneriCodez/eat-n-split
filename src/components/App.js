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
	const [selectedFriend, setSelectedFriend] = useState(null);

	const handleFriendFormToggle = () => {
		setShowFriendForm((state) => !state);
	};

	const handleAddFriend = (friend) => {
		setFriendsDb((friendsDb) => [...friendsDb, friend]);
		setShowFriendForm(false);
	};

	const handleSelectFriend = (friend) => {
		setSelectedFriend((selectedFriend) =>
			selectedFriend?.id === friend.id ? null : friend
		);
		setShowFriendForm(false);
	};

	const handleSplitBill = (value) => {
		setFriendsDb((friends) =>
			friends.map((friend) =>
				friend.id === selectedFriend.id
					? { ...friend, balance: friend.balance + value }
					: friend
			)
		);
		setSelectedFriend(null);
	};

	useEffect(() => {
		setFriendsDb([...initialFriends]);
	}, []);

	return (
		<div className='app'>
			<div className='sidebar'>
				<FriendList
					friendsDb={friendsDb}
					onSelect={handleSelectFriend}
					selectedFriend={selectedFriend}
				/>

				{showFriendForm && <NewFriendForm onAddFriend={handleAddFriend} />}

				<Button onClick={handleFriendFormToggle}>
					{showFriendForm ? 'Close' : 'Add Friend'}
				</Button>
			</div>

			{selectedFriend && (
				<BillDataSplit
					key={selectedFriend.id}
					friend={selectedFriend}
					onSplitBill={handleSplitBill}
				/>
			)}
		</div>
	);
}

export default App;
