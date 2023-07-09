import React from 'react';

function Friend({ friend }) {
	return (
		<li>
			<div>
				<img alt="Some person's face" src={friend.image} />
				<div>
					<h2>{friend.name}</h2>
					<p>
						You owe {friend.name} ${friend.balance}
					</p>
				</div>
				<button className='button'>Select</button>
			</div>
		</li>
	);
}

export default Friend;
