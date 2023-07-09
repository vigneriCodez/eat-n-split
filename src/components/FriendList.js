import React from 'react';

import Friend from './Friend';

function FriendList({ friendsDb, onSelect }) {
	return (
		<ul>
			{friendsDb.map((friend) => (
				<Friend friend={friend} key={friend.id} onSelect={onSelect} />
			))}
		</ul>
	);
}

export default FriendList;
