import React from 'react';

import Friend from './Friend';

function FriendList({ friendsDb, onSelect, selectedFriend }) {
	return (
		<ul>
			{friendsDb.map((friend) => (
				<Friend
					friend={friend}
					key={friend.id}
					onSelect={onSelect}
					selectedFriend={selectedFriend}
				/>
			))}
		</ul>
	);
}

export default FriendList;
