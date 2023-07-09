import React from 'react';

import Friend from './Friend';

function FriendList({ friendsDb }) {
	return (
		<div>
			<ul>
				{friendsDb.map((friend) => (
					<Friend friendData={friend} key={friend.id} />
				))}
			</ul>
		</div>
	);
}

export default FriendList;
