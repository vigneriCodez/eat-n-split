import React from 'react';

import Friend from './Friend';

function FriendList({ friendsDb }) {
	return (
		<ul>
			{friendsDb.map((friend) => (
				<Friend friend={friend} key={friend.id} />
			))}
		</ul>
	);
}

export default FriendList;
